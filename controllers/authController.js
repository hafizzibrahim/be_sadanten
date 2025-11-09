const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository.js');
const ApiResponse = require('../utils/response.js');

class AuthController {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      const existingUser = await userRepository.findByEmail(email);
      if (existingUser) {
        return ApiResponse.error(res, 'User sudah terdaftar', 400);
      }

      const user = await userRepository.create({ username, email, password });

      const payload = { userId: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

      const data = {
        token,
        user: { id: user.id, username: user.username, email: user.email }
      };
      
      ApiResponse.success(res, data, 'User berhasil dibuat', 201);
    } catch (err) {
      ApiResponse.error(res, 'Server error');
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await userRepository.findByEmail(email);
      if (!user) {
        return ApiResponse.error(res, 'Email atau password salah', 400);
      }

      const isMatch = await userRepository.comparePassword(password, user.password);
      if (!isMatch) {
        return ApiResponse.error(res, 'Email atau password salah', 400);
      }

      const payload = { userId: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

      const data = {
        token,
        user: { id: user.id, username: user.username, email: user.email }
      };

      ApiResponse.success(res, data, 'Login berhasil');
    } catch (err) {
      ApiResponse.error(res, 'Server error');
    }
  }
}

module.exports = new AuthController();