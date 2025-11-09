const Ensiklopedia = require('../models/ensiklopedia');

class EnsiklopediaRepository {
  async findAll() {
    return await Ensiklopedia.findAll();
  }

  async findById(id) {
    return await Ensiklopedia.findByPk(id);
  }

  async create(data) {
    return await Ensiklopedia.create(data);
  }

  async update(id, data) {
    const [updated] = await Ensiklopedia.update(data, {
      where: { id }
    });
    if (!updated) return null;
    return await this.findById(id);
  }

  async delete(id) {
    const deleted = await Ensiklopedia.destroy({ where: { id } });
    return deleted > 0;
  }
}

module.exports = new EnsiklopediaRepository();