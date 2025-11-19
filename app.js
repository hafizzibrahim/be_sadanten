const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const ensiklopediaRoutes = require('./routes/ensiklopediaRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:4001', // Ganti dengan URL FE kamu
  credentials: true // Jika pakai cookie/token
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ensiklopedia', ensiklopediaRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Server jalan' });
});

module.exports = app;