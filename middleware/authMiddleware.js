const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository.js');

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'Tidak ada token, akses ditolak' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepository.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ msg: 'Token tidak valid' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token tidak valid' });
  }
};

module.exports = auth;