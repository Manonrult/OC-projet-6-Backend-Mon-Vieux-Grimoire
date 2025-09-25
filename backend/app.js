require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const bookRoutes = require('./routes/routerBook');
const userRoutes = require('./routes/routerUser');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//app.use(express.json()); // extraire le corps JSON pour gérer la requête POST

/** Gestion erreurs de Cors */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // accéder API depuis n'importe quelle origine
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
/** Routers */
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
