require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors');

// app.use(express.json());

const mongoose = require('mongoose');

const path = require('path');
const bookRoutes = require('./routes/routerBook');
const userRoutes = require('./routes/routerUser');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// app.use(express.json()); // extraire le corps JSON pour gérer la requête POST

/** Gestion erreurs de Cors */
app.use(cors());

app.use(express.json());

/** Routers */
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
