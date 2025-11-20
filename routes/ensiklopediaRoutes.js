const express = require('express');
const auth = require('../middleware/authMiddleware');
const uploadFields = require('../middleware/uploadMiddleware'); // Ganti nama import
const ensiklopediaController = require('../controllers/ensiklopediaController');

const router = express.Router();

// Public
router.get('/', (req, res) => {
  const { name } = req.query;

  if (name) {
    // Panggil fungsi search jika ada query name
    return ensiklopediaController.search(req, res);
  }

  // Jika tidak ada name, panggil getAll
  return ensiklopediaController.getAll(req, res);
});
router.get('/search', ensiklopediaController.search);
router.get('/:id', ensiklopediaController.getById);

// Protected
router.post('/', auth, uploadFields, ensiklopediaController.create);
router.put('/:id', auth, uploadFields, ensiklopediaController.update);
router.delete('/:id', auth, ensiklopediaController.delete);

module.exports = router;