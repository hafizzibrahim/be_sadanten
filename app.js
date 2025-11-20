const express = require('express');
const cors = require('cors');
const path = require('path'); // Tambahkan ini
const authRoutes = require('./routes/authRoutes');
const ensiklopediaRoutes = require('./routes/ensiklopediaRoutes');

const app = express();

app.use(cors({
  origin: '*', // Menerima semua origin untuk pengujian
  credentials: false 
}));

app.use(express.json());

// Sajikan file statis dari folder 'uploads'
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/ensiklopedia', ensiklopediaRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Server jalan' });
});

module.exports = app;