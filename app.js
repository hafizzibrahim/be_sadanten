const express = require('express');
const authRoutes = require('./routes/authRoutes');
const ensiklopediaRoutes = require('./routes/ensiklopediaRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ensiklopedia', ensiklopediaRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Server jalan' });
});

module.exports = app;