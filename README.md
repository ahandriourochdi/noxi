# Noxi — Plateforme de Gaming Multijoueur en Temps Réel

Noxi est une plateforme communautaire de jeux multijoueur en temps réel, construite autour d'un univers nocturne et futuriste. Les joueurs peuvent s'affronter en ligne, participer à des événements, consulter des classements et personnaliser leur profil.

---

## Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Stack technique](#stack-technique)
- [Architecture](#architecture)
- [Fonctionnalités](#fonctionnalités)
- [Jeux disponibles](#jeux-disponibles)
- [Base de données](#base-de-données)
- [Système d'authentification](#système-dauthentification)
- [Architecture temps réel](#architecture-temps-réel)
- [Design et esthétique](#design-et-esthétique)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Variables d'environnement](#variables-denvironnement)

---

## Aperçu du projet

**Type** : Application web full-stack (SPA + API REST + WebSocket)
**Thème** : Plateforme de gaming communautaire à l'esthétique cyberpunk/nocturne
**Langue de l'interface** : Français

Noxi permet aux utilisateurs de :
- Jouer à des jeux multijoueur en temps réel (Tic-Tac-Toe, Board Game)
- Créer et rejoindre des parties publiques ou privées
- Participer à des événements communautaires
- Consulter les classements et profils des joueurs
- Gérer un système d'amis (demandes, acceptation)
- Personnaliser leur profil (pseudo, bio, avatar)

---

## Stack technique

### Frontend

| Technologie | Version | Rôle |
|---|---|---|
| **React** | 18.2.0 | Bibliothèque UI |
| **Vite** | 4.1.0 | Bundler et serveur de développement |
| **React Router** | 6.8.2 | Routage SPA |
| **Tailwind CSS** | 3.3.2 | Framework CSS utilitaire |
| **SCSS/Sass** | 1.97.3 | Styles composants personnalisés |
| **Material UI (MUI)** | 5.13.1 | Composants DataGrid et formulaires |
| **Headless UI** | 1.7.14 | Composants accessibles (dropdown, modals) |
| **Framer Motion** | 12.35.1 | Animations de transition de pages |
| **GSAP** | 3.11.5 | Animations au scroll |
| **Swiper** | 9.3.2 | Carrousel de sélection de jeux |
| **Axios** | 1.3.4 | Requêtes HTTP avec intercepteur JWT |

### Backend

| Technologie | Version | Rôle |
|---|---|---|
| **Express.js** | 4.18.2 | API REST |
| **Sequelize** | 6.29.1 | ORM pour MySQL |
| **MySQL2** | 3.2.0 | Driver de base de données |
| **JSON Web Token** | 9.0.0 | Authentification stateless |
| **bcryptjs** | 2.4.3 | Hachage des mots de passe |
| **SendGrid** | 7.7.0 | Envoi d'emails de vérification |
| **WebSocket** | 1.0.34 | Communication temps réel pour les jeux |
| **UUID** | 9.0.0 | Génération d'identifiants uniques |
| **CORS** | 2.8.5 | Gestion des requêtes cross-origin |
| **Nodemon** | 2.0.21 | Rechargement automatique en développement |

---

## Architecture

### Frontend

```
src/
├── components/
│   ├── Home/                  # Page d'accueil avec parallax
│   ├── Games/                 # Sélection et instances de jeu
│   │   ├── Games.jsx          # Navigateur de jeux (carrousel Swiper)
│   │   ├── TicTacToe.jsx      # Composant Tic-Tac-Toe (800+ lignes)
│   │   └── Board.jsx          # Composant Board Game
│   ├── Community/
│   │   ├── Events/            # Listing et filtrage d'événements
│   │   ├── Leaderboard/       # Classement des joueurs
│   │   ├── Players/           # Exploration des joueurs
│   │   └── Gamers/            # Membres de la communauté
│   ├── Profile/
│   │   ├── Profile.jsx        # Profil utilisateur personnel
│   │   └── UserProfile.jsx    # Profil d'autres joueurs
│   ├── Login/
│   │   ├── Login.jsx          # Formulaire de connexion
│   │   ├── SignUp.jsx         # Inscription
│   │   └── ForgotPassword.jsx # Mot de passe oublié
│   ├── Admin/                 # Dashboard administrateur
│   │   ├── PlayersList/       # Gestion des joueurs
│   │   ├── GamesList/         # Gestion des modèles de jeux
│   │   └── EventsList/        # Gestion des événements
│   ├── Email/                 # Flux de vérification email
│   ├── Auth/                  # Utilitaires d'authentification
│   │   ├── useUser.jsx        # Hook Context utilisateur
│   │   ├── useToken.jsx       # Gestion du token JWT
│   │   ├── PrivateRoute.jsx   # Route protégée (utilisateur connecté)
│   │   ├── AdminRoute.jsx     # Route protégée (admin uniquement)
│   │   └── RedirectRoute.jsx  # Redirection si déjà connecté
│   ├── Nav/                   # Barre de navigation avec dropdown
│   ├── Footer/                # Pied de page
│   ├── AnimatedRoutes.jsx     # Configuration des routes avec transitions
│   ├── GlobalInfo.jsx         # Context API — état global d'authentification
│   └── Support/               # Page de support
├── class/
│   └── tictactoe.js           # Logique de jeu Tic-Tac-Toe (classe)
├── scss/                      # Styles SCSS organisés par composant
├── api.js                     # Instance Axios avec intercepteur JWT
└── main.jsx                   # Point d'entrée React
```

### Backend

```
server/
├── index.js                   # Serveur Express + WebSocket
├── config/
│   └── database.js            # Connexion Sequelize à MySQL
├── models/                    # 11 modèles Sequelize
├── controllers/               # 11 contrôleurs (logique métier)
├── routes/                    # 11 fichiers de routes API
├── middleware/
│   ├── auth.js                # JWT + contrôle d'accès par rôle
│   └── errorHandler.js        # Gestion centralisée des erreurs
├── util/
│   └── sendEmail.js           # Intégration SendGrid
├── functions.js               # Utilitaires helper
└── games/
    └── games.js               # Fonctions d'initialisation des jeux
```

### Ports de développement

| Service | Port |
|---|---|
| Frontend (Vite) | 3006 |
| API REST (Express) | 5000 |
| WebSocket | 9090 |
| MySQL | 3306 |

---

## Fonctionnalités

### Authentification et profils
- Inscription avec vérification d'email via SendGrid
- Connexion avec JWT (expiration 2 jours)
- Hachage des mots de passe (bcryptjs, 10 rounds de sel)
- Personnalisation du profil (pseudo, bio, âge)
- Avatars générés via l'API RoboHash
- Historique des parties par joueur
- Affichage du jeu favori et du niveau
- Contrôle d'accès par rôle (utilisateur, admin)

### Jeux multijoueur
- Création de parties publiques ou privées
- Sélection du nombre de joueurs
- Lobby de jeu avec état d'attente (cube animé SVG)
- Synchronisation temps réel via WebSocket
- Suivi des scores par manche
- Persistance des meilleurs scores en base de données
- Lien d'invitation copiable pour les parties privées
- Nettoyage automatique des parties vides

### Communauté et événements
- Création et navigation d'événements
- Filtrage par type de jeu (Tous, TicTacToe, Board)
- Événement à la une (spotlight)
- Système de participation et de likes
- Compteurs de participants et de likes
- Lien vers le Discord communautaire

### Social
- Système d'amis (relations bilatérales)
- Demandes d'amis (envoi, acceptation)
- Classement des joueurs (leaderboard)
- Navigation et découverte des profils

### Administration
- Dashboard admin avec trois sections
- Gestion des joueurs (tableau de données MUI DataGrid)
- Gestion des modèles de jeux
- Gestion des événements
- Accès restreint aux routes API admin

---

## Jeux disponibles

### Tic-Tac-Toe (OXO)
- **Joueurs** : 2
- **Plateau** : Grille 3×3
- **Gameplay** : Tour par tour, temps réel
- **Couleurs** : Magenta (X) vs Cyan (O)
- **Fonctionnalités** : Score cumulé par manche, reset automatique, détection de victoire/match nul

### Board Game
- **Joueurs** : 2 à 3
- **Plateau** : 20 éléments (balles)
- **Gameplay** : Placement de balles colorées en temps réel
- **Fonctionnalités** : Code couleur par joueur, mises à jour visuelles instantanées

---

## Base de données

### Schéma (11 tables)

**Tables principales :**
- `ncs_users` — Comptes utilisateurs (id, username, password, mail, role, status, verificationString)
- `ncs_profiles` — Données de profil (userId, nickname, age, bio, picture)
- `ncs_gamemodels` — Templates de jeux (name, slug, description, image, playersMin, playersLimit)
- `ncs_games` — Sessions de jeu (gameId UUID, ownerId, numberPlayers, maxPlayers, status, gameModel, reach)
- `ncs_gameplayers` — Joueurs dans les parties (gameId, playerId, clientId, clientName, score)
- `ncs_playerscores` — Meilleurs scores par joueur par jeu (gameSlug, playerId, clientName, bestScore)

**Tables communautaires :**
- `ncs_events` — Événements (title, theme, description, attendees, likes, spotlight)
- `ncs_eventattendees` — Liens de participation
- `ncs_eventlikers` — Likes sur les événements

**Tables sociales :**
- `ncs_friendships` — Relations d'amitié (uid_1, uid_2)
- `ncs_friendrequests` — Invitations en attente (inviterId, invitedId)

Le fichier `noxi_database.sql` contient le schéma complet avec des données d'exemple (3 utilisateurs, 2 modèles de jeu, 5 événements).

---

## Système d'authentification

### Flux d'inscription
1. L'utilisateur soumet username, email, mot de passe
2. Le backend vérifie l'unicité de l'email et du username
3. Le mot de passe est haché avec bcryptjs
4. Le compte est créé avec `status="pending"`
5. Un UUID de vérification est envoyé par email (SendGrid)
6. Un token JWT est retourné avec `status="pending"`
7. L'utilisateur est redirigé vers la page de vérification

### Flux de vérification email
1. L'utilisateur clique sur le lien reçu par email
2. Le backend retrouve l'utilisateur via l'UUID
3. Le statut passe de `"pending"` à `"verified"`
4. Un nouveau JWT est émis avec `status="verified"`

### Middleware de protection
- `authMiddleware` — Valide le token JWT
- `verifiedMiddleware` — Vérifie que l'email est confirmé
- `adminMiddleware` — Vérifie le rôle administrateur

---

## Architecture temps réel

### Communication WebSocket

```
Client                    Serveur (port 9090)
  │                             │
  ├── connect ────────────────► │  Assignation d'un clientId
  │                             │
  ├── create ─────────────────► │  Création d'une session de jeu
  │                             │
  ├── join ───────────────────► │  Rejoindre une partie existante
  │                             │
  ├── play ───────────────────► │  Envoi d'un coup/action
  │                             │
  │ ◄──────────────── update ── │  Diffusion de l'état à tous les joueurs
  │                             │
  ├── reset ──────────────────► │  Réinitialisation du plateau
  │                             │
  ├── quit ───────────────────► │  Quitter la partie
  │                             │
```

L'état des jeux est stocké en mémoire côté serveur. Les enregistrements de parties et de scores sont persistés en base de données après chaque changement d'état.

---

## Design et esthétique

### Thème général
L'esthétique de Noxi s'inspire d'un univers **cyberpunk nocturne** : fonds sombres rappelant un ciel de nuit étoilé, accents néon lumineux, et effets de glow sur les éléments interactifs. L'ensemble évoque une ambiance de salle d'arcade futuriste.

### Palette de couleurs

| Couleur | Code | Utilisation |
|---|---|---|
| **Cyan néon** | `#95FDFC` | Éléments interactifs principaux, bordures, accents |
| **Magenta néon** | `#FEBEFD` | Accents secondaires, boutons, joueur X |
| **Fond sombre** | `#06122F` | Arrière-plan principal |
| **Fond bleu profond** | `#06397B` | Dégradé d'arrière-plan |
| **Blanc** | `#FFFFFF` | Texte principal |

Les dégradés utilisent un angle de 45° entre le cyan et le magenta pour les boutons, les bordures et les éléments de surbrillance.

### Typographie

| Police | Utilisation | Taille |
|---|---|---|
| **Quicksand** | Titres et en-têtes | 40–80px, Semibold |
| **Poppins** | Corps de texte et UI | 14–18px, Regular/Light |

Grammages utilisés : Bold (700), Semibold (600), Medium (500), Regular (400), Light (300).

### Effets visuels
- **Parallax** : La page d'accueil utilise un effet de défilement parallax avec plusieurs couches d'images superposées
- **Glow néon** : Les boutons et éléments interactifs ont un effet de lueur néon animé
- **Transitions de page** : Animations Framer Motion entre les routes
- **Scrollbar personnalisée** : Barre de défilement avec dégradé cyan/magenta
- **Fond semi-transparent** : Les cartes utilisent `rgba(255, 255, 255, 0.07)` avec backdrop blur
- **Coins arrondis** : Border radius de 50px pour les éléments pilule
- **Cube SVG animé** : État d'attente dans le lobby de jeu
- **Bouton Galaxy** : Bouton d'accueil avec 20 étoiles en rotation
- **Compteurs animés** : Statistiques incrémentales sur la page d'accueil (15k joueurs, 1200 parties, 9999 doses de fun)

### Organisation CSS
- Variables SCSS centralisées dans `_variables.scss`
- Styles globaux dans `_style.scss`
- Fichiers SCSS par composant (header, footer, login, games, profil, etc.)
- Tailwind CSS pour les utilitaires rapides, SCSS pour les styles complexes
- Animations keyframes personnalisées pour les boutons et transitions

---

## Installation

### Prérequis
- Node.js (v16+)
- MySQL 5.7+ ou MariaDB 10+
- Compte SendGrid (pour la vérification email)

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/ahandriourochdi/noxi.git
   cd noxi
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer la base de données**
   - Créer une base de données MySQL
   - Importer le schéma :
     ```bash
     mysql -u root -p < noxi_database.sql
     ```

4. **Configurer les variables d'environnement**
   - Créer un fichier `.env` à la racine (voir section ci-dessous)

5. **Lancer l'application**
   ```bash
   # Terminal 1 — Backend
   npm run server:dev

   # Terminal 2 — Frontend
   npm run dev
   ```

6. Ouvrir `http://localhost:3006` dans le navigateur

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite (port 3006) |
| `npm run build` | Build de production via Vite |
| `npm run preview` | Prévisualisation du build de production |
| `npm run server` | Lance le serveur Express |
| `npm run server:dev` | Lance le serveur Express avec Nodemon (rechargement auto) |
| `npm run watchcss` | Compilation Tailwind CSS en mode watch |
| `npm run buildcss` | Compilation Tailwind CSS |
| `npm run minifycss` | Compilation et minification Tailwind CSS |

---

## Variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
DB_NAME=noxi
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_HOST=localhost
JWT_SECRET=votre_clé_secrète_jwt
CORS_ORIGIN=http://localhost:3006
VITE_API_URL=http://localhost:5000
SENDGRID_API_KEY=votre_clé_sendgrid
```

---

## Licence

ISC
