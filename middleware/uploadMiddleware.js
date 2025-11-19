const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Tentukan direktori penyimpanan
const photosDir = path.join(__dirname, '..', 'uploads/photos');
const audiosDir = path.join(__dirname, '..', 'uploads/audios');

// Buat direktori jika belum ada
if (!fs.existsSync(photosDir)) fs.mkdirSync(photosDir, { recursive: true });
if (!fs.existsSync(audiosDir)) fs.mkdirSync(audiosDir, { recursive: true });


// Konfigurasi penyimpanan Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Pilih folder berdasarkan fieldname
    if (file.fieldname === 'photo') {
      cb(null, photosDir);
    } else if (file.fieldname === 'audio') {
      cb(null, audiosDir);
    } else {
      cb(new Error('Fieldname tidak valid'), null);
    }
  },
  filename: function (req, file, cb) {
    // Gunakan nama asli file + timestamp untuk menghindari konflik nama
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Filter untuk hanya menerima file gambar dan audio
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error('Hanya file gambar atau audio yang diizinkan!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10MB limit
  }
});

// Middleware untuk menangani field 'photo' dan 'audio'
const uploadFields = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'audio', maxCount: 1 }
]);

module.exports = uploadFields;
