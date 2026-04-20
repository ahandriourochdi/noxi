// Base de personnages pour Undercover.
// Conventions :
//   - Tags en snake_case, normalisés (jamais de variantes lexicales)
//   - 4-8 tags par catégorie, viser 5-6 en moyenne
//   - Tags doivent être des choses qu'un joueur pourrait dire en indice
//   - Privilégier des tags PARTAGEABLES entre personnages pour nourrir la similarité
//
// Catégories :
//   visual       -> cheveux, yeux, tenue, marques, corps
//   personality  -> traits de caractère
//   powers       -> énergies, éléments, capacités, classes/archétypes, yeux spéciaux
//   themes       -> narratif (orphelin, vengeance, famille, pouvoir…)

export const CHARACTERS = [
  // ─── Naruto ──────────────────────────────────────────────────────────────
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    image: "/assets/img/undercover/naruto.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_bleus", "moustaches_renard", "bandeau_frontal", "tenue_ninja", "adolescent"],
    personality: ["optimiste", "bruyant", "loyal", "impulsif", "tenace", "chaleureux", "naif"],
    powers: ["chakra", "clones", "vent", "regeneration", "ninja", "transformation", "combat_rapproche", "heritage_pouvoir"],
    themes: ["orphelin", "rejet_enfance", "amitie", "rever_de_leader", "bete_scellee", "destin", "heritage", "survivant", "eleve"]
  },
  {
    id: "sasuke",
    name: "Sasuke Uchiha",
    anime: "Naruto",
    image: "/assets/img/undercover/sasuke.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_noirs", "yeux_rouges", "bandeau_frontal", "tenue_ninja", "regard_froid", "adolescent"],
    personality: ["froid", "serieux", "vengeur", "solitaire", "orgueilleux", "determine", "intelligent", "noble"],
    powers: ["chakra", "sharingan", "rinnegan", "feu", "foudre", "ninja", "epeiste", "oeil_special", "combat_rapproche"],
    themes: ["vengeance", "perte_proches", "frere_ennemi", "trahison", "rivalite", "redemption", "genocide_famille", "survivant"]
  },
  {
    id: "sakura",
    name: "Sakura Haruno",
    anime: "Naruto",
    image: "/assets/img/undercover/sakura.jpg",
    visual: ["cheveux_roses", "cheveux_mi_longs", "yeux_verts", "bandeau_frontal", "tenue_ninja", "femme", "adolescent"],
    personality: ["colerique", "determine", "loyal", "intelligent", "protectrice"],
    powers: ["chakra", "super_force", "ninja", "guerison", "medecin", "combat_rapproche"],
    themes: ["amitie", "ascension", "protection_proches", "rivalite", "amour_impossible", "eleve", "inferieur_a_genie"]
  },
  {
    id: "kakashi",
    name: "Kakashi Hatake",
    anime: "Naruto",
    image: "/assets/img/undercover/kakashi.jpg",
    visual: ["cheveux_blancs", "cheveux_herisses", "yeux_rouges", "masque_visage", "cicatrice_oeil", "bandeau_frontal", "tenue_ninja", "adulte"],
    personality: ["calme", "cynique", "serieux", "charismatique", "paresseux", "solitaire", "noble"],
    powers: ["chakra", "sharingan", "foudre", "clones", "ninja", "oeil_special", "combat_rapproche"],
    themes: ["perte_proches", "amitie", "heritage", "mentor", "devoir", "survivant", "orphelin", "solitude"]
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    anime: "Naruto",
    image: "/assets/img/undercover/itachi.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "queue_de_cheval", "yeux_noirs", "yeux_rouges", "manteau_noir", "regard_froid", "regard_intense", "adulte"],
    personality: ["calme", "froid", "noble", "solitaire", "serieux", "intelligent", "manipulateur"],
    powers: ["chakra", "sharingan", "feu", "illusion", "ninja", "oeil_special", "epeiste", "combat_rapproche"],
    themes: ["sacrifice", "frere_ennemi", "tuer_les_siens", "double_identite", "redemption", "perte_proches", "devoir"]
  },
  {
    id: "madara",
    name: "Madara Uchiha",
    anime: "Naruto",
    image: "/assets/img/undercover/madara.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_rouges", "armure", "cape", "regard_froid", "regard_intense", "adulte", "age_mur"],
    personality: ["arrogant", "charismatique", "orgueilleux", "colerique", "sadique", "intelligent", "strategique", "determine", "serieux", "noble"],
    powers: ["chakra", "sharingan", "rinnegan", "feu", "ninja", "oeil_special", "super_force", "super_vitesse", "combat_rapproche", "epeiste"],
    themes: ["pouvoir_absolu", "guerre", "frere_ennemi", "rebelle", "tyran", "immortalite", "leader", "survivant", "perte_proches", "devenir_le_plus_fort", "genie"]
  },
  {
    id: "gaara",
    name: "Gaara",
    anime: "Naruto",
    image: "/assets/img/undercover/gaara.jpg",
    visual: ["cheveux_rouges", "cheveux_courts", "yeux_verts", "cicatrice_front", "cernes", "tenue_ninja", "regard_froid", "adolescent"],
    personality: ["calme", "froid", "solitaire", "serieux", "protecteur", "noble", "determine"],
    powers: ["chakra", "terre", "ninja", "super_force", "combat_rapproche"],
    themes: ["orphelin", "rejet_enfance", "bete_scellee", "redemption", "solitude", "leader", "perte_proches", "famille_difficile"]
  },
  {
    id: "jiraiya",
    name: "Jiraiya",
    anime: "Naruto",
    image: "/assets/img/undercover/jiraiya.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "cheveux_herisses", "cicatrice_joue", "age_mur", "grand", "adulte"],
    personality: ["charismatique", "humoristique", "gourmand", "loyal", "noble", "chaleureux", "determine", "serieux"],
    powers: ["chakra", "ninja", "super_force", "transformation", "combat_rapproche"],
    themes: ["mentor", "sacrifice", "heritage", "amitie", "devoir", "perte_proches", "solitude", "eleve"]
  },
  {
    id: "minato",
    name: "Minato Namikaze",
    anime: "Naruto",
    image: "/assets/img/undercover/minato.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_bleus", "bandeau_frontal", "tenue_ninja", "manteau_blanc", "adulte"],
    personality: ["calme", "noble", "loyal", "determine", "chaleureux", "intelligent", "serieux"],
    powers: ["chakra", "teleportation", "ninja", "vent", "super_vitesse", "combat_rapproche"],
    themes: ["sacrifice", "leader", "protection_proches", "heritage", "devoir", "mentor", "eleve", "perte_proches"]
  },

  // ─── One Piece ───────────────────────────────────────────────────────────
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    anime: "One Piece",
    image: "/assets/img/undercover/luffy.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "chapeau_paille", "cicatrice_joue", "cicatrice_oeil", "adolescent", "muscle"],
    personality: ["optimiste", "bruyant", "loyal", "impulsif", "gourmand", "naif", "chaleureux", "tenace", "determine"],
    powers: ["haki", "super_force", "super_vitesse", "combat_rapproche", "fruit_demon", "transformation", "pirate", "heritage_pouvoir"],
    themes: ["rever_de_leader", "liberte", "amitie", "heritage", "leader", "perte_proches", "frere_ennemi", "devenir_le_plus_fort"]
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    anime: "One Piece",
    image: "/assets/img/undercover/zoro.jpg",
    visual: ["cheveux_verts", "cheveux_courts", "cicatrice_oeil", "cicatrices", "bandana", "muscle", "adulte", "regard_froid", "regard_intense"],
    personality: ["serieux", "loyal", "determine", "silencieux", "tenace", "noble", "solitaire", "colerique"],
    powers: ["epeiste", "haki", "super_force", "super_vitesse", "combat_rapproche", "pirate"],
    themes: ["devenir_le_plus_fort", "promesse", "amitie", "rivalite", "devoir", "heritage", "perte_proches"]
  },
  {
    id: "sanji",
    name: "Sanji Vinsmoke",
    anime: "One Piece",
    image: "/assets/img/undercover/sanji.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_bleus", "costume", "cigarette", "adulte"],
    personality: ["charismatique", "loyal", "colerique", "gourmand", "noble", "impulsif", "chaleureux"],
    powers: ["combat_rapproche", "super_force", "super_vitesse", "feu", "haki", "pirate", "transformation"],
    themes: ["amitie", "famille_difficile", "promesse", "devoir", "survivant", "rejet_enfance", "heritage", "perte_proches"]
  },
  {
    id: "nami",
    name: "Nami",
    anime: "One Piece",
    image: "/assets/img/undercover/nami.jpg",
    visual: ["cheveux_oranges", "cheveux_longs", "yeux_noisette", "tatouages", "femme", "adulte", "adolescent"],
    personality: ["intelligent", "manipulatrice", "determine", "charismatique", "loyal", "tenace", "colerique"],
    powers: ["foudre", "pirate", "deduction", "combat_rapproche"],
    themes: ["amitie", "liberte", "perte_proches", "ascension", "famille", "orphelin", "survivant", "rejet_enfance", "sacrifice", "protection_proches"]
  },
  {
    id: "ace",
    name: "Portgas D. Ace",
    anime: "One Piece",
    image: "/assets/img/undercover/ace.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cicatrices", "tatouages", "muscle", "adulte", "chapeau"],
    personality: ["calme", "loyal", "charismatique", "chaleureux", "protecteur", "noble", "determine"],
    powers: ["feu", "fruit_demon", "super_force", "super_vitesse", "combat_rapproche", "haki", "pirate", "transformation"],
    themes: ["heritage", "famille", "sacrifice", "frere_ennemi", "liberte", "perte_proches", "orphelin", "rejet_enfance", "survivant"]
  },
  {
    id: "law",
    name: "Trafalgar Law",
    anime: "One Piece",
    image: "/assets/img/undercover/law.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "tatouages", "yeux_gris", "manteau_noir", "regard_froid", "regard_intense", "adulte"],
    personality: ["calme", "cynique", "serieux", "determine", "intelligent", "strategique", "noble", "solitaire"],
    powers: ["fruit_demon", "epeiste", "haki", "teleportation", "medecin", "pirate", "combat_rapproche"],
    themes: ["vengeance", "perte_proches", "redemption", "devoir", "survivant", "genocide_famille", "orphelin", "solitude", "heritage"]
  },
  {
    id: "shanks",
    name: "Shanks le Roux",
    anime: "One Piece",
    image: "/assets/img/undercover/shanks.jpg",
    visual: ["cheveux_rouges", "cheveux_mi_longs", "cicatrice_oeil", "bras_prothese", "cape", "adulte", "age_mur", "barbe", "regard_intense"],
    personality: ["calme", "charismatique", "noble", "humoristique", "chaleureux", "serieux", "loyal"],
    powers: ["haki", "epeiste", "super_force", "super_vitesse", "combat_rapproche", "pirate"],
    themes: ["mentor", "leader", "heritage", "liberte", "sacrifice", "devoir", "symbole"]
  },

  // ─── Dragon Ball Z ───────────────────────────────────────────────────────
  {
    id: "goku",
    name: "Son Goku",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/goku.jpg",
    visual: ["cheveux_noirs", "cheveux_herisses", "yeux_noirs", "muscle", "cicatrices", "adulte"],
    personality: ["optimiste", "naif", "loyal", "gourmand", "determine", "chaleureux", "impulsif", "tenace"],
    powers: ["ki", "super_force", "super_vitesse", "vol", "transformation", "teleportation", "saiyan", "combat_rapproche", "heritage_pouvoir"],
    themes: ["amitie", "rivalite", "devenir_le_plus_fort", "protection_proches", "heritage", "orphelin", "survivant", "genocide_famille", "mentor"]
  },
  {
    id: "vegeta",
    name: "Vegeta",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/vegeta.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_noirs", "armure", "muscle", "regard_froid", "regard_intense", "adulte"],
    personality: ["arrogant", "orgueilleux", "colerique", "determine", "noble", "serieux", "tenace", "vengeur"],
    powers: ["ki", "super_force", "super_vitesse", "vol", "transformation", "saiyan", "combat_rapproche", "heritage_pouvoir"],
    themes: ["rivalite", "redemption", "heritage", "frere_ennemi", "noblesse", "survivant", "genocide_famille", "leader", "devenir_le_plus_fort", "ascension"]
  },
  {
    id: "gohan",
    name: "Son Gohan",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/gohan.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "lunettes", "adolescent"],
    personality: ["calme", "intelligent", "timide", "loyal", "serieux", "noble", "determine"],
    powers: ["ki", "super_force", "super_vitesse", "vol", "transformation", "saiyan", "combat_rapproche", "heritage_pouvoir"],
    themes: ["heritage", "famille", "sacrifice", "amitie", "destin", "eleve", "mentor", "protection_proches", "inferieur_a_genie"]
  },
  {
    id: "piccolo",
    name: "Piccolo",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/piccolo.jpg",
    visual: ["cape", "yeux_rouges", "cornes", "grand", "adulte", "regard_froid"],
    personality: ["serieux", "calme", "protecteur", "noble", "froid", "solitaire"],
    powers: ["ki", "super_force", "vol", "regeneration", "combat_rapproche", "telekinesie", "transformation"],
    themes: ["mentor", "redemption", "amitie", "sacrifice", "survivant", "genocide_famille", "solitude", "perte_proches"]
  },
  {
    id: "frieza",
    name: "Freezer",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/frieza.jpg",
    visual: ["yeux_rouges", "cornes", "regard_froid", "regard_intense", "adulte"],
    personality: ["arrogant", "sadique", "psychopathe", "manipulateur", "cynique", "charismatique", "colerique", "orgueilleux"],
    powers: ["ki", "super_force", "vol", "transformation", "super_vitesse", "combat_rapproche", "regeneration"],
    themes: ["pouvoir_absolu", "tyran", "rivalite", "immortalite", "dieu", "genocide_famille", "leader"]
  },
  {
    id: "broly",
    name: "Broly",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/broly.jpg",
    visual: ["cheveux_noirs", "cheveux_herisses", "cheveux_verts", "muscle", "cicatrices", "grand", "adulte", "regard_intense"],
    personality: ["colerique", "sauvage", "silencieux", "determine", "impulsif", "naif"],
    powers: ["ki", "super_force", "super_vitesse", "transformation", "saiyan", "combat_rapproche", "vol", "heritage_pouvoir"],
    themes: ["solitude", "destin", "perte_proches", "rejet_enfance", "survivant", "genocide_famille", "demon_interieur", "orphelin"]
  },

  // ─── Bleach ──────────────────────────────────────────────────────────────
  {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    anime: "Bleach",
    image: "/assets/img/undercover/ichigo.jpg",
    visual: ["cheveux_oranges", "cheveux_courts", "cheveux_herisses", "yeux_noisette", "uniforme_scolaire", "regard_intense", "adolescent"],
    personality: ["colerique", "loyal", "protecteur", "determine", "serieux", "impulsif", "noble", "tenace"],
    powers: ["reiatsu", "epeiste", "zanpakuto", "super_vitesse", "shinigami", "transformation", "combat_rapproche", "heritage_pouvoir"],
    themes: ["protection_proches", "amitie", "perte_proches", "heritage", "double_identite", "survivant", "demon_interieur", "famille", "eleve"]
  },
  {
    id: "rukia",
    name: "Rukia Kuchiki",
    anime: "Bleach",
    image: "/assets/img/undercover/rukia.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_violets", "kimono", "femme", "petit", "adolescent", "regard_froid"],
    personality: ["serieux", "noble", "loyal", "determine", "froid", "calme"],
    powers: ["reiatsu", "epeiste", "zanpakuto", "glace", "shinigami", "super_vitesse"],
    themes: ["amitie", "noblesse", "heritage", "famille", "devoir", "orphelin", "survivant", "perte_proches"]
  },
  {
    id: "byakuya",
    name: "Byakuya Kuchiki",
    anime: "Bleach",
    image: "/assets/img/undercover/byakuya.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_gris", "manteau_blanc", "kimono", "regard_froid", "regard_intense", "adulte"],
    personality: ["froid", "noble", "serieux", "orgueilleux", "silencieux", "solitaire", "determine"],
    powers: ["reiatsu", "epeiste", "zanpakuto", "super_vitesse", "shinigami", "combat_rapproche"],
    themes: ["noblesse", "famille", "perte_proches", "devoir", "promesse", "survivant", "solitude", "leader"]
  },
  {
    id: "aizen",
    name: "Sosuke Aizen",
    anime: "Bleach",
    image: "/assets/img/undercover/aizen.jpg",
    visual: ["cheveux_bruns", "cheveux_mi_longs", "lunettes", "manteau_blanc", "kimono", "adulte", "regard_intense", "regard_froid"],
    personality: ["calme", "manipulateur", "arrogant", "charismatique", "sadique", "intelligent", "strategique", "noble", "orgueilleux"],
    powers: ["reiatsu", "epeiste", "zanpakuto", "illusion", "shinigami", "transformation", "super_force", "super_vitesse"],
    themes: ["trahison", "pouvoir_absolu", "tyran", "dieu", "double_identite", "ascension", "chute", "immortalite"]
  },
  {
    id: "grimmjow",
    name: "Grimmjow Jaegerjaquez",
    anime: "Bleach",
    image: "/assets/img/undercover/grimmjow.jpg",
    visual: ["cheveux_bleus", "cheveux_courts", "yeux_bleus", "masque_visage", "muscle", "cicatrice_oeil", "cicatrices", "adulte", "regard_intense", "regard_froid"],
    personality: ["sauvage", "colerique", "orgueilleux", "impulsif", "rebelle", "arrogant", "determine", "tenace"],
    powers: ["reiatsu", "super_force", "super_vitesse", "combat_rapproche", "transformation", "demon"],
    themes: ["rivalite", "devenir_le_plus_fort", "liberte", "rejet_enfance", "solitude", "frere_ennemi"]
  },

  // ─── Death Note ──────────────────────────────────────────────────────────
  {
    id: "light",
    name: "Light Yagami",
    anime: "Death Note",
    image: "/assets/img/undercover/light.jpg",
    visual: ["cheveux_bruns", "cheveux_courts", "yeux_noisette", "uniforme_scolaire", "regard_intense", "regard_froid", "adolescent"],
    personality: ["intelligent", "arrogant", "manipulateur", "charismatique", "psychopathe", "determine", "strategique", "serieux", "sadique", "noble"],
    powers: ["deduction", "detective", "cahier_mort"],
    themes: ["pouvoir_absolu", "dieu", "justice", "double_identite", "chute", "rivalite", "heritage", "genie"]
  },
  {
    id: "l",
    name: "L Lawliet",
    anime: "Death Note",
    image: "/assets/img/undercover/l.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_noirs", "cernes", "adulte", "fin", "regard_intense"],
    personality: ["intelligent", "calme", "excentrique", "gourmand", "solitaire", "strategique", "determine", "serieux", "cynique"],
    powers: ["deduction", "detective"],
    themes: ["rivalite", "justice", "solitude", "devoir", "orphelin", "heritage", "genie", "secret_obscur"]
  },
  {
    id: "near",
    name: "Near",
    anime: "Death Note",
    image: "/assets/img/undercover/near.jpg",
    visual: ["cheveux_blancs", "cheveux_boucles", "yeux_noirs", "enfant", "petit", "regard_froid", "regard_intense", "fin"],
    personality: ["intelligent", "calme", "solitaire", "froid", "serieux", "strategique", "determine", "timide", "humble"],
    powers: ["deduction", "detective"],
    themes: ["heritage", "justice", "rivalite", "orphelin", "devoir", "solitude", "genie"]
  },

  // ─── Attack on Titan ─────────────────────────────────────────────────────
  {
    id: "eren",
    name: "Eren Yeager",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/eren.jpg",
    visual: ["cheveux_bruns", "cheveux_mi_longs", "yeux_verts", "uniforme_militaire", "regard_intense", "regard_froid", "adolescent"],
    personality: ["colerique", "determine", "impulsif", "loyal", "vengeur", "serieux", "manipulateur"],
    powers: ["transformation", "super_force", "regeneration", "combat_rapproche", "titan_shifter", "heritage_pouvoir"],
    themes: ["liberte", "vengeance", "heritage", "perte_proches", "radicalisation", "destin", "survivant", "genocide_famille", "orphelin", "sacrifice", "double_identite"]
  },
  {
    id: "mikasa",
    name: "Mikasa Ackerman",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/mikasa.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "echarpe_rouge", "uniforme_militaire", "femme", "adolescent", "regard_froid"],
    personality: ["calme", "loyal", "protectrice", "silencieux", "determine", "froid", "serieux", "solitaire"],
    powers: ["super_force", "super_vitesse", "epeiste", "combat_rapproche", "heritage_pouvoir"],
    themes: ["protection_proches", "amour_impossible", "perte_proches", "heritage", "orphelin", "survivant", "genocide_famille", "solitude", "devoir"]
  },
  {
    id: "armin",
    name: "Armin Arlert",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/armin.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_bleus", "uniforme_militaire", "fin", "adolescent"],
    personality: ["intelligent", "timide", "loyal", "determine", "noble", "strategique", "chaleureux"],
    powers: ["transformation", "titan_shifter", "super_force", "regeneration"],
    themes: ["amitie", "sacrifice", "heritage", "ascension", "survivant", "orphelin", "inferieur_a_genie"]
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/levi.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_gris", "uniforme_militaire", "cape", "petit", "regard_froid", "regard_intense", "adulte"],
    personality: ["froid", "serieux", "solitaire", "loyal", "cynique", "determine", "noble", "silencieux"],
    powers: ["super_vitesse", "super_force", "epeiste", "combat_rapproche", "heritage_pouvoir"],
    themes: ["devoir", "perte_proches", "leader", "solitude", "promesse", "orphelin", "survivant", "heritage", "famille_difficile"]
  },
  {
    id: "reiner",
    name: "Reiner Braun",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/reiner.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_noisette", "muscle", "uniforme_militaire", "grand", "adolescent", "regard_intense"],
    personality: ["loyal", "serieux", "protecteur", "noble", "determine", "cynique", "solitaire"],
    powers: ["transformation", "super_force", "regeneration", "titan_shifter", "armure", "combat_rapproche", "heritage_pouvoir"],
    themes: ["double_identite", "trahison", "sacrifice", "devoir", "famille_difficile", "survivant", "perte_proches", "chute", "radicalisation"]
  },

  // ─── Jujutsu Kaisen ──────────────────────────────────────────────────────
  {
    id: "gojo",
    name: "Satoru Gojo",
    anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/gojo.jpg",
    visual: ["cheveux_blancs", "cheveux_herisses", "yeux_bleus", "bandeau_yeux", "lunettes_de_soleil", "grand", "adulte", "regard_intense"],
    personality: ["arrogant", "charismatique", "humoristique", "calme", "intelligent", "noble", "orgueilleux", "serieux"],
    powers: ["cursed_energy", "oeil_special", "sorcier", "teleportation", "domaine", "super_vitesse", "super_force", "combat_rapproche", "heritage_pouvoir"],
    themes: ["pouvoir_absolu", "mentor", "solitude", "heritage", "devoir", "genie", "symbole", "perte_proches"]
  },
  {
    id: "yuji",
    name: "Yuji Itadori",
    anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/yuji.jpg",
    visual: ["cheveux_roses", "cheveux_courts", "yeux_noisette", "uniforme_scolaire", "muscle", "adolescent"],
    personality: ["optimiste", "loyal", "impulsif", "naif", "determine", "chaleureux", "tenace", "bruyant"],
    powers: ["cursed_energy", "super_force", "super_vitesse", "combat_rapproche", "sorcier", "transformation", "heritage_pouvoir"],
    themes: ["sacrifice", "amitie", "bete_scellee", "demon_interieur", "destin", "orphelin", "perte_proches", "eleve", "double_identite"]
  },
  {
    id: "megumi",
    name: "Megumi Fushiguro",
    anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/megumi.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_verts", "uniforme_scolaire", "regard_froid", "regard_intense", "adolescent"],
    personality: ["froid", "serieux", "solitaire", "loyal", "intelligent", "noble", "silencieux", "determine"],
    powers: ["cursed_energy", "ombre", "sorcier", "combat_rapproche", "heritage_pouvoir"],
    themes: ["heritage", "famille", "destin", "protection_proches", "eleve", "famille_difficile", "orphelin"]
  },
  {
    id: "sukuna",
    name: "Ryomen Sukuna",
    anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/sukuna.jpg",
    visual: ["cheveux_roses", "yeux_rouges", "tatouages", "cicatrices", "regard_froid", "regard_intense", "adulte", "muscle"],
    personality: ["arrogant", "sadique", "psychopathe", "charismatique", "cynique", "orgueilleux", "froid", "colerique"],
    powers: ["cursed_energy", "super_force", "super_vitesse", "feu", "combat_rapproche", "domaine", "regeneration", "demon", "transformation"],
    themes: ["pouvoir_absolu", "tyran", "demon_interieur", "immortalite", "dieu", "leader"]
  },
  {
    id: "geto",
    name: "Suguru Geto",
    anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/geto.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "queue_de_cheval", "kimono", "yeux_noirs", "adulte", "regard_froid", "regard_intense"],
    personality: ["calme", "charismatique", "noble", "manipulateur", "serieux", "intelligent", "froid", "determine"],
    powers: ["cursed_energy", "sorcier", "combat_rapproche"],
    themes: ["radicalisation", "chute", "trahison", "rivalite", "frere_ennemi", "perte_proches", "solitude", "amitie", "sacrifice"]
  },

  // ─── My Hero Academia ────────────────────────────────────────────────────
  {
    id: "deku",
    name: "Izuku Midoriya (Deku)",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/deku.jpg",
    visual: ["cheveux_verts", "cheveux_herisses", "yeux_verts", "cicatrices", "costume_hero", "uniforme_scolaire", "adolescent"],
    personality: ["timide", "loyal", "determine", "intelligent", "tenace", "naif", "chaleureux", "optimiste", "strategique"],
    powers: ["super_force", "super_vitesse", "quirk", "heritage_pouvoir", "combat_rapproche", "transformation", "hero"],
    themes: ["heritage", "rever_de_leader", "amitie", "rivalite", "ascension", "mentor", "eleve", "rejet_enfance", "inferieur_a_genie", "protection_proches"]
  },
  {
    id: "bakugo",
    name: "Katsuki Bakugo",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/bakugo.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_rouges", "regard_intense", "regard_froid", "costume_hero", "uniforme_scolaire", "adolescent"],
    personality: ["arrogant", "colerique", "rebelle", "determine", "bruyant", "orgueilleux", "impulsif", "tenace", "intelligent"],
    powers: ["quirk", "super_vitesse", "combat_rapproche", "explosion", "hero", "super_force"],
    themes: ["rivalite", "ascension", "rever_de_leader", "devenir_le_plus_fort", "frere_ennemi", "eleve"]
  },
  {
    id: "todoroki",
    name: "Shoto Todoroki",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/todoroki.jpg",
    visual: ["cheveux_blancs", "cheveux_rouges", "cheveux_heterochromes", "yeux_heterochromes", "cicatrice_oeil", "costume_hero", "uniforme_scolaire", "adolescent", "regard_froid"],
    personality: ["calme", "serieux", "froid", "solitaire", "noble", "determine", "silencieux"],
    powers: ["feu", "glace", "quirk", "combat_rapproche", "hero", "heritage_pouvoir"],
    themes: ["famille_difficile", "heritage", "redemption", "frere_ennemi", "rejet_enfance", "pere_abusif", "perte_proches"]
  },
  {
    id: "all_might",
    name: "All Might",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/all_might.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_bleus", "muscle", "grand", "costume_hero", "adulte", "regard_intense", "sourire_perpetuel"],
    personality: ["charismatique", "optimiste", "noble", "protecteur", "chaleureux", "determine", "loyal", "serieux"],
    powers: ["super_force", "super_vitesse", "quirk", "heritage_pouvoir", "transformation", "hero", "combat_rapproche"],
    themes: ["mentor", "leader", "heritage", "sacrifice", "symbole", "devoir", "perte_proches", "eleve"]
  },

  // ─── Demon Slayer ────────────────────────────────────────────────────────
  {
    id: "tanjiro",
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/tanjiro.jpg",
    visual: ["cheveux_rouges", "cheveux_courts", "yeux_rouges", "cicatrice_front", "kimono", "adolescent"],
    personality: ["chaleureux", "determine", "protecteur", "loyal", "naif", "noble", "optimiste", "tenace"],
    powers: ["epeiste", "eau", "feu", "super_vitesse", "combat_rapproche", "chasseur_demon", "heritage_pouvoir"],
    themes: ["famille", "perte_proches", "protection_proches", "devenir_le_plus_fort", "heritage", "survivant", "genocide_famille", "orphelin", "eleve", "amitie"]
  },
  {
    id: "nezuko",
    name: "Nezuko Kamado",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/nezuko.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "cheveux_degrades", "yeux_roses", "kimono", "femme", "adolescent"],
    personality: ["protectrice", "silencieux", "chaleureux", "loyal", "determine", "naif"],
    powers: ["demon", "feu", "regeneration", "transformation", "super_force", "super_vitesse", "combat_rapproche"],
    themes: ["famille", "protection_proches", "demon_interieur", "perte_proches", "survivant", "genocide_famille", "double_identite"]
  },
  {
    id: "zenitsu",
    name: "Zenitsu Agatsuma",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/zenitsu.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_dores", "kimono", "adolescent"],
    personality: ["peureux", "bruyant", "loyal", "impulsif", "colerique", "naif", "chaleureux"],
    powers: ["epeiste", "foudre", "super_vitesse", "combat_rapproche", "chasseur_demon"],
    themes: ["amitie", "ascension", "heritage", "mentor", "orphelin", "eleve", "inferieur_a_genie"]
  },
  {
    id: "inosuke",
    name: "Inosuke Hashibira",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/inosuke.jpg",
    visual: ["cheveux_noirs", "cheveux_mi_longs", "masque_visage", "muscle", "adolescent"],
    personality: ["sauvage", "bruyant", "impulsif", "colerique", "loyal", "naif", "determine", "tenace"],
    powers: ["epeiste", "combat_rapproche", "super_force", "super_vitesse", "chasseur_demon"],
    themes: ["amitie", "origine_inconnue", "rivalite", "orphelin", "perte_proches", "heritage"]
  },
  {
    id: "giyu",
    name: "Giyu Tomioka",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/giyu.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "queue_de_cheval", "yeux_bleus", "kimono", "cape", "regard_froid", "regard_intense", "adulte"],
    personality: ["froid", "serieux", "solitaire", "silencieux", "noble", "determine", "loyal"],
    powers: ["epeiste", "eau", "super_vitesse", "combat_rapproche", "chasseur_demon"],
    themes: ["perte_proches", "solitude", "devoir", "promesse", "survivant", "orphelin", "mentor"]
  },
  {
    id: "muzan",
    name: "Muzan Kibutsuji",
    anime: "Demon Slayer",
    image: "/assets/img/undercover/muzan.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_rouges", "costume", "regard_froid", "regard_intense", "adulte"],
    personality: ["arrogant", "sadique", "manipulateur", "cynique", "psychopathe", "froid", "charismatique", "orgueilleux"],
    powers: ["demon", "regeneration", "super_force", "super_vitesse", "transformation", "metamorphose", "combat_rapproche"],
    themes: ["pouvoir_absolu", "tyran", "immortalite", "dieu", "leader", "double_identite"]
  },

  // ─── Fullmetal Alchemist ─────────────────────────────────────────────────
  {
    id: "edward",
    name: "Edward Elric",
    anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/edward.jpg",
    visual: ["cheveux_blonds", "cheveux_longs", "tresse", "yeux_dores", "manteau_rouge", "bras_prothese", "jambe_prothese", "petit", "adolescent", "regard_intense"],
    personality: ["colerique", "arrogant", "intelligent", "determine", "loyal", "orgueilleux", "impulsif", "strategique", "noble"],
    powers: ["alchimie", "combat_rapproche", "transformation", "super_force"],
    themes: ["famille", "sacrifice", "heritage", "redemption", "perte_proches", "ascension", "survivant", "orphelin", "protection_proches", "frere_ennemi"]
  },
  {
    id: "alphonse",
    name: "Alphonse Elric",
    anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/alphonse.jpg",
    visual: ["armure", "grand", "yeux_rouges"],
    personality: ["chaleureux", "loyal", "noble", "calme", "determine", "intelligent", "naif", "protecteur"],
    powers: ["alchimie", "combat_rapproche", "super_force", "transformation"],
    themes: ["famille", "sacrifice", "perte_proches", "ascension", "survivant", "orphelin", "redemption", "protection_proches", "heritage"]
  },
  {
    id: "roy_mustang",
    name: "Roy Mustang",
    anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/roy_mustang.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "uniforme_militaire", "adulte", "regard_froid", "regard_intense"],
    personality: ["charismatique", "arrogant", "noble", "determine", "serieux", "intelligent", "strategique", "cynique"],
    powers: ["alchimie", "feu", "combat_rapproche"],
    themes: ["vengeance", "guerre", "perte_proches", "leader", "ascension", "survivant", "genocide_famille", "redemption", "devoir", "mentor"]
  },

  // ─── One Punch Man ───────────────────────────────────────────────────────
  {
    id: "saitama",
    name: "Saitama",
    anime: "One Punch Man",
    image: "/assets/img/undercover/saitama.jpg",
    visual: ["chauve", "cape", "costume_hero", "yeux_noirs", "adulte", "muscle"],
    personality: ["calme", "blase", "humoristique", "naif", "solitaire", "chaleureux", "determine", "humble"],
    powers: ["super_force", "super_vitesse", "invincibilite", "combat_rapproche", "vol", "hero"],
    themes: ["solitude", "ennui", "rivalite", "mentor", "devenir_le_plus_fort", "symbole", "inferieur_a_genie"]
  },
  {
    id: "genos",
    name: "Genos",
    anime: "One Punch Man",
    image: "/assets/img/undercover/genos.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_dores", "bras_prothese", "muscle", "adolescent", "regard_intense"],
    personality: ["serieux", "loyal", "determine", "noble", "colerique", "vengeur", "solitaire"],
    powers: ["super_force", "super_vitesse", "feu", "combat_rapproche", "hero", "cyborg", "transformation"],
    themes: ["vengeance", "mentor", "perte_proches", "heritage", "survivant", "genocide_famille", "orphelin", "eleve", "redemption"]
  },

  // ─── Hunter x Hunter ─────────────────────────────────────────────────────
  {
    id: "gon",
    name: "Gon Freecss",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/gon.jpg",
    visual: ["cheveux_noirs", "cheveux_herisses", "yeux_noisette", "enfant"],
    personality: ["optimiste", "determine", "naif", "loyal", "impulsif", "chaleureux", "tenace", "bruyant"],
    powers: ["nen", "super_force", "combat_rapproche", "chasseur", "transformation", "heritage_pouvoir"],
    themes: ["famille", "amitie", "heritage", "rever_de_leader", "orphelin", "quete_pere", "eleve"]
  },
  {
    id: "killua",
    name: "Killua Zoldyck",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/killua.jpg",
    visual: ["cheveux_blancs", "cheveux_herisses", "yeux_bleus", "enfant", "regard_froid", "regard_intense"],
    personality: ["froid", "intelligent", "loyal", "impulsif", "cynique", "determine", "noble", "strategique"],
    powers: ["nen", "foudre", "super_vitesse", "combat_rapproche", "chasseur", "super_force", "heritage_pouvoir"],
    themes: ["amitie", "famille_difficile", "redemption", "heritage", "rejet_enfance", "protection_proches", "noblesse"]
  },
  {
    id: "hisoka",
    name: "Hisoka Morow",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/hisoka.jpg",
    visual: ["cheveux_rouges", "cheveux_herisses", "yeux_dores", "regard_intense", "adulte", "muscle"],
    personality: ["sadique", "psychopathe", "charismatique", "excentrique", "manipulateur", "cynique", "calme", "arrogant"],
    powers: ["nen", "combat_rapproche", "chasseur", "super_force", "super_vitesse"],
    themes: ["rivalite", "devenir_le_plus_fort", "solitude", "origine_inconnue"]
  },
  {
    id: "kurapika",
    name: "Kurapika",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/kurapika.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_bleus", "yeux_rouges", "regard_intense", "regard_froid", "adolescent"],
    personality: ["serieux", "intelligent", "vengeur", "loyal", "noble", "froid", "determine", "solitaire"],
    powers: ["nen", "chaines", "oeil_special", "super_force", "combat_rapproche", "chasseur"],
    themes: ["vengeance", "perte_proches", "sacrifice", "solitude", "famille", "genocide_famille", "survivant"]
  },

  // ─── Autres (top tier) ───────────────────────────────────────────────────
  {
    id: "lelouch",
    name: "Lelouch Lamperouge",
    anime: "Code Geass",
    image: "/assets/img/undercover/lelouch.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_violets", "yeux_rouges", "uniforme_scolaire", "cape", "masque_visage", "regard_intense", "regard_froid", "adolescent"],
    personality: ["intelligent", "arrogant", "charismatique", "manipulateur", "determine", "serieux", "strategique", "noble", "froid"],
    powers: ["geass", "oeil_special", "deduction"],
    themes: ["vengeance", "double_identite", "sacrifice", "leader", "pouvoir_absolu", "famille", "survivant", "perte_proches", "orphelin", "rever_de_leader", "chute"]
  },
  {
    id: "kirito",
    name: "Kirito",
    anime: "Sword Art Online",
    image: "/assets/img/undercover/kirito.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "manteau_noir", "adolescent", "regard_froid", "regard_intense"],
    personality: ["calme", "solitaire", "loyal", "determine", "serieux", "noble", "intelligent", "silencieux"],
    powers: ["epeiste", "combat_rapproche", "super_vitesse", "super_force"],
    themes: ["solitude", "amitie", "amour_impossible", "protection_proches", "monde_virtuel", "survivant", "perte_proches", "heritage"]
  },
  {
    id: "natsu",
    name: "Natsu Dragneel",
    anime: "Fairy Tail",
    image: "/assets/img/undercover/natsu.jpg",
    visual: ["cheveux_roses", "cheveux_herisses", "yeux_noirs", "echarpe_rouge", "cicatrices", "adolescent", "muscle"],
    personality: ["bruyant", "optimiste", "loyal", "impulsif", "colerique", "naif"],
    powers: ["feu", "magie", "super_force", "super_vitesse", "combat_rapproche", "dragon_slayer"],
    themes: ["famille", "amitie", "heritage", "frere_ennemi", "quete_pere", "dragon_parent", "rever_de_leader"]
  },
  {
    id: "mob",
    name: "Shigeo Kageyama (Mob)",
    anime: "Mob Psycho 100",
    image: "/assets/img/undercover/mob.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "uniforme_scolaire", "adolescent"],
    personality: ["calme", "timide", "naif", "chaleureux", "silencieux", "humble", "loyal", "determine"],
    powers: ["telekinesie", "telepathie", "transformation", "super_force", "super_vitesse"],
    themes: ["amitie", "mentor", "ascension", "solitude", "eleve", "inferieur_a_genie", "demon_interieur"]
  },
  {
    id: "denji",
    name: "Denji",
    anime: "Chainsaw Man",
    image: "/assets/img/undercover/denji.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_noisette", "cicatrices", "cornes", "adolescent", "muscle"],
    personality: ["impulsif", "naif", "loyal", "sauvage", "gourmand", "bruyant", "chaleureux", "tenace"],
    powers: ["transformation", "demon", "regeneration", "super_force", "super_vitesse", "combat_rapproche"],
    themes: ["liberte", "amitie", "protection_proches", "demon_interieur", "rejet_enfance", "orphelin", "survivant", "perte_proches", "famille_difficile"]
  },
  {
    id: "makima",
    name: "Makima",
    anime: "Chainsaw Man",
    image: "/assets/img/undercover/makima.jpg",
    visual: ["cheveux_rouges", "cheveux_longs", "tresse", "yeux_jaunes", "costume", "femme", "regard_intense", "regard_froid", "adulte"],
    personality: ["manipulatrice", "calme", "froid", "sadique", "charismatique", "intelligent", "strategique", "noble", "cynique"],
    powers: ["demon", "super_force", "regeneration", "telepathie", "super_vitesse", "transformation", "controle"],
    themes: ["pouvoir_absolu", "tyran", "dieu", "double_identite", "immortalite", "leader"]
  },

  // ─── Naruto (extensions) ─────────────────────────────────────────────────
  {
    id: "boruto",
    name: "Boruto Uzumaki",
    anime: "Boruto",
    image: "/assets/img/undercover/boruto.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_bleus", "moustaches_renard", "bandeau_frontal", "tenue_ninja", "adolescent"],
    personality: ["rebelle", "loyal", "impulsif", "orgueilleux", "tenace", "determine", "chaleureux", "bruyant"],
    powers: ["chakra", "clones", "vent", "ninja", "oeil_special", "combat_rapproche", "super_vitesse", "heritage_pouvoir"],
    themes: ["heritage", "amitie", "rejet_enfance", "destin", "frere_ennemi", "eleve", "rivalite"]
  },
  {
    id: "pain",
    name: "Pain (Nagato)",
    anime: "Naruto",
    image: "/assets/img/undercover/pain.jpg",
    visual: ["cheveux_oranges", "cheveux_courts", "cheveux_herisses", "yeux_violets", "manteau_noir", "regard_froid", "regard_intense", "adulte"],
    personality: ["calme", "froid", "noble", "serieux", "manipulateur", "charismatique", "intelligent", "strategique", "determine"],
    powers: ["chakra", "rinnegan", "ninja", "oeil_special", "super_force", "super_vitesse", "telekinesie", "combat_rapproche"],
    themes: ["pouvoir_absolu", "guerre", "radicalisation", "perte_proches", "dieu", "genocide_famille", "survivant", "leader", "orphelin", "eleve"]
  },
  {
    id: "obito",
    name: "Obito Uchiha",
    anime: "Naruto",
    image: "/assets/img/undercover/obito.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_noirs", "yeux_rouges", "masque_visage", "manteau_noir", "cicatrices", "regard_intense", "adulte"],
    personality: ["manipulateur", "froid", "vengeur", "solitaire", "charismatique", "serieux", "determine"],
    powers: ["chakra", "sharingan", "rinnegan", "feu", "ninja", "oeil_special", "teleportation", "combat_rapproche"],
    themes: ["vengeance", "double_identite", "radicalisation", "perte_proches", "redemption", "amour_impossible", "orphelin", "survivant", "chute", "sacrifice"]
  },

  // ─── Hunter x Hunter (extensions) ────────────────────────────────────────
  {
    id: "chrollo",
    name: "Chrollo Lucilfer",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/chrollo.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_gris", "manteau_noir", "cicatrice_front", "adulte", "regard_froid", "regard_intense"],
    personality: ["calme", "charismatique", "manipulateur", "intelligent", "noble", "strategique", "cynique", "serieux"],
    powers: ["nen", "combat_rapproche", "super_vitesse", "chasseur", "illusion", "deduction"],
    themes: ["leader", "solitude", "origine_inconnue", "trahison", "chute", "orphelin", "rejet_enfance"]
  },
  {
    id: "meruem",
    name: "Meruem",
    anime: "Hunter x Hunter",
    image: "/assets/img/undercover/meruem.jpg",
    visual: ["cornes", "yeux_violets", "regard_froid", "regard_intense", "muscle", "cape", "adulte"],
    personality: ["arrogant", "intelligent", "noble", "determine", "serieux", "calme", "strategique", "froid", "orgueilleux"],
    powers: ["nen", "super_force", "super_vitesse", "combat_rapproche", "transformation", "regeneration"],
    themes: ["pouvoir_absolu", "tyran", "ascension", "redemption", "origine_inconnue", "leader", "dieu"]
  },

  // ─── JoJo's Bizarre Adventure ────────────────────────────────────────────
  {
    id: "jotaro",
    name: "Jotaro Kujo",
    anime: "JoJo's Bizarre Adventure",
    image: "/assets/img/undercover/jotaro.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "uniforme_scolaire", "muscle", "regard_froid", "regard_intense", "adolescent", "cicatrices", "chapeau"],
    personality: ["froid", "silencieux", "loyal", "determine", "cynique", "serieux", "noble", "solitaire", "tenace"],
    powers: ["telekinesie", "super_force", "super_vitesse", "combat_rapproche", "heritage_pouvoir", "transformation"],
    themes: ["heritage", "famille", "rivalite", "protection_proches", "devoir", "rebelle"]
  },
  {
    id: "dio",
    name: "Dio Brando",
    anime: "JoJo's Bizarre Adventure",
    image: "/assets/img/undercover/dio.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_jaunes", "yeux_rouges", "muscle", "cape", "regard_froid", "regard_intense", "adulte"],
    personality: ["arrogant", "sadique", "charismatique", "manipulateur", "psychopathe", "cynique", "colerique", "orgueilleux"],
    powers: ["telekinesie", "super_force", "super_vitesse", "regeneration", "demon", "transformation", "vampire"],
    themes: ["pouvoir_absolu", "tyran", "immortalite", "frere_ennemi", "dieu", "ascension", "rejet_enfance", "famille_difficile", "chute", "rivalite"]
  },
  {
    id: "giorno",
    name: "Giorno Giovanna",
    anime: "JoJo's Bizarre Adventure",
    image: "/assets/img/undercover/giorno.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "cheveux_boucles", "yeux_bleus", "costume", "adolescent", "regard_intense", "regard_froid"],
    personality: ["calme", "determine", "intelligent", "noble", "charismatique", "strategique", "serieux", "loyal"],
    powers: ["telekinesie", "super_vitesse", "regeneration", "transformation", "super_force", "heritage_pouvoir"],
    themes: ["heritage", "rever_de_leader", "justice", "leader", "famille", "orphelin", "rejet_enfance", "ascension", "famille_difficile"]
  },

  // ─── Berserk ─────────────────────────────────────────────────────────────
  {
    id: "guts",
    name: "Guts",
    anime: "Berserk",
    image: "/assets/img/undercover/guts.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_noirs", "cicatrices", "cicatrice_oeil", "bras_prothese", "muscle", "armure", "manteau_noir", "adulte", "regard_froid", "regard_intense"],
    personality: ["froid", "colerique", "vengeur", "solitaire", "determine", "tenace", "cynique", "silencieux"],
    powers: ["epeiste", "super_force", "combat_rapproche", "armure", "transformation"],
    themes: ["vengeance", "perte_proches", "trahison", "solitude", "frere_ennemi", "demon_interieur", "survivant", "genocide_famille", "orphelin", "rejet_enfance"]
  },
  {
    id: "griffith",
    name: "Griffith",
    anime: "Berserk",
    image: "/assets/img/undercover/griffith.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "yeux_bleus", "armure", "cape", "adulte", "regard_intense", "regard_froid"],
    personality: ["charismatique", "calme", "manipulateur", "noble", "orgueilleux", "intelligent", "strategique", "serieux", "froid"],
    powers: ["epeiste", "combat_rapproche", "super_vitesse", "super_force", "transformation", "demon", "vol"],
    themes: ["ascension", "trahison", "leader", "rever_de_leader", "sacrifice", "pouvoir_absolu", "chute", "orphelin", "rejet_enfance", "dieu"]
  },

  // ─── Inuyasha ────────────────────────────────────────────────────────────
  {
    id: "inuyasha",
    name: "Inuyasha",
    anime: "Inuyasha",
    image: "/assets/img/undercover/inuyasha.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "yeux_dores", "kimono", "cornes", "adolescent", "muscle"],
    personality: ["impulsif", "colerique", "loyal", "rebelle", "chaleureux", "bruyant", "tenace", "determine"],
    powers: ["epeiste", "super_force", "super_vitesse", "demon", "combat_rapproche", "transformation", "heritage_pouvoir"],
    themes: ["famille", "amitie", "amour_impossible", "heritage", "demon_interieur", "frere_ennemi", "rejet_enfance", "orphelin", "perte_proches", "survivant", "solitude"]
  },
  {
    id: "sesshomaru",
    name: "Sesshomaru",
    anime: "Inuyasha",
    image: "/assets/img/undercover/sesshomaru.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "yeux_dores", "armure", "kimono", "regard_froid", "regard_intense", "adulte"],
    personality: ["froid", "arrogant", "noble", "serieux", "solitaire", "silencieux", "determine", "orgueilleux", "calme"],
    powers: ["epeiste", "super_force", "super_vitesse", "demon", "combat_rapproche", "transformation", "poison", "vol"],
    themes: ["noblesse", "heritage", "famille", "frere_ennemi", "devoir", "pouvoir_absolu", "perte_proches", "leader", "solitude"]
  },

  // ─── Rurouni Kenshin ─────────────────────────────────────────────────────
  {
    id: "kenshin",
    name: "Kenshin Himura",
    anime: "Rurouni Kenshin",
    image: "/assets/img/undercover/kenshin.jpg",
    visual: ["cheveux_rouges", "cheveux_longs", "queue_de_cheval", "yeux_violets", "cicatrice_joue", "kimono", "adulte", "petit", "regard_intense"],
    personality: ["calme", "noble", "humble", "chaleureux", "determine", "serieux", "loyal", "solitaire"],
    powers: ["epeiste", "super_vitesse", "combat_rapproche", "super_force"],
    themes: ["redemption", "double_identite", "perte_proches", "devoir", "survivant", "amour_impossible", "guerre", "orphelin", "solitude"]
  },

  // ─── Dr. Stone ───────────────────────────────────────────────────────────
  {
    id: "senku",
    name: "Senku Ishigami",
    anime: "Dr. Stone",
    image: "/assets/img/undercover/senku.jpg",
    visual: ["cheveux_blancs", "cheveux_verts", "cheveux_herisses", "yeux_rouges", "adolescent", "fin", "regard_intense"],
    personality: ["intelligent", "arrogant", "determine", "excentrique", "cynique", "strategique", "calme", "noble"],
    powers: ["deduction", "detective"],
    themes: ["rever_de_leader", "ascension", "heritage", "leader", "amitie", "survivant", "mentor", "genie", "famille"]
  },

  // ─── Evangelion ──────────────────────────────────────────────────────────
  {
    id: "rei",
    name: "Rei Ayanami",
    anime: "Neon Genesis Evangelion",
    image: "/assets/img/undercover/rei.jpg",
    visual: ["cheveux_bleus", "cheveux_courts", "yeux_rouges", "femme", "adolescent", "petit", "regard_froid", "regard_intense", "uniforme_scolaire"],
    personality: ["froid", "silencieux", "calme", "solitaire", "naif", "serieux", "determine"],
    powers: ["telekinesie", "transformation", "regeneration", "super_force"],
    themes: ["origine_inconnue", "solitude", "double_identite", "sacrifice", "destin", "amour_impossible", "orphelin", "immortalite", "heritage"]
  },

  // ─── Black Clover ────────────────────────────────────────────────────────
  {
    id: "asta",
    name: "Asta",
    anime: "Black Clover",
    image: "/assets/img/undercover/asta.jpg",
    visual: ["cheveux_blancs", "cheveux_courts", "cheveux_herisses", "yeux_verts", "cicatrices", "muscle", "adolescent"],
    personality: ["bruyant", "loyal", "tenace", "determine", "chaleureux"],
    powers: ["epeiste", "super_force", "super_vitesse", "combat_rapproche", "anti_magie", "heritage_pouvoir"],
    themes: ["orphelin", "rejet_enfance", "rever_de_leader", "amitie", "ascension", "rivalite", "inferieur_a_genie", "heritage"]
  },
  {
    id: "yuno",
    name: "Yuno",
    anime: "Black Clover",
    image: "/assets/img/undercover/yuno.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_dores", "manteau_noir", "adolescent", "regard_froid", "regard_intense"],
    personality: ["froid", "calme", "serieux", "determine", "noble", "intelligent", "solitaire", "silencieux"],
    powers: ["magie", "vent", "super_vitesse", "combat_rapproche", "heritage_pouvoir"],
    themes: ["orphelin", "rever_de_leader", "rivalite", "frere_ennemi", "ascension", "rejet_enfance", "heritage", "destin", "genie"]
  },

  // ─── Tokyo Ghoul ─────────────────────────────────────────────────────────
  {
    id: "kaneki",
    name: "Ken Kaneki",
    anime: "Tokyo Ghoul",
    image: "/assets/img/undercover/kaneki.jpg",
    visual: ["cheveux_blancs", "cheveux_noirs", "cheveux_courts", "yeux_rouges", "yeux_noirs", "masque_visage", "manteau_noir", "cicatrices", "adolescent", "regard_intense", "regard_froid"],
    personality: ["calme", "froid", "serieux", "solitaire", "protecteur", "intelligent", "determine", "noble"],
    powers: ["demon", "regeneration", "super_force", "super_vitesse", "combat_rapproche", "transformation"],
    themes: ["double_identite", "demon_interieur", "perte_proches", "solitude", "redemption", "survivant", "orphelin", "rejet_enfance"]
  },

  // ─── D.Gray-man ──────────────────────────────────────────────────────────
  {
    id: "allen",
    name: "Allen Walker",
    anime: "D.Gray-man",
    image: "/assets/img/undercover/allen.jpg",
    visual: ["cheveux_blancs", "cheveux_courts", "yeux_gris", "cicatrice_oeil", "cicatrices", "manteau_noir", "bras_prothese", "adolescent", "regard_intense"],
    personality: ["noble", "chaleureux", "determine", "loyal", "serieux", "calme", "humble", "protecteur"],
    powers: ["epeiste", "combat_rapproche", "transformation", "oeil_special", "super_force", "super_vitesse", "heritage_pouvoir"],
    themes: ["orphelin", "rejet_enfance", "demon_interieur", "sacrifice", "double_identite", "mentor", "eleve", "survivant", "perte_proches", "solitude"]
  },

  // ─── Bungo Stray Dogs ────────────────────────────────────────────────────
  {
    id: "dazai",
    name: "Osamu Dazai",
    anime: "Bungo Stray Dogs",
    image: "/assets/img/undercover/dazai.jpg",
    visual: ["cheveux_bruns", "cheveux_courts", "yeux_noirs", "manteau_noir", "adulte", "fin", "regard_intense", "cicatrices"],
    personality: ["intelligent", "manipulateur", "excentrique", "calme", "cynique", "noble", "charismatique", "humoristique", "strategique"],
    powers: ["deduction", "detective"],
    themes: ["double_identite", "solitude", "redemption", "chute", "secret_obscur", "mentor", "trahison", "orphelin"]
  },

  // ─── My Hero Academia (villains) ─────────────────────────────────────────
  {
    id: "shigaraki",
    name: "Tomura Shigaraki",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/shigaraki.jpg",
    visual: ["cheveux_bleus", "cheveux_mi_longs", "yeux_rouges", "manteau_noir", "cicatrices", "adulte", "regard_intense", "regard_froid"],
    personality: ["colerique", "sadique", "rebelle", "manipulateur", "determine", "vengeur", "psychopathe", "cynique"],
    powers: ["quirk", "combat_rapproche", "super_force", "transformation", "heritage_pouvoir"],
    themes: ["radicalisation", "perte_proches", "tyran", "demon_interieur", "rejet_enfance", "heritage", "orphelin", "survivant", "genocide_famille", "famille_difficile", "chute"]
  },
  {
    id: "dabi",
    name: "Dabi",
    anime: "My Hero Academia",
    image: "/assets/img/undercover/dabi.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_bleus", "cicatrices", "manteau_noir", "adulte", "regard_froid", "regard_intense"],
    personality: ["froid", "cynique", "sadique", "vengeur", "manipulateur", "solitaire", "colerique", "psychopathe"],
    powers: ["feu", "quirk", "combat_rapproche", "heritage_pouvoir"],
    themes: ["famille_difficile", "vengeance", "radicalisation", "frere_ennemi", "double_identite", "perte_proches", "chute", "rejet_enfance", "pere_abusif"]
  },

  // ─── Attack on Titan (extensions) ────────────────────────────────────────
  {
    id: "erwin",
    name: "Erwin Smith",
    anime: "Attack on Titan",
    image: "/assets/img/undercover/erwin.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_bleus", "uniforme_militaire", "cape", "grand", "adulte", "regard_intense", "regard_froid"],
    personality: ["charismatique", "strategique", "noble", "serieux", "determine", "intelligent", "cynique", "calme"],
    powers: ["combat_rapproche", "super_vitesse"],
    themes: ["leader", "sacrifice", "devoir", "perte_proches", "symbole", "survivant", "heritage", "mentor", "orphelin"]
  },

  // ─── Spy x Family ────────────────────────────────────────────────────────
  {
    id: "loid",
    name: "Loid Forger (Twilight)",
    anime: "Spy x Family",
    image: "/assets/img/undercover/loid.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_bleus", "costume", "adulte", "regard_intense", "regard_froid"],
    personality: ["calme", "intelligent", "charismatique", "manipulateur", "noble", "serieux", "strategique", "solitaire"],
    powers: ["deduction", "detective", "combat_rapproche", "super_vitesse"],
    themes: ["double_identite", "devoir", "famille", "solitude", "secret_obscur", "orphelin", "survivant", "guerre", "perte_proches"]
  },

  // ─── Tokyo Revengers ─────────────────────────────────────────────────────
  {
    id: "mikey",
    name: "Manjiro Sano (Mikey)",
    anime: "Tokyo Revengers",
    image: "/assets/img/undercover/mikey.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_noirs", "tenue_noire", "petit", "adolescent", "regard_intense", "regard_froid"],
    personality: ["charismatique", "calme", "impulsif", "noble", "colerique", "determine", "loyal", "solitaire"],
    powers: ["super_force", "super_vitesse", "combat_rapproche", "heritage_pouvoir"],
    themes: ["leader", "perte_proches", "amitie", "chute", "famille", "demon_interieur", "orphelin", "survivant", "devenir_le_plus_fort"]
  },

  // ─── Death Note (extension) ──────────────────────────────────────────────
  // Densifie le cluster détectives génies (L, Near, Light, Lelouch, Senku, Dazai).
  {
    id: "mello",
    name: "Mello",
    anime: "Death Note",
    image: "/assets/img/undercover/mello.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_bleus", "manteau_noir", "cicatrices", "adolescent", "regard_intense"],
    personality: ["intelligent", "colerique", "impulsif", "determine", "cynique", "rebelle", "orgueilleux", "manipulateur"],
    powers: ["deduction", "detective", "strategique"],
    themes: ["rivalite", "heritage", "justice", "solitude", "chute", "orphelin", "vengeance"]
  },

  // ─── Dragon Ball Z (extensions) ──────────────────────────────────────────
  // Densifie le cluster saiyans (Goku, Vegeta, Gohan, Broly) et tyrans (Frieza).
  {
    id: "trunks",
    name: "Trunks",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/trunks.jpg",
    visual: ["cheveux_violets", "cheveux_mi_longs", "yeux_bleus", "muscle", "manteau_noir", "adolescent", "regard_intense"],
    personality: ["serieux", "noble", "loyal", "determine", "calme", "protecteur", "solitaire"],
    powers: ["ki", "super_force", "super_vitesse", "vol", "transformation", "saiyan", "epeiste", "combat_rapproche", "heritage_pouvoir"],
    themes: ["heritage", "famille", "sacrifice", "protection_proches", "devoir", "survivant", "perte_proches", "orphelin", "solitude"]
  },
  {
    id: "cell",
    name: "Cell",
    anime: "Dragon Ball Z",
    image: "/assets/img/undercover/cell.jpg",
    visual: ["yeux_roses", "yeux_verts", "armure", "muscle", "regard_froid", "regard_intense", "grand", "adulte"],
    personality: ["arrogant", "sadique", "manipulateur", "cynique", "charismatique", "psychopathe", "orgueilleux", "strategique"],
    powers: ["ki", "super_force", "super_vitesse", "vol", "transformation", "regeneration", "teleportation", "combat_rapproche"],
    themes: ["pouvoir_absolu", "tyran", "ascension", "origine_inconnue", "immortalite", "dieu", "devenir_le_plus_fort"]
  },

  // ─── Bleach (extensions) ─────────────────────────────────────────────────
  // Ulquiorra : stoïque hollow → cluster Byakuya/Giyu/Levi/Mikasa/Kirito.
  // Hitsugaya : capitaine cheveux blancs glace épéiste → cluster Gojo/Sesshomaru.
  {
    id: "ulquiorra",
    name: "Ulquiorra Cifer",
    anime: "Bleach",
    image: "/assets/img/undercover/ulquiorra.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_verts", "masque_visage", "manteau_blanc", "cicatrices", "regard_froid", "regard_intense", "adulte"],
    personality: ["froid", "calme", "silencieux", "serieux", "solitaire", "noble", "determine"],
    powers: ["reiatsu", "super_vitesse", "super_force", "combat_rapproche", "transformation", "vol", "regeneration", "demon"],
    themes: ["solitude", "origine_inconnue", "devoir", "amour_impossible", "sacrifice", "perte_proches", "destin"]
  },
  {
    id: "hitsugaya",
    name: "Toshiro Hitsugaya",
    anime: "Bleach",
    image: "/assets/img/undercover/hitsugaya.jpg",
    visual: ["cheveux_blancs", "cheveux_courts", "cheveux_herisses", "yeux_verts", "manteau_blanc", "kimono", "petit", "adolescent", "regard_froid", "regard_intense"],
    personality: ["froid", "serieux", "noble", "determine", "calme", "loyal", "solitaire", "silencieux"],
    powers: ["reiatsu", "epeiste", "zanpakuto", "glace", "shinigami", "super_vitesse", "combat_rapproche"],
    themes: ["noblesse", "devoir", "leader", "promesse", "perte_proches", "protection_proches", "genie"]
  },

  // ─── Nanatsu no Taizai ───────────────────────────────────────────────────
  {
    id: "meliodas", name: "Meliodas", anime: "Nanatsu no Taizai",
    image: "/assets/img/undercover/meliodas.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "cheveux_herisses", "yeux_verts", "petit", "muscle", "adolescent", "cicatrices"],
    personality: ["optimiste", "bruyant", "loyal", "impulsif", "gourmand", "chaleureux", "determine", "charismatique"],
    powers: ["epeiste", "super_force", "super_vitesse", "combat_rapproche", "demon", "transformation", "heritage_pouvoir", "magie"],
    themes: ["amour_impossible", "demon_interieur", "heritage", "famille_difficile", "leader", "immortalite", "redemption", "frere_ennemi"]
  },
  {
    id: "ban", name: "Ban", anime: "Nanatsu no Taizai",
    image: "/assets/img/undercover/ban.jpg",
    visual: ["cheveux_argentes", "cheveux_courts", "yeux_rouges", "cicatrices", "tatouages", "muscle", "adulte", "regard_intense"],
    personality: ["cynique", "loyal", "humoristique", "chaleureux", "rebelle", "impulsif", "determine", "noble"],
    powers: ["super_force", "super_vitesse", "combat_rapproche", "regeneration", "invincibilite", "magie"],
    themes: ["amour_impossible", "immortalite", "amitie", "perte_proches", "orphelin", "rejet_enfance", "redemption", "sacrifice"]
  },
  {
    id: "escanor", name: "Escanor", anime: "Nanatsu no Taizai",
    image: "/assets/img/undercover/escanor.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "muscle", "grand", "adulte", "barbe", "regard_intense"],
    personality: ["arrogant", "noble", "loyal", "determine", "humble", "chaleureux", "serieux", "charismatique"],
    powers: ["super_force", "super_vitesse", "lumiere", "transformation", "combat_rapproche", "magie", "heritage_pouvoir"],
    themes: ["pouvoir_absolu", "heritage", "sacrifice", "ascension", "solitude", "amour_impossible"]
  },

  // ─── Re:Zero ─────────────────────────────────────────────────────────────
  {
    id: "subaru", name: "Subaru Natsuki", anime: "Re:Zero",
    image: "/assets/img/undercover/subaru.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "adolescent", "cicatrices", "regard_intense"],
    personality: ["determine", "tenace", "impulsif", "loyal", "chaleureux", "naif", "colerique", "bruyant"],
    powers: ["resurrection", "heritage_pouvoir", "combat_rapproche"],
    themes: ["monde_virtuel", "sacrifice", "amour_impossible", "rejet_enfance", "survivant", "destin", "perte_proches", "demon_interieur"]
  },
  {
    id: "rem", name: "Rem", anime: "Re:Zero",
    image: "/assets/img/undercover/rem.jpg",
    visual: ["cheveux_bleus", "cheveux_courts", "yeux_bleus", "femme", "adolescent", "petit", "cornes"],
    personality: ["loyal", "chaleureux", "noble", "timide", "determine", "protectrice", "humble", "silencieux"],
    powers: ["demon", "super_force", "super_vitesse", "combat_rapproche", "magie", "transformation"],
    themes: ["amour_impossible", "amitie", "sacrifice", "frere_ennemi", "demon_interieur", "rejet_enfance", "famille", "perte_proches"]
  },
  {
    id: "emilia", name: "Emilia", anime: "Re:Zero",
    image: "/assets/img/undercover/emilia.jpg",
    visual: ["cheveux_argentes", "cheveux_longs", "yeux_violets", "femme", "adolescent"],
    personality: ["noble", "chaleureux", "determine", "naif", "serieux", "timide", "protectrice", "humble"],
    powers: ["magie", "glace", "heritage_pouvoir"],
    themes: ["rever_de_leader", "rejet_enfance", "heritage", "amour_impossible", "destin", "orphelin", "solitude", "ascension"]
  },

  // ─── Fire Force ─────────────────────────────────────────────────────────
  {
    id: "shinra", name: "Shinra Kusakabe", anime: "Fire Force",
    image: "/assets/img/undercover/shinra.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "cheveux_herisses", "yeux_jaunes", "muscle", "adolescent", "cicatrices", "costume_hero", "regard_intense"],
    personality: ["determine", "loyal", "impulsif", "bruyant", "chaleureux", "naif", "tenace", "protecteur"],
    powers: ["feu", "super_force", "super_vitesse", "combat_rapproche", "hero", "heritage_pouvoir", "vol"],
    themes: ["orphelin", "rever_de_leader", "heritage", "famille", "demon_interieur", "rejet_enfance", "perte_proches", "frere_ennemi"]
  },
  {
    id: "benimaru", name: "Benimaru Shinmon", anime: "Fire Force",
    image: "/assets/img/undercover/benimaru.jpg",
    visual: ["cheveux_blancs", "cheveux_rouges", "cheveux_longs", "yeux_gris", "adulte", "muscle", "regard_froid", "regard_intense", "kimono"],
    personality: ["calme", "serieux", "arrogant", "charismatique", "noble", "solitaire", "determine", "silencieux"],
    powers: ["feu", "super_force", "super_vitesse", "combat_rapproche", "hero", "epeiste"],
    themes: ["leader", "devoir", "heritage", "solitude", "noblesse"]
  },

  // ─── Haikyuu!! ───────────────────────────────────────────────────────────
  {
    id: "hinata_haikyuu", name: "Shoyo Hinata", anime: "Haikyuu!!",
    image: "/assets/img/undercover/hinata_haikyuu.jpg",
    visual: ["cheveux_oranges", "cheveux_courts", "cheveux_herisses", "yeux_noisette", "petit", "adolescent", "uniforme_scolaire"],
    personality: ["optimiste", "bruyant", "loyal", "impulsif", "tenace", "determine", "chaleureux", "naif", "humble"],
    powers: ["super_vitesse", "agilite"],
    themes: ["rever_de_leader", "amitie", "rivalite", "heritage", "inferieur_a_genie", "ascension", "devenir_le_plus_fort", "mentor"]
  },
  {
    id: "kageyama", name: "Tobio Kageyama", anime: "Haikyuu!!",
    image: "/assets/img/undercover/kageyama.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_bleus", "adolescent", "uniforme_scolaire", "regard_froid", "regard_intense", "grand"],
    personality: ["froid", "serieux", "colerique", "arrogant", "determine", "tenace", "intelligent", "solitaire", "noble", "rebelle"],
    powers: ["strategique", "super_vitesse", "agilite"],
    themes: ["rivalite", "devenir_le_plus_fort", "genie", "amitie", "ascension", "solitude"]
  },

  // ─── Vinland Saga ────────────────────────────────────────────────────────
  {
    id: "thorfinn", name: "Thorfinn", anime: "Vinland Saga",
    image: "/assets/img/undercover/thorfinn.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_bleus", "cicatrices", "adolescent", "regard_intense", "regard_froid", "petit"],
    personality: ["froid", "vengeur", "determine", "silencieux", "serieux", "solitaire", "cynique", "tenace", "humble"],
    powers: ["epeiste", "combat_rapproche", "super_vitesse", "super_force"],
    themes: ["vengeance", "perte_proches", "survivant", "frere_ennemi", "redemption", "orphelin", "solitude", "heritage", "guerre"]
  },
  {
    id: "askeladd", name: "Askeladd", anime: "Vinland Saga",
    image: "/assets/img/undercover/askeladd.jpg",
    visual: ["cheveux_blonds", "cheveux_longs", "yeux_bleus", "adulte", "cicatrices", "regard_froid", "regard_intense", "barbe"],
    personality: ["calme", "manipulateur", "cynique", "strategique", "intelligent", "noble", "charismatique", "sadique", "solitaire"],
    powers: ["epeiste", "combat_rapproche", "super_vitesse", "deduction"],
    themes: ["leader", "trahison", "survivant", "secret_obscur", "genocide_famille", "vengeance", "double_identite", "chute", "sacrifice"]
  },

  // ─── Psycho-Pass ─────────────────────────────────────────────────────────
  {
    id: "kogami", name: "Shinya Kogami", anime: "Psycho-Pass",
    image: "/assets/img/undercover/kogami.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_gris", "manteau_noir", "adulte", "muscle", "cicatrices", "regard_froid", "regard_intense"],
    personality: ["froid", "serieux", "determine", "solitaire", "intelligent", "cynique", "vengeur", "noble", "strategique"],
    powers: ["combat_rapproche", "super_vitesse", "super_force", "deduction", "detective"],
    themes: ["vengeance", "perte_proches", "devoir", "justice", "solitude", "rebelle", "redemption", "double_identite"]
  },
  {
    id: "makishima", name: "Shogo Makishima", anime: "Psycho-Pass",
    image: "/assets/img/undercover/makishima.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "yeux_dores", "adulte", "manteau_blanc", "regard_froid", "regard_intense"],
    personality: ["calme", "charismatique", "manipulateur", "intelligent", "strategique", "noble", "sadique", "cynique", "arrogant"],
    powers: ["deduction", "combat_rapproche", "epeiste", "strategique"],
    themes: ["pouvoir_absolu", "radicalisation", "dieu", "chute", "double_identite", "secret_obscur", "tyran", "origine_inconnue"]
  },

  // ─── Hajime no Ippo ──────────────────────────────────────────────────────
  {
    id: "ippo", name: "Makunouchi Ippo", anime: "Hajime no Ippo",
    image: "/assets/img/undercover/ippo.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "muscle", "adolescent", "cicatrices"],
    personality: ["timide", "loyal", "determine", "tenace", "chaleureux", "humble", "naif", "serieux", "protecteur"],
    powers: ["super_force", "combat_rapproche", "super_vitesse"],
    themes: ["devenir_le_plus_fort", "ascension", "rejet_enfance", "mentor", "amitie", "heritage", "famille", "eleve", "inferieur_a_genie"]
  },

  // ─── Kuroko's Basketball ─────────────────────────────────────────────────
  {
    id: "kuroko", name: "Tetsuya Kuroko", anime: "Kuroko's Basketball",
    image: "/assets/img/undercover/kuroko.jpg",
    visual: ["cheveux_bleus", "cheveux_courts", "yeux_bleus", "uniforme_scolaire", "petit", "adolescent", "regard_froid", "fin"],
    personality: ["calme", "silencieux", "noble", "loyal", "determine", "serieux", "humble", "protecteur", "solitaire"],
    powers: ["agilite", "strategique", "super_vitesse"],
    themes: ["amitie", "devoir", "mentor", "rivalite", "heritage", "inferieur_a_genie", "solitude"]
  },
  {
    id: "kagami", name: "Taiga Kagami", anime: "Kuroko's Basketball",
    image: "/assets/img/undercover/kagami.jpg",
    visual: ["cheveux_rouges", "cheveux_courts", "cheveux_herisses", "yeux_rouges", "uniforme_scolaire", "adolescent", "muscle", "grand", "regard_intense"],
    personality: ["colerique", "determine", "tenace", "loyal", "orgueilleux", "impulsif", "bruyant", "rebelle", "chaleureux"],
    powers: ["super_force", "super_vitesse", "agilite", "combat_rapproche"],
    themes: ["rivalite", "amitie", "devenir_le_plus_fort", "ascension", "rejet_enfance", "heritage"]
  },

  // ─── FMA Brotherhood (homoncules) ───────────────────────────────────────
  {
    id: "greed", name: "Greed", anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/greed.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_violets", "adulte", "manteau_noir", "regard_intense", "regard_froid", "muscle"],
    personality: ["arrogant", "charismatique", "cynique", "rebelle", "orgueilleux", "impulsif", "loyal", "noble"],
    powers: ["regeneration", "super_force", "combat_rapproche", "invincibilite", "transformation", "armure"],
    themes: ["pouvoir_absolu", "immortalite", "trahison", "amitie", "ascension", "redemption", "devenir_le_plus_fort"]
  },
  {
    id: "envy", name: "Envy", anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/envy.jpg",
    visual: ["cheveux_verts", "cheveux_longs", "yeux_violets", "regard_intense"],
    personality: ["sadique", "arrogant", "manipulateur", "psychopathe", "cynique", "colerique"],
    powers: ["metamorphose", "regeneration", "transformation", "super_vitesse", "super_force", "combat_rapproche"],
    themes: ["chute", "demon_interieur", "tyran", "solitude", "immortalite"]
  },
  {
    id: "lust", name: "Lust", anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/lust.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_violets", "femme", "adulte", "regard_intense", "regard_froid"],
    personality: ["sadique", "arrogant", "manipulatrice", "cynique", "calme", "charismatique", "noble"],
    powers: ["combat_rapproche", "regeneration", "transformation", "super_vitesse", "super_force"],
    themes: ["tyran", "pouvoir_absolu", "immortalite", "origine_inconnue"]
  },
  {
    id: "father", name: "Father", anime: "Fullmetal Alchemist",
    image: "/assets/img/undercover/father.jpg",
    visual: ["cheveux_blancs", "barbe", "adulte", "age_mur", "grand", "regard_intense", "regard_froid"],
    personality: ["arrogant", "froid", "calme", "manipulateur", "psychopathe", "cynique", "orgueilleux", "serieux"],
    powers: ["alchimie", "super_force", "super_vitesse", "regeneration", "transformation", "invincibilite", "vol"],
    themes: ["pouvoir_absolu", "tyran", "immortalite", "dieu", "genocide_famille", "origine_inconnue", "chute"]
  },

  // ─── Naruto villains ─────────────────────────────────────────────────────
  {
    id: "kabuto", name: "Kabuto Yakushi", anime: "Naruto",
    image: "/assets/img/undercover/kabuto.jpg",
    visual: ["cheveux_argentes", "cheveux_mi_longs", "queue_de_cheval", "lunettes", "yeux_noirs", "adulte", "regard_froid", "regard_intense", "tenue_ninja"],
    personality: ["manipulateur", "cynique", "intelligent", "calme", "sadique", "strategique", "noble"],
    powers: ["chakra", "ninja", "guerison", "medecin", "combat_rapproche", "transformation", "deduction"],
    themes: ["trahison", "orphelin", "origine_inconnue", "ascension", "radicalisation", "double_identite", "rejet_enfance"]
  },
  {
    id: "kaguya", name: "Kaguya Otsutsuki", anime: "Naruto",
    image: "/assets/img/undercover/kaguya.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "yeux_dores", "femme", "adulte", "cornes", "regard_froid", "regard_intense", "kimono"],
    personality: ["froid", "arrogant", "noble", "solitaire", "calme", "manipulatrice", "orgueilleux"],
    powers: ["chakra", "byakugan", "rinnegan", "super_force", "super_vitesse", "teleportation", "invincibilite", "oeil_special", "regeneration", "transformation"],
    themes: ["pouvoir_absolu", "immortalite", "dieu", "genocide_famille", "radicalisation", "origine_inconnue", "tyran"]
  },
  {
    id: "hashirama", name: "Hashirama Senju", anime: "Naruto",
    image: "/assets/img/undercover/hashirama.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_noisette", "armure", "adulte", "muscle"],
    personality: ["chaleureux", "charismatique", "loyal", "noble", "determine", "protecteur", "optimiste", "humble"],
    powers: ["chakra", "ninja", "super_force", "super_vitesse", "regeneration", "heritage_pouvoir", "combat_rapproche"],
    themes: ["leader", "amitie", "heritage", "sacrifice", "devoir", "symbole", "frere_ennemi", "rever_de_leader", "mentor"]
  },

  // ─── MHA heroes/villains supplémentaires ────────────────────────────────
  {
    id: "endeavor", name: "Endeavor", anime: "My Hero Academia",
    image: "/assets/img/undercover/endeavor.jpg",
    visual: ["cheveux_rouges", "cheveux_courts", "barbe", "adulte", "muscle", "costume_hero", "grand", "regard_intense", "regard_froid"],
    personality: ["arrogant", "colerique", "determine", "serieux", "orgueilleux", "solitaire", "cynique", "tenace"],
    powers: ["feu", "super_force", "super_vitesse", "quirk", "combat_rapproche", "hero", "heritage_pouvoir"],
    themes: ["pere_abusif", "famille_difficile", "redemption", "rivalite", "heritage", "devoir", "ascension", "leader"]
  },
  {
    id: "hawks", name: "Hawks", anime: "My Hero Academia",
    image: "/assets/img/undercover/hawks.jpg",
    visual: ["cheveux_rouges", "cheveux_courts", "yeux_dores", "adulte", "costume_hero", "regard_intense", "cicatrices"],
    personality: ["charismatique", "calme", "manipulateur", "intelligent", "noble", "chaleureux", "strategique", "serieux"],
    powers: ["vol", "super_vitesse", "quirk", "hero", "combat_rapproche", "deduction"],
    themes: ["double_identite", "devoir", "heritage", "mentor", "famille_difficile", "secret_obscur", "sacrifice", "rejet_enfance"]
  },
  {
    id: "stain", name: "Stain (Hero Killer)", anime: "My Hero Academia",
    image: "/assets/img/undercover/stain.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_rouges", "manteau_noir", "cicatrices", "adulte", "regard_intense", "regard_froid", "bandana"],
    personality: ["froid", "determine", "psychopathe", "cynique", "solitaire", "serieux", "arrogant", "sadique"],
    powers: ["epeiste", "combat_rapproche", "super_vitesse", "quirk"],
    themes: ["radicalisation", "chute", "sacrifice", "solitude", "tyran", "vengeance"]
  },

  // ─── Blue Lock ──────────────────────────────────────────────────────────
  {
    id: "isagi", name: "Yoichi Isagi", anime: "Blue Lock",
    image: "/assets/img/undercover/isagi.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_verts", "adolescent", "uniforme_sport", "tenue_sport"],
    personality: ["determine", "intelligent", "strategique", "tenace", "humble", "optimiste", "serieux"],
    powers: ["vision_spatiale", "super_vitesse", "deduction", "sportif", "combat_rapproche"],
    themes: ["ascension", "rivalite", "devenir_le_plus_fort", "equipe_de_pairs", "ego", "rever_de_leader", "eleve", "eveil_de_pouvoir"]
  },
  {
    id: "rin_itoshi", name: "Rin Itoshi", anime: "Blue Lock",
    image: "/assets/img/undercover/rin_itoshi.jpg",
    visual: ["cheveux_noirs", "cheveux_mi_longs", "yeux_bleus", "adolescent", "uniforme_sport", "regard_froid", "regard_intense"],
    personality: ["froid", "arrogant", "solitaire", "determine", "serieux", "orgueilleux", "cynique", "intelligent"],
    powers: ["super_vitesse", "vision_spatiale", "sportif", "combat_rapproche", "deduction"],
    themes: ["rivalite", "frere_ennemi", "devenir_le_plus_fort", "ego", "genie", "solitude", "heritage"]
  },
  {
    id: "bachira", name: "Meguru Bachira", anime: "Blue Lock",
    image: "/assets/img/undercover/bachira.jpg",
    visual: ["cheveux_blonds", "cheveux_mi_longs", "yeux_dores", "adolescent", "uniforme_sport"],
    personality: ["excentrique", "joyeux", "creatif", "impulsif", "chaleureux", "optimiste", "imprevisible"],
    powers: ["super_vitesse", "sportif", "combat_rapproche"],
    themes: ["solitude", "rever_de_leader", "amitie", "double_identite", "ego", "eleve"]
  },
  {
    id: "reo", name: "Reo Mikage", anime: "Blue Lock",
    image: "/assets/img/undercover/reo.jpg",
    visual: ["cheveux_mauves", "cheveux_mi_longs", "yeux_mauves", "adolescent", "uniforme_sport", "noble"],
    personality: ["calme", "intelligent", "strategique", "loyal", "noble", "determine", "chaleureux"],
    powers: ["sportif", "vision_spatiale", "deduction", "combat_rapproche"],
    themes: ["amitie", "rivalite", "heritage", "equipe_de_pairs", "ego", "eleve"]
  },

  // ─── Solo Leveling ──────────────────────────────────────────────────────
  {
    id: "jinwoo", name: "Sung Jin-Woo", anime: "Solo Leveling",
    image: "/assets/img/undercover/jinwoo.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "yeux_mauves", "manteau_noir", "adulte", "grand", "muscle", "regard_froid", "regard_intense"],
    personality: ["calme", "froid", "solitaire", "determine", "protecteur", "serieux", "intelligent", "strategique", "charismatique"],
    powers: ["invocation", "ombres", "epeiste", "super_force", "super_vitesse", "regeneration", "heritage_pouvoir", "combat_rapproche", "immortalite"],
    themes: ["ascension", "de_faible_a_fort", "devenir_le_plus_fort", "pouvoir_absolu", "protection_proches", "secret_obscur", "eveil_de_pouvoir", "solitude", "heritage", "chasseur"]
  },
  {
    id: "cha_haein", name: "Cha Hae-In", anime: "Solo Leveling",
    image: "/assets/img/undercover/cha_haein.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_mauves", "femme", "adulte", "tenue_combat", "epee"],
    personality: ["calme", "serieux", "determine", "noble", "solitaire", "protectrice", "loyal"],
    powers: ["epeiste", "super_vitesse", "super_force", "combat_rapproche", "sens_accru"],
    themes: ["rang_eleve", "solitude", "rivalite", "devoir", "chasseur", "attirance", "ascension"]
  },

  // ─── Frieren ────────────────────────────────────────────────────────────
  {
    id: "frieren", name: "Frieren", anime: "Sousou no Frieren",
    image: "/assets/img/undercover/frieren.jpg",
    visual: ["cheveux_blancs", "cheveux_longs", "cheveux_tresses", "yeux_verts", "oreilles_elfe", "robe", "femme", "adulte", "age_mur", "petite"],
    personality: ["calme", "distante", "curieuse", "paresseuse", "intelligent", "solitaire", "humble", "gourmande"],
    powers: ["magie", "longevite", "heritage_pouvoir", "deduction"],
    themes: ["immortalite", "perte_proches", "solitude", "mentor", "voyage", "heritage", "secret_obscur", "amitie"]
  },
  {
    id: "fern", name: "Fern", anime: "Sousou no Frieren",
    image: "/assets/img/undercover/fern.jpg",
    visual: ["cheveux_mauves", "cheveux_mi_longs", "yeux_mauves", "robe", "femme", "adolescent"],
    personality: ["calme", "serieux", "determine", "loyal", "tenace", "colerique", "protectrice"],
    powers: ["magie", "combat_rapproche", "deduction"],
    themes: ["orphelin", "eleve", "amitie", "perte_proches", "voyage", "ascension", "heritage"]
  },

  // ─── Dandadan ───────────────────────────────────────────────────────────
  {
    id: "momo_dandadan", name: "Momo Ayase", anime: "Dandadan",
    image: "/assets/img/undercover/momo_dandadan.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_noirs", "uniforme_scolaire", "femme", "adolescent"],
    personality: ["chaleureux", "impulsif", "colerique", "loyal", "protectrice", "courageux", "optimiste"],
    powers: ["telekinesie", "combat_rapproche", "super_force", "heritage_pouvoir"],
    themes: ["amitie", "amour_impossible", "heritage", "eveil_de_pouvoir", "occulte", "esprits", "eleve", "survivant"]
  },
  {
    id: "okarun", name: "Ken Takakura (Okarun)", anime: "Dandadan",
    image: "/assets/img/undercover/okarun.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "lunettes", "uniforme_scolaire", "adolescent", "petite"],
    personality: ["timide", "naif", "intelligent", "loyal", "determine", "paranoiaque"],
    powers: ["super_vitesse", "transformation", "combat_rapproche", "possession"],
    themes: ["occulte", "amitie", "eveil_de_pouvoir", "amour_impossible", "eleve", "double_identite", "survivant"]
  },

  // ─── Jigokuraku (Hell's Paradise) ──────────────────────────────────────
  {
    id: "gabimaru", name: "Gabimaru", anime: "Jigokuraku",
    image: "/assets/img/undercover/gabimaru.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_noirs", "cicatrices", "tenue_ninja", "adulte", "muscle", "regard_froid", "regard_intense"],
    personality: ["froid", "calme", "solitaire", "determine", "serieux", "protecteur", "tenace", "cynique"],
    powers: ["ninja", "feu", "epeiste", "super_force", "super_vitesse", "regeneration", "combat_rapproche"],
    themes: ["assassin", "redemption", "amour_epouse", "condamne", "survivant", "ile_mysterieuse", "quete", "immortalite"]
  },
  {
    id: "sagiri", name: "Sagiri Yamada Asaemon", anime: "Jigokuraku",
    image: "/assets/img/undercover/sagiri.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_gris", "kimono", "femme", "adulte", "epee", "regard_froid"],
    personality: ["calme", "serieux", "noble", "determine", "loyal", "solitaire", "protectrice"],
    powers: ["epeiste", "super_vitesse", "combat_rapproche"],
    themes: ["devoir", "condamne", "famille_difficile", "ascension", "bourreau", "quete", "ile_mysterieuse", "rivalite"]
  },

  // ─── Steins;Gate ────────────────────────────────────────────────────────
  {
    id: "okabe", name: "Rintarou Okabe", anime: "Steins;Gate",
    image: "/assets/img/undercover/okabe.jpg",
    visual: ["cheveux_noirs", "cheveux_mi_longs", "yeux_noirs", "manteau", "adulte", "regard_intense"],
    personality: ["excentrique", "charismatique", "humoristique", "paranoiaque", "intelligent", "determine", "chaleureux", "creatif"],
    powers: ["deduction", "voyage_temps"],
    themes: ["boucle_temporelle", "sacrifice", "amitie", "amour_impossible", "perte_proches", "destin", "secret_obscur", "double_identite", "scientifique"]
  },
  {
    id: "kurisu", name: "Kurisu Makise", anime: "Steins;Gate",
    image: "/assets/img/undercover/kurisu.jpg",
    visual: ["cheveux_rouges", "cheveux_longs", "yeux_mauves", "femme", "adulte"],
    personality: ["intelligent", "tsundere", "serieux", "cynique", "determine", "chaleureux", "humble", "solitaire"],
    powers: ["deduction", "voyage_temps"],
    themes: ["genie", "boucle_temporelle", "amour_impossible", "famille_difficile", "sacrifice", "destin", "scientifique"]
  },

  // ─── The Promised Neverland ────────────────────────────────────────────
  {
    id: "emma", name: "Emma", anime: "The Promised Neverland",
    image: "/assets/img/undercover/emma.jpg",
    visual: ["cheveux_oranges", "cheveux_courts", "yeux_verts", "femme", "enfant", "uniforme_scolaire", "numero_tatoue"],
    personality: ["optimiste", "chaleureux", "loyal", "determine", "courageux", "protectrice", "naive", "creatif"],
    powers: ["deduction", "endurance"],
    themes: ["orphelin", "fuite", "protection_proches", "amitie", "ferme_humaine", "leader", "survivant", "secret_obscur", "eleve"]
  },
  {
    id: "norman", name: "Norman", anime: "The Promised Neverland",
    image: "/assets/img/undercover/norman.jpg",
    visual: ["cheveux_blancs", "cheveux_courts", "yeux_bleus", "uniforme_scolaire", "enfant", "numero_tatoue"],
    personality: ["calme", "intelligent", "strategique", "manipulateur", "noble", "determine", "serieux", "solitaire"],
    powers: ["deduction", "strategie"],
    themes: ["orphelin", "genie", "sacrifice", "amitie", "leader", "double_identite", "ferme_humaine", "secret_obscur", "survivant", "condamne"]
  },
  {
    id: "ray", name: "Ray", anime: "The Promised Neverland",
    image: "/assets/img/undercover/ray.jpg",
    visual: ["cheveux_noirs", "cheveux_mi_longs", "yeux_noirs", "uniforme_scolaire", "enfant", "numero_tatoue", "regard_froid"],
    personality: ["cynique", "intelligent", "solitaire", "serieux", "sarcastique", "loyal", "determine"],
    powers: ["deduction", "strategie"],
    themes: ["orphelin", "genie", "sacrifice", "amitie", "double_identite", "ferme_humaine", "secret_obscur", "survivant", "trahison", "perte_proches"]
  },

  // ─── Oshi no Ko ────────────────────────────────────────────────────────
  {
    id: "aqua", name: "Aqua Hoshino", anime: "Oshi no Ko",
    image: "/assets/img/undercover/aqua.jpg",
    visual: ["cheveux_bleus", "cheveux_mi_longs", "yeux_bleus", "etoile_oeil", "regard_froid", "regard_intense", "adolescent"],
    personality: ["froid", "manipulateur", "intelligent", "cynique", "determine", "solitaire", "serieux", "strategique"],
    powers: ["deduction", "reincarnation", "acteur"],
    themes: ["vengeance", "double_identite", "reincarnation", "perte_proches", "famille_difficile", "milieu_showbiz", "quete", "amour_impossible", "secret_obscur"]
  },
  {
    id: "ruby", name: "Ruby Hoshino", anime: "Oshi no Ko",
    image: "/assets/img/undercover/ruby.jpg",
    visual: ["cheveux_roses", "cheveux_longs", "yeux_roses", "etoile_oeil", "femme", "adolescent"],
    personality: ["optimiste", "chaleureux", "naive", "determine", "loyal", "creatif", "imprevisible"],
    powers: ["reincarnation", "acteur"],
    themes: ["reincarnation", "milieu_showbiz", "famille_difficile", "perte_proches", "frere_ennemi", "double_identite", "vengeance", "ascension", "quete"]
  },

  // ─── JJK (suppléments) ─────────────────────────────────────────────────
  {
    id: "nanami", name: "Kento Nanami", anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/nanami.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_noirs", "lunettes", "costume_cravate", "adulte", "grand", "epee", "regard_froid"],
    personality: ["calme", "serieux", "cynique", "noble", "loyal", "strategique", "solitaire", "intelligent"],
    powers: ["energie_maudite", "epeiste", "super_force", "combat_rapproche", "heritage_pouvoir"],
    themes: ["devoir", "mentor", "sacrifice", "salaryman", "solitude", "protection_proches", "perte_proches", "cynisme_systeme"]
  },
  {
    id: "toji", name: "Toji Fushiguro", anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/toji.jpg",
    visual: ["cheveux_noirs", "cheveux_courts", "yeux_verts", "cicatrice_bouche", "muscle", "adulte", "torse_nu", "regard_froid", "regard_intense"],
    personality: ["froid", "arrogant", "solitaire", "sadique", "determine", "cynique", "strategique", "imprevisible"],
    powers: ["super_force", "super_vitesse", "sens_accru", "epeiste", "combat_rapproche", "absence_pouvoir"],
    themes: ["assassin", "famille_difficile", "rejet_enfance", "solitude", "vengeance", "mercenaire", "pere_absent", "rebelle"]
  },
  {
    id: "maki", name: "Maki Zenin", anime: "Jujutsu Kaisen",
    image: "/assets/img/undercover/maki.jpg",
    visual: ["cheveux_noirs", "queue_de_cheval", "yeux_verts", "lunettes", "uniforme_scolaire", "femme", "adolescent", "cicatrices", "epee"],
    personality: ["determine", "colerique", "tenace", "solitaire", "loyal", "serieux", "protectrice"],
    powers: ["epeiste", "super_force", "super_vitesse", "combat_rapproche", "absence_pouvoir"],
    themes: ["famille_difficile", "rejet_enfance", "rebelle", "rivalite", "vengeance", "ascension", "eleve", "soeur_jumelle", "inferieur_a_genie"]
  },

  // ─── Demon Slayer (suppléments) ────────────────────────────────────────
  {
    id: "rengoku", name: "Kyojuro Rengoku", anime: "Kimetsu no Yaiba",
    image: "/assets/img/undercover/rengoku.jpg",
    visual: ["cheveux_blonds", "cheveux_longs", "yeux_dores", "uniforme_militaire", "manteau_blanc", "epee", "adulte", "grand", "muscle", "regard_intense"],
    personality: ["chaleureux", "charismatique", "noble", "optimiste", "loyal", "determine", "serieux", "protecteur"],
    powers: ["epeiste", "feu", "super_force", "super_vitesse", "combat_rapproche", "heritage_pouvoir"],
    themes: ["devoir", "sacrifice", "mentor", "heritage", "famille_difficile", "pilier", "ascension", "rever_de_leader"]
  },
  {
    id: "akaza", name: "Akaza", anime: "Kimetsu no Yaiba",
    image: "/assets/img/undercover/akaza.jpg",
    visual: ["cheveux_roses", "cheveux_courts", "yeux_dores", "tatouages_corps", "torse_nu", "muscle", "adulte", "regard_intense"],
    personality: ["arrogant", "determine", "sadique", "serieux", "tenace", "solitaire", "noble"],
    powers: ["combat_rapproche", "super_force", "super_vitesse", "regeneration", "sens_accru", "immortalite"],
    themes: ["demon", "perte_proches", "amour_epouse", "devenir_le_plus_fort", "chute", "immortalite", "passe_tragique", "rivalite"]
  },
  {
    id: "muichiro", name: "Muichiro Tokito", anime: "Kimetsu no Yaiba",
    image: "/assets/img/undercover/muichiro.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_verts", "uniforme_militaire", "manteau_blanc", "epee", "adolescent", "petite"],
    personality: ["distante", "calme", "serieux", "determine", "solitaire", "naive", "humble"],
    powers: ["epeiste", "vent", "super_vitesse", "combat_rapproche", "heritage_pouvoir"],
    themes: ["devoir", "perte_proches", "frere_ennemi", "amnesie", "pilier", "genie", "heritage", "ascension", "solitude"]
  },

  // ─── One Piece (suppléments) ───────────────────────────────────────────
  {
    id: "robin", name: "Nico Robin", anime: "One Piece",
    image: "/assets/img/undercover/robin.jpg",
    visual: ["cheveux_noirs", "cheveux_longs", "yeux_bleus", "femme", "adulte", "manteau"],
    personality: ["calme", "intelligent", "solitaire", "noble", "loyal", "cynique", "serieux", "chaleureux"],
    powers: ["fruit_du_demon", "combat_rapproche", "deduction"],
    themes: ["orphelin", "rejet_enfance", "survivant", "passe_tragique", "quete", "recherche_verite", "pirate", "amitie", "equipe_de_pairs", "heritage"]
  },
  {
    id: "sabo", name: "Sabo", anime: "One Piece",
    image: "/assets/img/undercover/sabo.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "yeux_noirs", "chapeau", "manteau", "cicatrice_oeil", "adulte", "noble"],
    personality: ["charismatique", "chaleureux", "noble", "determine", "loyal", "optimiste", "protecteur", "serieux"],
    powers: ["fruit_du_demon", "feu", "combat_rapproche", "super_force"],
    themes: ["amnesie", "heritage", "rebelle", "famille_difficile", "frere_ennemi", "revolutionnaire", "survivant", "perte_proches", "leader"]
  },
  {
    id: "doflamingo", name: "Donquixote Doflamingo", anime: "One Piece",
    image: "/assets/img/undercover/doflamingo.jpg",
    visual: ["cheveux_blonds", "cheveux_courts", "lunettes", "manteau_rose", "adulte", "grand", "regard_intense", "regard_froid"],
    personality: ["sadique", "arrogant", "charismatique", "manipulateur", "strategique", "psychopathe", "cynique", "intelligent", "imprevisible"],
    powers: ["fruit_du_demon", "fils_cordes", "combat_rapproche", "super_vitesse", "haki"],
    themes: ["tyran", "famille_difficile", "noblesse_dechue", "pouvoir_absolu", "pirate", "chute", "passe_tragique", "manipulateur_systeme", "rejet_enfance"]
  }
];

export const CHARACTERS_BY_ID = Object.fromEntries(
  CHARACTERS.map(c => [c.id, c])
);
