const { Berita, Pengumuman } = require("../models");
const { Op } = require("sequelize");

exports.getAll = async (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 6;
  const page = parseInt(req.query.page, 10) || 1;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Berita.findAndCountAll({
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    res.json({
      data: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
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

exports.getBeritaPengumumanByName = async (req, res, next) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res
        .status(400)
        .json({ message: "Keyword query parameter is required" });
    }

    const { count: countBerita, rows: rowsBerita } =
      await Berita.findAndCountAll({
        where: {
          nama: {
            [Op.like]: `%${keyword}%`,
          },
        },
      });

    const { count: countPengumuman, rows: rowsPengumuman } =
      await Pengumuman.findAndCountAll({
        where: {
          nama: {
            [Op.like]: `%${keyword}%`,
          },
        },
      });

    const taggedBerita = rowsBerita.map((item) => ({
      ...item.toJSON(),
      tags: "berita",
    }));

    const taggedPengumuman = rowsPengumuman.map((item) => ({
      ...item.toJSON(),
      tags: "pengumuman",
    }));

    res.json({
      data: [...taggedBerita, ...taggedPengumuman],
      count: countBerita + countPengumuman,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { nama, description, tempat } = req.body;
    const photo = req.file ? req.file.filename : null;

    const newItem = await Berita.create({
      nama,
      description,
      tempat,
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
