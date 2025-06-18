const { Berita } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const items = await Berita.findAll({ order: [["createdAt", "DESC"]] });
    res.json(items);
  } catch (err) {
    next(err);
  }
};
exports.getNewestBerita = async (req, res, next) => {
  // parse limit, default to 10 if not provided or invalid
  const limit = Number.parseInt(req.query.limit, 10) || 10;

  try {
    const list = await Berita.findAll({
      order: [["createdAt", "DESC"]],
      limit,
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Berita.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Berita not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newItem = await Berita.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Berita.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Berita not found" });
    const updatedItem = await Berita.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Berita.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Berita not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
