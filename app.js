const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const ensiklopediaRoutes = require('./routes/ensiklopediaRoutes');

const app = express();

app.use(cors({
  origin: '*',
  credentials: false 
}));

// Conditional JSON parser: SKIP untuk route ensiklopedia
app.use((req, res, next) => {
  // Skip JSON parser untuk route ensiklopedia (karena pakai multer)
  if (req.path.startsWith('/api/ensiklopedia') && 
      (req.method === 'POST' || req.method === 'PUT')) {
    return next();
  }
  // Pakai JSON parser untuk route lain
  express.json()(req, res, next);
});

// Sajikan file statis
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/ensiklopedia', ensiklopediaRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Server jalan' });
});

module.exports = app;