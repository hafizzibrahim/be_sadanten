const express = require('express');
const auth = require('../middleware/authMiddleware');
const ensiklopediaController = require('../controllers/ensiklopediaController');

const router = express.Router();

// Public
router.get('/', ensiklopediaController.getAll);
router.get('/:id', ensiklopediaController.getById);

// Protected
router.post('/', auth, ensiklopediaController.create);
router.put('/:id', auth, ensiklopediaController.update);
router.delete('/:id', auth, ensiklopediaController.delete);

module.exports = router;