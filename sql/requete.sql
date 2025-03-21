-- Création de la base de données "fruit_de_mer"
CREATE DATABASE fruit_de_mer;
-- Sélection de la base de données à utiliser
USE fruit_de_mer;

-- Table "categories" : pour stocker les catégories de produits (Pwedza, Trondro, kamara, Crabe, etc.)
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque catégorie
    nom VARCHAR(255) NOT NULL, -- Nom de la catégorie
    description TEXT -- Description de la catégorie
);

-- Table "produits" : pour stocker les produits (fruits de mer)
CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque produit
    nom VARCHAR(255) NOT NULL, -- Nom du produit
    prix DECIMAL(10, 2) NOT NULL, -- Prix du produit
    description TEXT, -- Description détaillée du produit
    image VARCHAR(255), -- Lien de l'image du produit (peut être le chemin vers l'image)
    categorie_id INT, -- Identifiant de la catégorie à laquelle le produit appartient
    FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE SET NULL -- Lien avec la table categories
);

-- Table "clients" : pour stocker les informations des clients
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque client
    prenom VARCHAR(255) NOT NULL, -- Prénom du client
    nom VARCHAR(255) NOT NULL, -- Nom du client
    email VARCHAR(255) UNIQUE NOT NULL, -- Email unique du client
    telephone VARCHAR(20), -- Numéro de téléphone du client
    adresse TEXT NOT NULL, -- Adresse du client
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Date de création du client (par défaut, la date actuelle)
);

-- Table "commandes" : pour stocker les commandes passées par les clients
CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque commande
    client_id INT, -- Identifiant du client qui a passé la commande
    total DECIMAL(10, 2) NOT NULL, -- Montant total de la commande
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de la commande
    statut ENUM('en attente', 'expédiée', 'livrée') DEFAULT 'en attente', -- Statut de la commande (par défaut, "en attente")
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE -- Lien avec la table clients
);

-- Table "details_commande" : pour stocker les produits associés à chaque commande
CREATE TABLE details_commande (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque ligne de détail
    commande_id INT, -- Identifiant de la commande
    produit_id INT, -- Identifiant du produit dans la commande
    quantite INT NOT NULL, -- Quantité du produit dans la commande
    prix DECIMAL(10, 2) NOT NULL, -- Prix du produit au moment de la commande
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE, -- Lien avec la table commandes
    FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE, -- Lien avec la table produits
);

-- Table "paiements" : pour stocker les informations des paiements des commandes
CREATE TABLE paiements (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque paiement
    commande_id INT, -- Identifiant de la commande payée
    methode_paiement ENUM('carte_bancaire', 'paypal', 'virement_bancaire') NOT NULL, -- Méthode de paiement
    montant DECIMAL(10, 2) NOT NULL, -- Montant payé
    date_paiement TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date du paiement
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE -- Lien avec la table commandes
);

-- Table "avis" : pour permettre aux clients de laisser des avis sur les produits
CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque avis
    produit_id INT, -- Identifiant du produit évalué
    client_id INT, -- Identifiant du client qui a laissé l'avis
    note INT NOT NULL CHECK (note BETWEEN 1 AND 5), -- Note donnée par le client (de 1 à 5)
    commentaire TEXT, -- Commentaire du client
    date_avis TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de l'avis
    FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE, -- Lien avec la table produits
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE -- Lien avec la table clients
);

-- Insertion de catégories dans la table "categories"
INSERT INTO categories (nom, description) VALUES
('Pwedza', 'Tous les types de pwedza disponibles'),
('Crevettes, homards, langoustines, etc.'),
('Calamars',)

-- Insertion de produits dans la table "produits"
INSERT INTO produits (nom, prix, description, image, categorie_id) VALUES
('Pwedza', 15.00, 'Un fruit de mer délicieux, frais du jour', '/images/pwedza.jpg', 2),
('Trondro', 12.00, 'Poisson frais', '/images/trondro.jpg', 1),
('Crabe', 25.00, 'Crabe royal, un délice', '/images/crabe.jpg', 2);

-- Insertion d'un client dans la table "clients"
INSERT INTO clients (prenom, nom, email, telephone, adresse) VALUES
('Ali', 'Moussa', 'ali.moussa@gmail.com', '0123456789', '10 rue de la mer, Chirongui');

-- Insertion d'une commande dans la table "commandes"
INSERT INTO commandes (client_id, total, statut) VALUES
(1, 50.00, 'en attente');

-- Insertion des détails de la commande (produits achetés) dans la table "details_commande"
INSERT INTO details_commande (commande_id, produit_id, quantite, prix) VALUES
(1, 1, 2, 15.00),  -- 2 Pwedza
(1, 2, 1, 12.00);  -- 1 Trondro

-- Insertion d'un paiement dans la table "paiements"
INSERT INTO paiements (commande_id, methode_paiement, montant) VALUES
(1, 'carte_bancaire', 50.00);
