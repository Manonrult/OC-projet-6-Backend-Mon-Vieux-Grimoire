const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const Book = require('./models/Book');

mongoose
  .connect(
    'mongodb+srv://m-rlt:IGFennwlzVHsKrfr@cluster0.dqyoi2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json()); // extraire le corps JSON pour gérer la requête POST

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
app.post('/api/books', (req, res, next) => {
  delete req.body.userId;
  const book = new Book({
    ...req.body,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: 'Livre enregistré!' }))
    .catch((error) => res.status(400).json({ error }));
});

app.put('/api/books/:id', (req, res, next) => {
  Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(201).json({ message: 'Livre modifié!' }))
    .catch((error) => res.status(400).json({ error }));
});

app.delete('/api/books/:id', (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(201).json({ message: 'Livre supprimé!' }))
    .catch((error) => res.status(400).json({ error }));
});
app.get('/api/books/:id', (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ error }));
});
app.get('/api/books', (req, res, next) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = app;
