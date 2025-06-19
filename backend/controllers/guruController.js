const { Guru } = require("../models");
const { Op } = require("sequelize");

exports.getAll = async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || "";

  try {
    const { count, rows } = await Guru.findAndCountAll({
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
    const item = await Guru.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Guru not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

const path = require("path");

exports.create = async (req, res, next) => {
  try {
    const { nama, nip, status, mapel, tugasTambahan } = req.body;

    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await Guru.create({
      nama,
      nip,
      status,
      mapel,
      tugasTambahan,
      photo,
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Guru.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Guru not found" });
    const updatedItem = await Guru.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Guru.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Guru not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
