# 📚 Mon Vieux Grimoire 🧙‍♂️

Ce projet a été réalisé dans le cadre de la formation Développeur web d'OpenClassrooms. Il consiste à développer le **backend (API REST)** pour une plateforme de notation et de partage de livres. Il inclut des fonctionnalités essentielles telles que l'**authentification utilisateur**, la **gestion des livres** (CRUD), et le **système de notation** des ouvrages.

---

### 🌟 Objectifs du Projet

L'objectif principal était de mettre en pratique les compétences en **développement backend sécurisé et performant** :

- Mise en place d'une **API REST** robuste avec **Node.js** et **Express**.
- Utilisation de **MongoDB** comme base de données.
- Implémentation d'un système d'**authentification utilisateur** (JWT).
- Gestion sécurisée des **uploads d'images** des livres (avec des outils comme **Multer** et **Sharp**).

---

### 🛠️ Technologies Utilisées

| Catégorie            | Technologie              | Rôle                                               |
| :------------------- | :----------------------- | :------------------------------------------------- |
| **Backend**          | **Node.js**              | Environnement d'exécution JavaScript côté serveur. |
| **Framework**        | **Express**              | Framework web pour construire l'API.               |
| **Base de données**  | **MongoDB**              | Base de données NoSQL.                             |
| **ORM**              | **Mongoose**             | Modélisation des données pour MongoDB.             |
| **Authentification** | **JSON Web Token (JWT)** | Gestion sécurisée des sessions utilisateur.        |
| **Images**           | **Multer & Sharp**       | Gestion de l'upload et optimisation des images.    |

---

### 🚀 Installation et Démarrage

Suivez ces étapes pour démarrer le projet sur votre machine locale.

#### Prérequis

Vous devez avoir installé :

- [Node.js](https://nodejs.org/) (version recommandée : 16.x ou supérieure)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- Une instance de **MongoDB** (locale ou en ligne via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

#### Étapes

1.  **Cloner le dépôt :**

    ```bash
    git clone [https://github.com/Manonrult/OC-projet-6-Backend-Mon-Vieux-Grimoire](https://github.com/Manonrult/OC-projet-6-Backend-Mon-Vieux-Grimoire)
    cd OC-projet-6-Backend-Mon-Vieux-Grimoire
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    ```

3.  **Configuration des variables d'environnement :**
    Créez un fichier **`.env`** à la racine du projet et définissez les variables essentielles (remplacez les valeurs par les vôtres). NE COMMITEZ JAMAIS ce fichier sur GitHub (assurez-vous que .env est listé dans votre fichier .gitignore). :

    ```
    # Chaîne de connexion à votre base de données MongoDB
    MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority"

    # Clé secrète pour le JWT (à remplacer par une chaîne longue et aléatoire)
    JWT_SECRET="VOTRE_SUPER_CLE_SECRETE"

    # Port de l'application
    PORT=4000
    ```

4.  **Lancer l'application :**
    ```bash
    npm start
    # ou pour le développement (avec nodemon) :
    # npm run dev
    ```

L'API devrait maintenant être accessible à l'adresse `http://localhost:4000/`.

---

### 📑 Points Clés de l'Implémentation

- **Sécurité :** Mise en œuvre de middlewares pour l'assainissement (sanitization) des données, la limitation du taux de requêtes (rate limiting) et l'application des en-têtes HTTP sécurisés.
- **Gestion des Images :** Les images sont compressées et redimensionnées via **Sharp** après l'upload par **Multer** avant d'être stockées.
- **Architecture :** Le code est structuré en couches (routes, controllers, models) pour une meilleure maintenabilité (architecture MVC simplifiée).

---
