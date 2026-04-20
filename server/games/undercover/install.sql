-- Undercover : insertion dans la BDD
-- À exécuter une seule fois (en local puis en prod) via phpMyAdmin ou client MySQL.
--
-- PRÉREQUIS : avoir lancé `npm run server:dev` au moins une fois pour que
-- Sequelize crée les tables ncs_gamemodels et ncs_gamemodes (via db.sync()).

INSERT INTO ncs_gamemodels (name, slug, description, image, playersMin, playersLimit, createdAt, updatedAt)
VALUES (
    'Undercover',
    'undercover',
    'Jeu de déduction : identifiez les imposteurs parmi les personnages d''anime. Tous les joueurs ont un personnage similaire sauf 1 à 3 imposteurs. Chacun donne un indice — démasquez qui n''a pas le bon perso.',
    NULL,
    3,
    10,
    NOW(),
    NOW()
);

INSERT INTO ncs_gamemodes (gameSlug, value, label, description, createdAt, updatedAt) VALUES
    ('undercover', 'easy',     'Facile',    'Paires distinctes, erreurs visibles rapidement', NOW(), NOW()),
    ('undercover', 'medium',   'Moyen',     'Paires similaires, discussion utile',            NOW(), NOW()),
    ('undercover', 'hard',     'Difficile', 'Paires très proches, micro-indices décisifs',    NOW(), NOW()),
    ('undercover', 'hardcore', 'Hardcore',  'Paires quasi-jumelles, ultra-serré',             NOW(), NOW());
