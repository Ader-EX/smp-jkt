const { Pengumuman } = require("../models");

exports.getAll = async (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 6;
  const page = parseInt(req.query.page, 10) || 1;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Pengumuman.findAndCountAll({
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

exports.getById = async (req, res, next) => {
  try {
    const item = await Pengumuman.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Pengumuman not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Request body is missing or invalid format." });
    }

    const { nama, description } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    if (!nama || !description) {
      return res
        .status(400)
        .json({ error: "Missing required fields: nama and description." });
    }

    const newItem = await Pengumuman.create({ nama, description, photo });
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.getNewestPengumuman = async (req, res, next) => {
  const limit = Number.parseInt(req.query.limit, 10) || 10;

  try {
    const list = await Pengumuman.findAll({
      order: [["createdAt", "DESC"]],
      limit,
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Pengumuman.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated)
      return res.status(404).json({ message: "Pengumuman not found" });
    const updatedItem = await Pengumuman.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Pengumuman.destroy({ where: { id: req.params.id } });
    if (!deleted)
      return res.status(404).json({ message: "Pengumuman not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
