const { Staff } = require("../models");
const { Op } = require("sequelize");

exports.getAll = async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || "";

  try {
    const { count, rows } = await Staff.findAndCountAll({
      where: {
        nama: {
          [Op.like]: `%${search}%`,
        },
      },
      order: [["id", "ASC"]],
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);
    res.json({
      data: rows,
      pagination: {
        totalItems: count,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    });
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
    const { nama, nip, status, jabatan } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await Staff.create({ nama, nip, status, jabatan, photo });
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
