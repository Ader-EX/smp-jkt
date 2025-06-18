const { Siswa, Kelas } = require("../models");

exports.getAll = async (req, res, next) => {
  try {
    const items = await Siswa.findAll({ include: Kelas });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Siswa.findByPk(req.params.id, { include: Kelas });
    if (!item) return res.status(404).json({ message: "Siswa not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newItem = await Siswa.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Siswa.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Siswa not found" });
    const updatedItem = await Siswa.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Siswa.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Siswa not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
