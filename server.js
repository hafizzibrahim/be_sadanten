require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 4000;

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi ke database berhasil.');
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Gagal koneksi ke database:', err);
    process.exit(1);
  });