/** Middleware qui vérifie le connexion de l'utilisateur */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // split= diviser la chaîne de caract. en tableau pour récupérer token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // décodre Token
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
