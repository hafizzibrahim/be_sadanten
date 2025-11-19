const ensiklopediaRepository = require('../repositories/ensiklopediaRepository');
const ApiResponse = require('../utils/response');

class EnsiklopediaController {
  async getAll(req, res) {
    try {
      const ensiklopedias = await ensiklopediaRepository.findAll();
      ApiResponse.success(res, ensiklopedias, 'Data Ensiklopedia berhasil diambil');
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async getById(req, res) {
    try {
      const ensiklopedia = await ensiklopediaRepository.findById(req.params.id);
      if (!ensiklopedia) return ApiResponse.notFound(res, 'Data tidak ditemukan');
      ApiResponse.success(res, ensiklopedia, 'Data Ensiklopedia per id berhasil diambil');
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async create(req, res) {
    try {
      const { name, description, category, location, status } = req.body;
      const newData = { name, description, category, location, status };

      if (req.files) {
        if (req.files.photo) {
          newData.photo = `/uploads/photos/${req.files.photo[0].filename}`;
        }
        if (req.files.audio) {
          newData.audio = `/uploads/audios/${req.files.audio[0].filename}`;
        }
      }
      
      const ensiklopedia = await ensiklopediaRepository.create(newData);
      ApiResponse.success(res, ensiklopedia, 'Data berhasil dibuat', 201);
    } catch (err) {
      ApiResponse.error(res, err.message);
    }
  }

  async update(req, res) {
    try {
      const { name, description, category, location, status } = req.body;
      const updateData = { name, description, category, location, status };

      if (req.files) {
        if (req.files.photo) {
          updateData.photo = `/uploads/photos/${req.files.photo[0].filename}`;
        }
        if (req.files.audio) {
          updateData.audio = `/uploads/audios/${req.files.audio[0].filename}`;
        }
      }

      const ensiklopedia = await ensiklopediaRepository.update(req.params.id, updateData);
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