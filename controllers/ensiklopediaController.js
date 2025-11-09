const ensiklopediaRepository = require('../repositories/ensiklopediaRepository');
const ApiResponse = require('../utils/response');

class EnsiklopediaController {
  async getAll(req, res) {
    try {
      const ensiklopedias = await ensiklopediaRepository.findAll();
      ApiResponse.success(res, ensiklopedias);
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async getById(req, res) {
    try {
      const ensiklopedia = await ensiklopediaRepository.findById(req.params.id);
      if (!ensiklopedia) return ApiResponse.notFound(res, 'Data tidak ditemukan');
      ApiResponse.success(res, ensiklopedia);
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async create(req, res) {
    try {
      const ensiklopedia = await ensiklopediaRepository.create(req.body);
      ApiResponse.success(res, ensiklopedia, 'Data berhasil dibuat', 201);
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async update(req, res) {
    try {
      const ensiklopedia = await ensiklopediaRepository.update(req.params.id, req.body);
      if (!ensiklopedia) return ApiResponse.notFound(res, 'Data tidak ditemukan');
      ApiResponse.success(res, ensiklopedia, 'Data berhasil diupdate');
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async delete(req, res) {
    try {
      const deleted = await ensiklopediaRepository.delete(req.params.id);
      if (!deleted) return ApiResponse.notFound(res, 'Data tidak ditemukan');
      ApiResponse.success(res, null, 'Data berhasil dihapus');
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }
}

module.exports = new EnsiklopediaController();