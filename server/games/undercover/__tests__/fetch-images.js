// Récupère automatiquement les images des 95 personnages via l'API Jikan
// (wrapper non-officiel MyAnimeList, gratuit, sans clé).
//
// Usage : node server/games/undercover/__tests__/fetch-images.js
//
// Télécharge dans : public/assets/img/undercover/<id>.jpg
// (on utilise public/ car Vite sert ce dossier tel quel, et les URLs
//  /assets/img/undercover/xxx.png dans characters.js y pointent directement)
//
// Rate limit Jikan : 3 req/sec → on attend 400ms entre chaque appel.
// Durée estimée : ~40 secondes pour 95 persos.
//
// Les fichiers existants ne sont PAS écrasés (pour permettre de remplacer
// manuellement les images moins bonnes sans risque).

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import { CHARACTERS } from "../characters.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../../../../public/assets/img/undercover");

// Requêtes de recherche spécifiques pour les cas ambigus (sinon on utilise juste le nom)
const SEARCH_OVERRIDES = {
  gaara: "Gaara",
  jiraiya: "Jiraiya Toad Sage",
  pain: "Nagato",
  nami: "Nami",
  frieza: "Frieza",
  trunks: "Trunks Briefs",
  cell: "Cell",
  light: "Light Yagami",
  l: "Lawliet L",
  near: "Nate River Near",
  mello: "Mihael Keehl Mello",
  gon: "Gon Freecss",
  hisoka: "Hisoka Morow",
  chrollo: "Chrollo Lucilfer",
  saitama: "Saitama",
  genos: "Genos",
  natsu: "Natsu Dragneel",
  mob: "Shigeo Kageyama",
  kaneki: "Ken Kaneki",
  dazai: "Osamu Dazai",
  loid: "Loid Forger",
  mikey: "Manjirou Sano",
  shanks: "Shanks",
  rei: "Rei Ayanami",
  asta: "Asta Black Clover",
  denji: "Denji Chainsaw",
  mascarade: null // skip
};

// URLs typiques de placeholder MAL (image "no image available")
const PLACEHOLDER_PATTERNS = [
  "questionmark",
  "apple-touch",
  "default-image"
];

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "noxi-undercover-fetcher" } }, res => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        if (res.statusCode === 429) {
          return reject(new Error("429 rate limit"));
        }
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

async function fetchJsonWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchJson(url);
    } catch (e) {
      if (e.message.includes("429") && i < retries - 1) {
        // Backoff exponentiel : 2s, 4s, 8s
        const wait = 2000 * Math.pow(2, i);
        console.log(`    ⏳ rate limited, retry dans ${wait}ms...`);
        await sleep(wait);
        continue;
      }
      throw e;
    }
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, res => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`HTTP ${res.statusCode} on ${url}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", err => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Output: ${OUT_DIR}`);
  console.log(`Characters: ${CHARACTERS.length}`);
  console.log("");

  let ok = 0, skipped = 0, failed = 0;
  const failures = [];

  for (const c of CHARACTERS) {
    const outFile = path.join(OUT_DIR, `${c.id}.jpg`);
    if (fs.existsSync(outFile)) {
      console.log(`  [skip] ${c.id} (fichier existe)`);
      skipped++;
      continue;
    }

    const query = SEARCH_OVERRIDES[c.id] ?? c.name;
    if (!query) { skipped++; continue; }

    try {
      const url = `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(query)}&limit=5`;
      const data = await fetchJsonWithRetry(url);
      // Parcourir les 5 premiers résultats pour trouver le premier qui a une image
      // valide (pas un placeholder "no image")
      const results = data?.data || [];
      const found = results.find(r => {
        const u = r?.images?.jpg?.image_url;
        if (!u) return false;
        return !PLACEHOLDER_PATTERNS.some(p => u.includes(p));
      });

      if (!found) {
        failures.push({ id: c.id, name: c.name, reason: `pas de résultat avec image (${results.length} résultats)` });
        console.log(`  [FAIL] ${c.id} (${c.name}) : pas d'image (${results.length} résultats)`);
        failed++;
      } else {
        await downloadImage(found.images.jpg.image_url, outFile);
        console.log(`  [ok]   ${c.id.padEnd(14)} → match "${found.name}"`);
        ok++;
      }
    } catch (e) {
      failures.push({ id: c.id, name: c.name, reason: e.message });
      console.log(`  [FAIL] ${c.id} (${c.name}) : ${e.message}`);
      failed++;
    }

    // Rate limit Jikan : 1 req/sec pour éviter le 429
    await sleep(1100);
  }

  console.log("");
  console.log(`Résumé : ${ok} téléchargés, ${skipped} skippés, ${failed} échecs`);
  if (failures.length > 0) {
    console.log("");
    console.log("Échecs (à télécharger à la main via docs/games/undercover/characters-images.md) :");
    failures.forEach(f => console.log(`  - ${f.id} (${f.name}) : ${f.reason}`));
  }

  console.log("");
  console.log("Note : les images sont en .jpg. Pense à :");
  console.log("  1. Les compresser (tinypng.com / squoosh.app) si > 150KB");
  console.log("  2. Adapter characters.js si tu veux des .png au lieu de .jpg");
  console.log("     (actuellement les chemins dans characters.js sont en .png)");
}

main().catch(err => {
  console.error("Erreur fatale:", err);
  process.exit(1);
});
