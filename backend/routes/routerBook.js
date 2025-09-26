/** Création de router = uniquement la logique de routing */
const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

//const multer = require('../middleware/multer-config');

const { upload, optimizeImage } = require('../middleware/multer-config');

const bookCtrl = require('../controllers/routerBook');

router.post('/', auth, upload, optimizeImage, bookCtrl.createBook);
router.put('/:id', auth, upload, optimizeImage, auth, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBooks);

module.exports = router;
