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
// Table d'overrides pour les recherches ambigues ou mal indexees sur MAL.
// MAL utilise souvent le romaji japonais strict (Gokuu, Gojou, Bakugou...),
// alors que les fans connaissent les versions occidentalisees. On force
// les bonnes queries ici pour eviter les mauvais matchs.
const SEARCH_OVERRIDES = {
  // Naruto
  gaara: "Gaara",
  jiraiya: "Jiraiya Toad Sage",
  pain: "Nagato",

  // One Piece
  nami: "Nami",
  shanks: "Shanks",

  // Dragon Ball Z — romaji japonais strict pour eviter les homonymes (Saiyuki, etc.)
  goku: "Son Gokuu",
  gohan: "Son Gohan",
  vegeta: "Vegeta Saiyan",
  frieza: "Freeza",
  trunks: "Trunks Briefs",
  cell: "Cell",
  broly: "Broly",

  // Death Note
  light: "Light Yagami",
  l: "Lawliet L",
  near: "Nate River Near",
  mello: "Mihael Keehl Mello",

  // Hunter x Hunter
  gon: "Gon Freecss",
  hisoka: "Hisoka Morow",
  chrollo: "Chrollo Lucilfer",

  // JJK — MAL utilise "ou" au lieu de "o"
  gojo: "Satoru Gojou",
  yuji: "Yuuji Itadori",
  geto: "Suguru Getou",

  // MHA — Bakugou en romaji
  bakugo: "Katsuki Bakugou",
  todoroki: "Shouto Todoroki",

  // Demon Slayer
  zenitsu: "Zenitsu Agatsuma",
  giyu: "Giyuu Tomioka",
  muzan: "Muzan Kibutsuji",

  // OPM
  saitama: "Saitama",
  genos: "Genos",

  // Autres
  natsu: "Natsu Dragneel",
  mob: "Shigeo Kageyama",
  kaneki: "Ken Kaneki",
  dazai: "Osamu Dazai",
  loid: "Loid Forger",
  mikey: "Manjirou Sano",
  rei: "Rei Ayanami",
  asta: "Asta Black Clover",
  denji: "Denji Chainsaw",

  // Sesshoumaru en romaji
  sesshomaru: "Sesshoumaru",

  // Skip
  mascarade: null
};

// URLs typiques de placeholder MAL (image "no image available")
const PLACEHOLDER_PATTERNS = [
  "questionmark",
  "apple-touch",
  "default-image"
];

// Pour les cas ambigus où plusieurs persos portent le même nom, on peut
// forcer un MAL character ID précis. Ces IDs ont été vérifiés via l'endpoint
// /anime/{id}/characters pour garantir le bon match.
//
// Pour trouver un nouveau MAL ID, voir docs/games/undercover/images-pipeline.md.
const MAL_ID_OVERRIDES = {
  goku: 246,         // Son Gokuu (Dragon Ball)
  sakura: 145,       // Haruno Sakura (Naruto)
  pain: 3180,        // Pain (Naruto)
  nami: 723,         // Nami (One Piece)
  sanji: 305,        // Sanji (One Piece)
  cell: 3908,        // Cell (DBZ)
  frieza: 3694,      // Freeza (DBZ)
  hitsugaya: 245,    // Toushirou Hitsugaya (Bleach)
  levi: 45627,       // Levi (AoT)
  dabi: 139262,      // Dabi (MHA)
  kirito: 36765,     // Kazuto Kirigaya (SAO)
  jotaro: 4003,      // Joutarou Kuujou (JoJo)
  asta: 124731,      // Asta (Black Clover)
  yuno: 124732,      // Yuno (Black Clover)
  griffith: 424,     // Griffith (Berserk)
  allen: 139,        // Allen Walker (D.Gray-man)
  dazai: 125056,     // Osamu Dazai (Bungo Stray Dogs)
  gohan: 2093,       // Son Gohan (DBZ)
  rei: 86,           // Rei Ayanami (Evangelion)
  sesshomaru: 1358,  // Sesshoumaru (Inuyasha)

  // ─── 27 nouveaux persos (janvier 2026 extension) ───────────────────────
  // Nanatsu no Taizai
  meliodas: 72921,
  ban: 77605,
  escanor: 95985,
  // Re:Zero
  subaru: 118735,
  rem: 118763,
  emilia: 118737,
  // Fire Force
  shinra: 133767,
  benimaru: 141573,
  // Haikyuu!!
  hinata_haikyuu: 64769,
  kageyama: 64771,
  // Vinland Saga
  thorfinn: 10138,
  askeladd: 13020,
  // Psycho-Pass
  kogami: 68315,
  makishima: 69725,
  // Hajime no Ippo
  ippo: 15,
  // Kuroko's Basketball
  kuroko: 18769,
  kagami: 18770,
  // FMA Brotherhood
  greed: 351,
  envy: 651,
  lust: 650,
  father: 15542,
  // Naruto villains
  kabuto: 2405,
  kaguya: 108297,
  hashirama: 12464,
  // MHA heroes/villains
  endeavor: 141624,
  hawks: 162597,       // Wing Hero Hawks (Keigo Takami, anime version)
  stain: 132691,

  // ─── Batch avril 2026 (28 persos, anime récents + iconiques manquants) ──
  // Blue Lock
  isagi: 177491,       // Isagi Yoichi
  rin_itoshi: 188026,  // Rin Itoshi
  bachira: 178716,     // Bachira Meguru
  reo: 178719,         // Mikage Reo
  // Solo Leveling
  jinwoo: 174185,      // Sung Jin-Woo (Shadow Monarch)
  cha_haein: 173979,   // Cha Hae-In (The Dancer)
  // Frieren
  frieren: 184947,     // Frieren
  fern: 188176,        // Fern
  // Dandadan
  momo_dandadan: 196898, // Ayase Momo
  okarun: 196899,      // Takakura Ken (Okarun)
  // Jigokuraku (Hell's Paradise)
  gabimaru: 171437,    // Gabimaru
  sagiri: 173139,      // Yamada Asaemon Sagiri
  // Steins;Gate
  okabe: 35252,        // Okabe Rintarou
  kurisu: 34470,       // Makise Kurisu
  // The Promised Neverland
  emma: 144337,        // Emma
  norman: 144916,      // Norman
  ray: 144919,         // Ray
  // Oshi no Ko
  aqua: 185313,        // Hoshino Aquamarine
  ruby: 186921,        // Hoshino Ruby
  // JJK (suppléments)
  nanami: 164473,      // Nanami Kento
  toji: 175543,        // Touji Fushiguro (Zenin)
  maki: 164482,        // Zenin Maki
  // Demon Slayer (suppléments)
  rengoku: 151143,     // Rengoku Kyoujurou
  akaza: 174147,       // Akaza
  muichiro: 151147,    // Tokitou Muichirou
  // One Piece (suppléments)
  robin: 61,           // Nico Robin (Devil Child)
  sabo: 32893,         // Sabo
  doflamingo: 2754     // Donquixote Doflamingo
};

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

  // Option --force pour re-télécharger même les images déjà présentes
  const force = process.argv.includes("--force");

  // Option --only <id1,id2,...> pour ne re-télécharger que certains persos
  // (force implicitement le re-download de ces persos spécifiquement)
  const onlyArgIdx = process.argv.indexOf("--only");
  const onlyIds = onlyArgIdx >= 0 && process.argv[onlyArgIdx + 1]
    ? new Set(process.argv[onlyArgIdx + 1].split(",").map(s => s.trim()))
    : null;

  // Filtrer la liste des persos à traiter selon --only
  const targetChars = onlyIds
    ? CHARACTERS.filter(c => onlyIds.has(c.id))
    : CHARACTERS;

  if (onlyIds && targetChars.length === 0) {
    console.log(`Aucun personnage ne correspond à --only ${[...onlyIds].join(",")}`);
    console.log("IDs valides : " + CHARACTERS.map(c => c.id).join(", "));
    return;
  }

  // Avec --only, on FORCE le re-download (suppression préalable)
  if (onlyIds) {
    for (const c of targetChars) {
      const p = path.join(OUT_DIR, `${c.id}.jpg`);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }
  }

  // Compter d'abord ce qui est déjà là pour informer l'utilisateur
  const existingIds = new Set(
    fs.readdirSync(OUT_DIR).filter(f => f.endsWith(".jpg")).map(f => f.replace(".jpg", ""))
  );
  const missing = targetChars.filter(c => !existingIds.has(c.id)).length;

  console.log(`Dossier cible : ${OUT_DIR}`);
  console.log(`Personnages   : ${onlyIds ? `${targetChars.length} (--only)` : CHARACTERS.length}`);
  console.log(`Déjà présents : ${existingIds.size}`);
  console.log(`À télécharger : ${force ? targetChars.length + " (--force)" : missing}`);
  if (missing === 0 && !force && !onlyIds) {
    console.log("");
    console.log("✓ Toutes les images sont déjà présentes. Rien à faire.");
    console.log("  (utilise --force pour tout re-télécharger, ou --only <id,id> pour un sous-ensemble)");
    return;
  }
  console.log("");

  let ok = 0, skipped = 0, failed = 0;
  const failures = [];

  for (const c of targetChars) {
    const outFile = path.join(OUT_DIR, `${c.id}.jpg`);
    if (fs.existsSync(outFile) && !force) {
      skipped++;
      continue;
    }

    const query = SEARCH_OVERRIDES[c.id] ?? c.name;
    if (!query) { skipped++; continue; }

    try {
      // Si on a un MAL ID fixé, on va chercher directement par ID (match exact garanti)
      const malId = MAL_ID_OVERRIDES[c.id];
      let found;

      if (malId) {
        const data = await fetchJsonWithRetry(`https://api.jikan.moe/v4/characters/${malId}`);
        const ch = data?.data;
        if (ch?.images?.jpg?.image_url) found = ch;
      } else {
        const data = await fetchJsonWithRetry(
          `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(query)}&limit=5`
        );
        // Parcourir les 5 premiers résultats pour trouver le premier avec une
        // vraie image (pas un placeholder "no image")
        const results = data?.data || [];
        found = results.find(r => {
          const u = r?.images?.jpg?.image_url;
          if (!u) return false;
          return !PLACEHOLDER_PATTERNS.some(p => u.includes(p));
        });
      }

      if (!found) {
        failures.push({ id: c.id, name: c.name, reason: malId ? `mal_id ${malId} introuvable` : "pas de résultat avec image" });
        console.log(`  [FAIL] ${c.id} (${c.name}) : pas d'image trouvée`);
        failed++;
      } else {
        await downloadImage(found.images.jpg.image_url, outFile);
        const tag = malId ? `mal_id=${malId}` : `search`;
        console.log(`  [ok]   ${c.id.padEnd(14)} → ${found.name} (${tag})`);
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
