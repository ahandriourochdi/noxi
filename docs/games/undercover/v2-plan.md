# Undercover — Plan v2 (refonte UX/UI + bugs)

## Problèmes identifiés

1. **Bouton « Re-tirer la paire » en WAITING** — incohérent, on propose de re-tirer une paire qui n'a même pas encore été montrée aux joueurs.
2. **L'imposteur sait qu'il est imposteur** — rompt le cœur du gameplay Undercover. Un joueur devrait juste voir son personnage, sans savoir s'il est majorité ou imposteur. Le plaisir vient de ne pas savoir.
3. **Les rounds d'indices ne fonctionnent pas** — bug à investiguer (currentPlayerIdx, broadcast serveur, refresh frontend).

---

## 1. Mécanique de validation / re-tirage

### Idée utilisateur validée

> « Quand on tire un personnage, on doit le valider ou pas, selon si on le connaît ou pas. Si un des joueurs connaît pas, on retire d'autres cartes. »

**C'est la bonne approche** — ça remplace avantageusement le bouton « re-tirer » du lobby. Avantages :
- Permet au groupe entier de s'accorder sur le fait que tout le monde connaît la paire
- Chaque joueur a un moyen clair de dire « stop, pas celui-là »
- Plus besoin que l'hôte devine à l'avance si les autres connaissent

### Règles proposées

- Phase `MEMORIZATION` → chaque joueur voit **seulement son propre personnage** (pas son rôle)
- 2 boutons :
  - **« Je connais ce personnage »** → validation
  - **« Je ne le connais pas »** → demande de re-tirage
- Si **au moins 1 joueur** clique sur « je ne le connais pas » :
  - Nouvelle paire générée côté serveur avec la même difficulté
  - Tous les joueurs reçoivent une nouvelle carte
  - Compteur visible : « Nouvelle paire tirée (X re-tirages) »
  - Reset des validations, chacun valide à nouveau
- Limite anti-spam : **max 5 re-tirages** par partie pour éviter les abus, ensuite la paire est forcée
- Quand **tous les joueurs alive+connected** ont validé → transition automatique vers `CLUE_ROUND`

---

## 2. Cacher le rôle (imposteur / majorité)

### Changement côté moteur

- Le message privé `card_reveal` envoie actuellement `{ type, character, role }` → **on retire `role`**
- Le `getPrivateState` retourne actuellement `{ playerIdx, character, role, hasVoted }` → **on retire `role` pendant CLUE_ROUND et VOTE**
- `role` n'est révélé qu'au `REVEAL` final (quand tout est dévoilé)

### Changement côté UI

- `CardRevealModal` supprime la bannière « Vous êtes IMPOSTEUR / MAJORITÉ »
- Affichage simplifié : juste le perso (image + nom + anime)
- Texte de contexte générique : « Mémorisez votre personnage. Certains joueurs ont le même personnage que vous. Donnez des indices qui ne trahissent pas votre identité. »
- Pas d'indice visuel qui différencie les deux rôles

---

## 3. Fix du bug « rounds d'indices ne fonctionnent pas »

À investiguer (à faire avant le code) :

| Hypothèse | Comment vérifier |
|---|---|
| Le `currentPlayerIdx` n'avance pas côté serveur | Logger `_handleClue` côté serveur |
| Le frontend ne reçoit pas l'update | Inspecter WebSocket dans DevTools Network |
| Le frontend reçoit mais n'update pas le state | `console.log(gameState)` dans handleUpdate |
| L'input se désactive mais ne se ré-active pas pour le joueur suivant | Vérifier la condition `isMyTurn` |
| Le message d'erreur n'est pas affiché | Un validateur serveur rejette silencieusement |

Je vais d'abord tracer un cas réel pendant les tests pour cibler.

---

## 4. 2 rounds d'indices max (au lieu de 3)

- Changement constructor : `rounds = 2` au lieu de `3`
- `postVoteRounds` reste à 1 (1 round entre les votes successifs si multi-imposteurs)
- Doc mise à jour dans [plan.md](plan.md)

---

## 5. Améliorations UX/UI

### Lobby (WAITING)

- **Supprimer** le bouton « Re-tirer la paire »
- **Garder** : copier lien, quitter, démarrer (hôte)
- **Ajouter** : petit indicateur « vous êtes l'hôte » 👑 pour l'hôte
- **Compteur joueurs** plus grand, plus visible
- **Message d'attente animé** style Mascarade

### MEMORIZATION (refondue)

- **Modal plein écran** de la carte personnage avec animation flip
- Affichage centré avec image grand format (160×240)
- Texte : « Votre personnage »
- **2 boutons côte à côte** :
  - ✅ Je le connais → valide
  - ❓ Je ne le connais pas → demande re-tirage
- Après validation : écran d'attente « Attente des autres joueurs (3/5) »
- Si re-tirage demandé par un autre joueur :
  - Modal animé « Une carte a été changée, voici votre nouveau personnage »
  - Reset de la validation pour tout le monde

### CLUE_ROUND

- **Carte personnelle** en haut visible en permanence
- **Banner turn indicator** énorme : « À vous / À Alice »
- **Timer visible** par indice (30s par défaut) avec barre de progression
- **Animation pulse** sur le joueur actif dans la sidebar
- **Log des indices** en direct, plus visuel (bulles colorées)
- Placeholder input : « Un mot ou une courte phrase qui décrit votre perso... »
- **Compteur indices restants** : « Round 1/2 — 3 joueurs ont encore à jouer »
- Validation indice : bouton « Envoyer » + touche Entrée

### VOTE

- Grille de cartes joueurs en grand
- Animation hover (scale + shadow)
- Bouton désactivé pour soi-même (opacity plus forte)
- Progress bar « Votes reçus 3/5 »
- Feedback « Vote enregistré » avec check animé

### REVEAL

- Animation flip des cartes révélées
- La carte de l'éliminé se tourne avec effet dramatique
- Cartes des autres joueurs alive restent masquées (partie en cours)
- Bannière victoire/défaite avec particules

---

## 6. Plan d'exécution

### Ordre recommandé

1. **Fix du bug rounds d'indices** (debug + correction) — **priorité 1** car bloque le jeu actuellement
2. **Retrait du rôle côté moteur** (message privé + getPrivateState) — 10 min
3. **Retrait du bouton re-roll du lobby** + ajout des actions `validate_card` / `reject_card` côté moteur — 30 min
4. **Refonte CardRevealModal** (UI validation/rejet) — 30 min
5. **Transition automatique après tous validés** + gestion re-tirage côté serveur — 30 min
6. **Rounds à 2** (config) — 1 min
7. **Polish UX** (timers, animations, meilleurs messages, indicateurs) — 1h
8. **Tests avec 3 onglets privés** end-to-end

### Fichiers impactés

| Fichier | Changement |
|---|---|
| `server/games/undercover/UndercoverGame.js` | +validate_card, +reject_card, -reroll_pair, rôle caché, rounds=2 |
| `src/components/Games/Undercover/Undercover.jsx` | Refonte Lobby, CardRevealModal, ClueBoard |
| `src/scss/components/games/_undercover.scss` | Styles modal, animations, timers |
| `docs/games/undercover/plan.md` | Mise à jour règles (rounds=2, re-tirage) |

---

## 7. Ce qu'on ne fait PAS (pour rester focus)

- Pas d'animation de distribution « en vol » (Mascarade style) — coûteux à implémenter proprement
- Pas de sons / musique — on ajoutera en phase ultérieure
- Pas de mode « vote à bulletin secret révélé dramatiquement » — le vote caché + reveal simultané suffit
- Pas de rôle spécial type « Voyant » — on garde le core loop simple avant d'ajouter des variantes

---

## 8. Décisions validées

1. ✓ **Re-tirages illimités** (pas de max) — pas d'abus attendu car chaque retry ralentit le groupe
2. ✓ **Timer 30s par indice** avec barre de progression
3. ✓ **Animation flip** des cartes lors du reveal personnage
4. ✓ **Reveal complet** à la fin (rôle + persos de tous les joueurs)

## 9. Implémentation réalisée

### Moteur (`UndercoverGame.js`)
- `rounds = 2` par défaut (au lieu de 3)
- Action `reroll_pair` retirée
- Nouvelles actions `validate_card` / `reject_card`
- `_buildDealMessages` n'envoie plus le rôle au client
- `getPrivateState` masque le rôle sauf en `REVEAL` / `GAME_OVER`
- `pairRetryCount` exposé côté public pour l'UI
- Reject → nouvelle paire tirée, nouveaux messages privés envoyés

### UI (`Undercover.jsx` + `_undercover.scss`)
- **Lobby** refondu : carte d'aide avec explications du jeu, suppression du bouton reroll, spinner animé en attente
- **CardRevealModal** : animation flip 3D de la carte, plus de mention du rôle, 2 boutons côte à côte (connais / connais pas)
- **Memorize** : progression visuelle (barre + pips par joueur), feedback re-tirage avec compteur
- **ClueBoard** : timer 30s avec barre de progression + alerte rouge < 10s, banner turn pulsant, card perso thumbnail permanent, placeholder input amélioré, animation d'entrée des indices
- Styles : keyframes `pulse`, `dotBounce`, `spin`, `timerPulse`, `bannerGlow`, `overlayFadeIn`, `entrySlide`, `logoFadeIn`
