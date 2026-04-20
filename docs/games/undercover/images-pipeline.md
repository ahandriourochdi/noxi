# Undercover — Pipeline d'images des personnages

## Vue d'ensemble

Les 150 personnages d'Undercover ont leurs images auto-récupérées via l'**API Jikan**
(wrapper non-officiel de MyAnimeList). Le script est **idempotent** : relancer ne
re-télécharge que ce qui manque.

```
API Jikan  →  Script Node  →  public/assets/img/undercover/<id>.jpg
                    ↓
           characters.js (référence les chemins)
                    ↓
       Vite sert depuis public/ (aucune config nécessaire)
```

---

## Emplacement des fichiers

| Élément | Chemin |
|---|---|
| Images téléchargées | `public/assets/img/undercover/<id>.jpg` |
| Script de téléchargement | `server/games/undercover/__tests__/fetch-images.js` |
| Base de personnages (source des IDs et noms) | `server/games/undercover/characters.js` |
| Référence côté frontend | `/assets/img/undercover/<id>.jpg` (URL relative racine) |

Vite sert automatiquement le dossier `public/` à la racine du site — aucune config
n'est nécessaire. En production, après `npm run build`, les images sont copiées
dans `dist/assets/img/undercover/`.

---

## API utilisée : Jikan v4

### Pourquoi Jikan

| Option envisagée | Verdict |
|---|---|
| **Jikan** (non-officielle MAL) | ✅ Retenue |
| AniList GraphQL | Qualité similaire, plus complexe (GraphQL) |
| Kitsu REST | Base de persos plus pauvre |
| Fandom scraping | Fragile, contre les ToS |
| MyAnimeList officielle | Nécessite OAuth2 + clé API |

**Jikan retenue** parce que :
- **Gratuit**, sans clé API, sans inscription
- Base de données MyAnimeList = référence animéphile la plus complète
- Retourne directement l'URL de l'image du personnage
- Rate-limit généreux (3 req/sec, 60 req/min)
- Stable, maintenue depuis 2015

### Endpoints utilisés

```
GET https://api.jikan.moe/v4/characters?q=<nom>&limit=5
```

Réponse-type :
```json
{
  "data": [
    {
      "mal_id": 117911,
      "name": "Katsuki Bakugou",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/characters/12/299406.jpg"
        },
        "webp": { ... }
      }
    }
  ]
}
```

Le script parcourt jusqu'à 5 résultats pour trouver le premier qui a une image
non-placeholder (voir "Détection de placeholders" plus bas).

### Rate limiting

- **Limite Jikan** : 3 req/sec soft, 60 req/min hard
- **Délai du script** : 1.1 seconde entre chaque requête (≈ 1 req/sec)
- **Retry avec backoff exponentiel** sur erreur 429 : 2s → 4s → 8s (3 tentatives max)
- **Durée totale** pour 150 persos : ~2m45s (si tout manque). 0 seconde si tout est
  déjà téléchargé.

---

## Utilisation du script

### Commande principale

```bash
npm run undercover:fetch-images
```

### Comportement

**Idempotent par défaut** — ne re-télécharge pas les fichiers déjà présents.

```
Dossier cible : .../public/assets/img/undercover
Personnages   : 150
Déjà présents : 150
À télécharger : 0

✓ Toutes les images sont déjà présentes. Rien à faire.
  (utilise --force pour tout re-télécharger)
```

### Option `--force`

Pour re-télécharger **tout** (écrase les images existantes) :

```bash
node server/games/undercover/__tests__/fetch-images.js --force
```

Utilité : si tu as changé la source (ex : mise à jour majeure de MAL) et veux
refaire un lot complet.

### Option `--only <id1,id2,...>`

Pour re-télécharger **uniquement certains persos** (implicitement en force) :

```bash
# Un seul perso
node server/games/undercover/__tests__/fetch-images.js --only goku

# Plusieurs (séparés par virgules, pas d'espace)
node server/games/undercover/__tests__/fetch-images.js --only goku,vegeta,gohan
```

Utilité : quand tu remarques qu'une image est incorrecte (mauvais match API), tu
ajoutes un override dans `SEARCH_OVERRIDES` et tu re-fetch juste ce perso.

**Workflow de correction d'un mauvais match** :
1. Noter l'id du perso foireux (ex : `broly`)
2. Tester des queries sur l'API Jikan directement :
   ```bash
   curl "https://api.jikan.moe/v4/characters?q=Broly&limit=3"
   ```
3. Choisir la query qui donne le bon résultat
4. Éditer `SEARCH_OVERRIDES` dans `fetch-images.js`
5. Lancer `--only <id>` pour re-fetch uniquement ce perso

### Workflow quand tu ajoutes un personnage

1. Ajoute le nouveau perso dans `server/games/undercover/characters.js` :
   ```js
   {
     id: "nouveau_perso",
     name: "Nom du perso",
     anime: "Nom de l'anime",
     image: "/assets/img/undercover/nouveau_perso.jpg",
     visual: [...], personality: [...], powers: [...], themes: [...]
   }
   ```
2. Lance `npm run undercover:fetch-images`
3. Seule la nouvelle image sera téléchargée
4. Si la recherche échoue (match imprécis), ajoute un **override** (voir section
   suivante) et relance

---

## MAL_ID_OVERRIDES (priorité max)

Certains persos sont **totalement ambigus** : 10 persos s'appellent "Asta" sur
MAL, même chose pour "Dabi", "Nami", etc. Dans ce cas on force le **MAL
character ID exact** au lieu de faire une recherche texte.

Table `MAL_ID_OVERRIDES` dans `fetch-images.js` — la table fait foi, voir le
fichier pour la liste complète (~70 overrides actuellement, dont les batchs
janvier 2026 et avril 2026).

```js
const MAL_ID_OVERRIDES = {
  goku: 246,         // Son Gokuu (Dragon Ball)
  nami: 723,         // Nami (One Piece)
  frieza: 3694,      // Freeza (DBZ)
  // ...
  hawks: 162597,     // Wing Hero Hawks (anime)  — PAS 195199 (autre Keigo Takami)
  jinwoo: 174185,    // Sung Jin-Woo (Solo Leveling, Shadow Monarch)
  cha_haein: 173979, // Cha Hae-In (Solo Leveling) — pas 215981 (404)
  okarun: 196899,    // Takakura Ken (Dandadan) — pas 258539 (Okarun's Classmate)
  // ...
};
```

Si un `id` est dans cette table, le script fetch directement via
`https://api.jikan.moe/v4/characters/<mal_id>` (match garanti à 100%) au lieu
de faire une recherche texte qui peut se tromper.

### Comment trouver un nouveau MAL ID

**Méthode 1 — via l'anime** (recommandé, 100% fiable) :

```bash
# 1. Trouver le mal_id de l'anime
curl "https://api.jikan.moe/v4/anime?q=Dragon+Ball+Z&limit=1"
# → récupérer le mal_id dans la réponse (ex: 813)

# 2. Lister les persos de cet anime
curl "https://api.jikan.moe/v4/anime/813/characters"
# → chercher le perso voulu par son nom, noter son mal_id
```

**Méthode 2 — directe MAL** :

Aller sur [myanimelist.net/character.php](https://myanimelist.net/character.php)
et chercher le perso. L'URL de sa page contient son ID :
`myanimelist.net/character/246/Gokuu_Son` → mal_id = **246**.

### ⚠️ Vérification avant de committer un MAL ID

L'endpoint `/characters?q=...` peut retourner un **homonyme** au lieu du bon
perso. Toujours croiser **2 sources** avant d'ajouter un override :

```bash
# Confirmer le MAL ID via l'anime
curl "https://api.jikan.moe/v4/anime/<anime_id>/characters"

# Puis confirmer que le perso est bien dans le bon anime
curl "https://api.jikan.moe/v4/characters/<mal_id>/full"
# → vérifier le champ "anime[].anime.title"
```

**Cas vécus (batch avril 2026) où la recherche texte a trompé** :

| Perso | Recherche a renvoyé | Vrai ID | Symptôme |
|---|---|---|---|
| Hawks (MHA) | `195199` Keigo Takami (autre) | `162597` Wing Hero Hawks | Image d'un autre perso |
| Cha Hae-In (Solo Leveling) | `215981` (404 en vrai) | `173979` (via `/anime/52299/characters`) | 404 au téléchargement |
| Okarun (Dandadan) | `258539` "Okarun's Classmate" | `196899` Takakura Ken | Mauvais perso |
| Toji (JJK) | absent de la page 1 de l'anime | `175543` via recherche + `/full` confirme "Jujutsu Kaisen" | Pas dans la page 1 |

**Règle** : quand l'endpoint `/characters/<id>/full` retourne 404 ou un anime
non-listé, ne JAMAIS utiliser cet ID — repartir du `/anime/<id>/characters`.

## Overrides textuelles (recherche améliorée)

Pour les cas où une recherche texte mieux formulée suffit (romaji japonais, nom
complet), on a `SEARCH_OVERRIDES`. C'est moins fiable que MAL_ID_OVERRIDES mais
ça évite de hardcoder un ID quand la recherche fonctionne.

```js
const SEARCH_OVERRIDES = {
  gaara: "Gaara",                  // nom seul trop court
  mello: "Mihael Keehl Mello",     // vrai nom + surnom
  near: "Nate River Near",
  pain: "Nagato",                  // MAL indexe sous son vrai nom
  mikey: "Manjirou Sano",          // romaji japonais
  mascarade: null                  // skip
};
```

**Quand ajouter un override** :
- La recherche par défaut (`c.name`) retourne un autre perso qui porte le même nom
- Le nom est une version française (ex : "Freezer" vs "Frieza" — déjà géré)
- Le perso est indexé sous son vrai nom japonais (ex : Pain → Nagato)

**Syntaxe** :
```js
const SEARCH_OVERRIDES = {
  mon_perso_id: "Requête qui marche sur MAL",
  autre_perso: null  // skip ce perso
};
```

---

## Détection de placeholders

MAL retourne parfois un **image placeholder "no image"** (256×256 PNG gris) quand
il n'a pas de vraie image. Le script filtre ces URLs via :

```js
const PLACEHOLDER_PATTERNS = [
  "questionmark",
  "apple-touch",
  "default-image"
];
```

Si l'URL retournée contient un de ces motifs, le script passe au résultat suivant.

**Si une image téléchargée semble être un placeholder** (icône générique, dimensions
bizarres type 256×256) :

1. Supprime-la : `rm public/assets/img/undercover/<id>.jpg`
2. Ajoute un override avec une requête plus précise
3. Relance le script

---

## Qualité et remplacement manuel

### Qualité des images Jikan

- Format : JPG, dimensions variables (225×350 typique)
- Poids moyen : ~55 KB
- Qualité : bonne pour la plupart des persos populaires, aléatoire pour les
  secondaires

### Remplacer une image manuellement

Pour une image de meilleure qualité (fond transparent PNG, plus haute résolution,
etc.) :

1. Trouve l'image (ex : via [docs/games/undercover/characters-images.md](characters-images.md)
   qui liste les liens Google Images / Fandom de chaque perso)
2. Remplace le fichier à `public/assets/img/undercover/<id>.jpg`
   - **Garde l'extension `.jpg`** sinon `characters.js` ne trouvera plus le fichier
   - Ou change l'extension dans `characters.js` si tu préfères `.png`
3. Optionnel : compresse avec [tinypng.com](https://tinypng.com) ou
   [squoosh.app](https://squoosh.app) si > 150 KB

### Conversion en bulk PNG → JPG (ou inverse)

Si tu veux tout passer en PNG transparent, rename massivement :

```bash
# Dans public/assets/img/undercover/
for f in *.png; do mv "$f" "${f%.png}.jpg"; done  # PNG → JPG

# Puis dans characters.js :
sed -i 's|\.png|\.jpg|g' server/games/undercover/characters.js
```

---

## Ajout d'un nouveau personnage — checklist

- [ ] Créer l'entrée dans `server/games/undercover/characters.js` avec un `id`
      unique (snake_case)
- [ ] Respecter le format `image: "/assets/img/undercover/<id>.jpg"`
- [ ] Respecter le nombre minimum de tags par catégorie (4-8)
- [ ] Lancer `npm run undercover:fetch-images`
- [ ] Vérifier l'image téléchargée (pas de placeholder, ressemble au perso)
- [ ] Si mauvais match : ajouter un override dans `fetch-images.js` et re-run
- [ ] Lancer `npm run undercover:validate` pour vérifier les nouvelles paires
      possibles

---

## Limitations connues

1. **Personnages obscurs** : certains secondaires peuvent ne pas être indexés par
   MAL avec une bonne image
2. **Personnages récents** : un perso ajouté à un manga le mois dernier peut ne
   pas encore avoir d'entrée MAL
3. **Ambiguïtés** : "Cell" matche un perso de DBZ mais aussi plusieurs autres
   series qui ont un perso appelé Cell — d'où les overrides
4. **Rate limit** : si tu appelles Jikan intensément ailleurs dans le projet,
   le script pourrait se faire 429. Augmente le délai de sleep dans ce cas.

---

## Alternatives en cas de panne Jikan

Si Jikan devient indisponible ou paie un jour, voici le plan B :

1. **AniList GraphQL** (https://graphql.anilist.co) :
   ```graphql
   query { Character(search: "Naruto Uzumaki") { image { large } } }
   ```
2. **Kitsu REST** (https://kitsu.io/api/edge/characters?filter[name]=Naruto)
3. **Manuel** : la doc [characters-images.md](characters-images.md) liste des
   liens Google Images pour chaque perso — clic-droit → "Enregistrer sous"

Le script ne doit pas devenir un point de dépendance critique. Les images sont
commitées une fois et restent disponibles même si l'API tombe.

---

## Légalité et conformité

- Jikan est **open-source** et explicitement autorisé à être utilisé
- Les images sont hébergées par MyAnimeList (CDN) — nous les téléchargeons et les
  re-hébergeons dans `public/`
- **Usage** : contexte non-commercial / fan project. Pour un usage commercial, il
  faudrait soit :
  - Licencier les images auprès des ayants-droit (studios, éditeurs)
  - Remplacer par des illustrations custom commandées à un artiste
  - Utiliser des images CC0 / libres de droits (rare pour anime)

Pour un jeu communautaire type Noxi, l'usage est généralement toléré tant que
ça reste un projet sans profit direct, mais c'est à garder en tête si le projet
monétise un jour.
