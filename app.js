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

// ❌ HAPUS BARIS INI
// app.use(express.json());

// Sajikan file statis dari folder 'uploads'
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// Route dengan multer (TANPA express.json)
app.use('/api/ensiklopedia', ensiklopediaRoutes);

// Route auth dengan express.json khusus
app.use('/api/auth', express.json(), authRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Server jalan' });
});

module.exports = app;