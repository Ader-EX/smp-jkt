const { Staff } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const items = await Staff.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Staff.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Staff not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newItem = await Staff.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Staff.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Staff not found" });
    const updatedItem = await Staff.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Staff.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Staff not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
