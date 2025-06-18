const { Kurikulum } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const items = await Kurikulum.findAll({ order: [["createdAt", "DESC"]] });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Kurikulum.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Kurikulum not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newItem = await Kurikulum.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Kurikulum.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated)
      return res.status(404).json({ message: "Kurikulum not found" });
    const updatedItem = await Kurikulum.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Kurikulum.destroy({ where: { id: req.params.id } });
    if (!deleted)
      return res.status(404).json({ message: "Kurikulum not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
