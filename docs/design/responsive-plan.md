# Plan de mise en responsive — Noxi

## Diagnostic initial

**État actuel** : le site est quasi 100% desktop-only.
- 1 seul `@media` dans tout le SCSS (ajouté récemment sur `_undercover.scss`)
- 13 utilitaires Tailwind responsive (`md:`, `lg:`…) dans toute la codebase
- Aucun breakpoint standardisé, aucune convention mobile

**Cible** : site utilisable de 320px (iPhone SE) à 1440px+ (desktop large), avec une expérience correcte sur 3 tailles pivotales :
- **Mobile** (< 640px) : 1 colonne, nav compacte, chat overlay
- **Tablette** (640-1024px) : 2 colonnes possibles, sidebars réduites
- **Desktop** (> 1024px) : layout actuel préservé

---

## Conventions à adopter

### Breakpoints standards (Tailwind-aligned)

| Nom | Largeur min | Appareils typiques |
|---|---:|---|
| `sm` | 640px | Grand mobile paysage, petite tablette |
| `md` | 768px | Tablette portrait |
| `lg` | 1024px | Tablette paysage, petit desktop |
| `xl` | 1280px | Desktop standard |

**Approche** : *desktop-first* (on ajoute des `@media (max-width: Xpx)`) pour éviter de tout réécrire. Refactor vers *mobile-first* uniquement pour les composants critiques qui en bénéficient vraiment.

### Mixin SCSS à créer (dans `_variables.scss` ou `_mixins.scss`)

```scss
@mixin mobile  { @media (max-width: 639px)  { @content; } }
@mixin tablet  { @media (max-width: 1023px) { @content; } }
@mixin desktop { @media (max-width: 1279px) { @content; } }
```

Usage :
```scss
.my-grid {
  display: grid;
  grid-template-columns: 280px 1fr 300px;

  @include tablet  { grid-template-columns: 240px 1fr; }
  @include mobile  { grid-template-columns: 1fr; }
}
```

### Règles transversales
- Viewport meta OK dans `index.html` (vérifier)
- Tailles de police relatives (`rem`/`em`), pas `px` fixes pour les textes
- Images max-width 100%
- Pas de `width:` fixe en pixels sur les conteneurs > 400px
- Sticky positioning à dévalider en mobile (prend trop de place)
- Modals en plein écran sur mobile

---

## Plan d'exécution (5 phases ordonnées)

### Phase 1 — Composants transversaux (haute visibilité) ✓
*Présents sur toutes les pages, impact maximal.*

- [x] **Mixins SCSS** créés (`_mixins.scss`) : `@include mobile/tablet/desktop/from-*/touch/landscape-mobile/portrait`
- [x] **Nav / Header** — déjà responsive nativement (classes Tailwind `md:hidden`/`md:block`, JSX mobile présent avec burger Disclosure)
- [x] **Footer** — grid 2 colonnes < 1024px, logo centré, barres de titre ajustées mobile
- [x] **Chat drawer** — 90vw < 1024px (au lieu de 380px fixe), bubble repositionnée avec safe-area
- [x] **Popup / Contact form** — padding réduit mobile, grid-cols 2→1 pour champs prénom/nom
- [x] **Login / Forms** — image astronaute cachée < 1024px, form fluide, titre `text-7xl` réduit mobile, padding inputs ajusté
- [x] **Table** — scroll horizontal mobile + tailles police/padding réduits

**Impact mesurable** : 6 fichiers SCSS touchés, 0 régression (build passe en 52s).

---

### Phase 2 — Pages publiques (onboarding) ✓

- [x] **Home** — parallax conservé compressé < 640px (perf via `will-change:auto`), compteurs 2×2 grid mobile, titres réduits, paragraphes stackés < 1024px
- [x] **Games carousel** — empilé vertical < 1024px (image au-dessus, description dessous), game-launcher stack mobile
- [x] **Login / SignUp / ForgotPassword** — image astronaute cachée < 1024px, form fluide, titre `text-7xl` → `2.75rem` mobile
- [x] **Variant info modal** — 2 blocs empilés mobile

---

### Phase 3 — Pages connectées (quotidien utilisateur) ✓

- [x] **Profile / UserProfile** — banner empilé (avatar centré), bottom container 2 col → 1, stats grid 4 col → 2 mobile, paddings réduits
- [x] **Community / Events** — spotlight empilé mobile, event-grid déjà en auto-fill ✓
- [x] **Community / Gamers (Leaderboard)** — filtres + recherche empilés mobile
- [x] **Support** — questions + image empilés < 1024px, image décorative cachée mobile

---

### Phase 4 — Jeux (gameplay) ✓

- [x] **TicTacToe** — grille 3×3 : cases 80px mobile (vs 100px), plateau en colonne < 1024px, sidebar devient bandeau
- [x] ~~**Board**~~ — pas de SCSS dédié, géré via le composant inline (rendu auto-adaptatif)
- [x] ~~**Mascarade**~~ — **volontairement laissé desktop-only** (décision)
- [x] **Undercover** — sticky sidebar désactivé < 1024px, CardRevealModal 90vw mobile, paddings réduits

---

### Phase 5 — Admin et secondaires ✓

- [x] **Admin tables** — header empilé mobile (titre + search + add-btn), search flex:1, paddings réduits
- [x] **404** — digits 120px → 80px mobile, actions empilés verticalement
- [x] **Page transition / UI / Chat** — pas d'impact (déjà géré en Phase 1)

---

## Outils de test

### Checklist par composant
- [ ] Test à 320px, 375px, 414px (mobiles communs)
- [ ] Test à 768px (iPad portrait)
- [ ] Test à 1024px (iPad paysage / petit laptop)
- [ ] Test à 1440px (desktop standard)
- [ ] Orientation portrait ET paysage sur mobile
- [ ] Zoom 200% (accessibilité)
- [ ] Navigation clavier préservée

### DevTools
- Chrome DevTools "Device Mode" (toggle responsive)
- Tester avec **ralentissement CPU 4x** pour valider les perfs (surtout animations Home)

### Lighthouse
- Score Mobile ≥ 90 à viser
- Mesurer **avant / après** chaque phase

---

## Estimation totale

| Phase | Durée | Cumul |
|---|---:|---:|
| 1. Transversaux | 1-2j | 1-2j |
| 2. Pages publiques | 1j | 2-3j |
| 3. Pages connectées | 1-1.5j | 3-4.5j |
| 4. Jeux | 2-3j | 5-7.5j |
| 5. Admin | 0.5j | 5.5-8j |

**Total : 1 à 2 semaines** selon le niveau de polish souhaité.

---

## Stratégie d'exécution recommandée

1. **Créer les mixins SCSS** d'abord (`_mixins.scss`) — 30 min
2. **Phase 1 entière** avant les autres (débloque tout le reste)
3. Après chaque phase : **test manuel sur un vrai mobile** (pas juste DevTools)
4. **Pas de big bang** : chaque phase = commit séparé, possibilité de rollback
5. Garder le **desktop intact** — chaque changement dans un `@media (max-width: ...)` pour éviter les régressions

---

## Décisions validées

1. ✓ **Menu mobile** : burger classique
2. ✓ **Animations Home** : *réduire* en mobile (pas désactiver totalement)
3. ✓ **Chat drawer mobile** : 90vw avec overlay
4. ✓ **Mascarade** : **hors scope mobile pour l'instant** — garde son layout desktop (il reste jouable mais non optimisé). Phase 4 couvrira seulement TicTacToe, Board, Undercover.
5. ✓ Démarrage Phase 1
