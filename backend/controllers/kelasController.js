const { Kelas, Siswa } = require("../models");
const { Op } = require("sequelize");

exports.getAll = async (req, res, next) => {
  try {
    const items = await Kelas.findAll({ include: Siswa });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getNames = async (req, res, next) => {
  try {
    const classes = await Kelas.findAll({
      attributes: ["id", "namaKelas"],
      order: [["namaKelas", "ASC"]],
    });
    res.json(classes);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  const { page = 1, pageSize = 10, search = "" } = req.query;
  const offset = (page - 1) * pageSize;
  const limit = parseInt(pageSize, 10);

  try {
    // Find the kelas by ID
    const kelas = await Kelas.findByPk(req.params.id);

    if (!kelas) return res.status(404).json({ message: "Kelas not found" });

    // Count total matching siswa
    const totalData = await Siswa.count({
      where: {
        kelasId: req.params.id,
        nama: {
          [Op.like]: `%${search}%`,
        },
      },
    });

    // Fetch paginated siswa
    const siswaList = await Siswa.findAll({
      where: {
        kelasId: req.params.id,
        nama: {
          [Op.like]: `%${search}%`,
        },
      },
      limit,
      offset,
    });

    const totalPages = Math.ceil(totalData / limit);

    res.json({
      kelas,
      siswa: siswaList,
      pagination: {
        totalData,
        totalPages,
        currentPage: parseInt(page, 10),
        pageSize: limit,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newItem = await Kelas.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Sequelize Insert Error:", err);
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Kelas.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Kelas not found" });
    const updatedItem = await Kelas.findByPk(req.params.id);
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleted = await Kelas.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Kelas not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
