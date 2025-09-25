/** Création du modèle de données */
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator); // pour ne pas avoir pls utilisateurs avec le même email
module.exports = mongoose.model('User', userSchema);
