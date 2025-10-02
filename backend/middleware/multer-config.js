const multer = require('multer');

const sharp = require('sharp');

// Configuration du Multer pour utiliser Memory Storage
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

// Middleware d'optimisation avec Sharp
// eslint-disable-next-line consistent-return
const optimizeImage = (req, res, next) => {
  if (!req.file) {
    // return res.status(500).json({ message: "Pas d'image" });
    return next();
  }

  // Nom du fichier et chemin de destination
  const name = req.file.originalname.split(' ').join('_').split('.')[0]; // [0] pour premier élément du tableau
  const filename = `${name}_${Date.now()}.webp`;
  const filepath = `images/${filename}`;

  // Utilisation de Sharp pour la conversion
  sharp(req.file.buffer)
    .webp({ quality: 80 }) // convertit en Webp qualité de 80%
    .toFile(filepath) // enregistrement sur le système de fichier
    .then(() => {
      // MAJ de l'objet req.file pour les middlewares suivants
      req.file.filename = filename;
      req.file.path = filepath;
      next();
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = { upload, optimizeImage };
