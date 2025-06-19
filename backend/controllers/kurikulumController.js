const { Kurikulum } = require("../models");

exports.getAll = async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const pageSize = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * pageSize;

  try {
    const { count, rows } = await Kurikulum.findAndCountAll({
      order: [["createdAt", "DESC"]],
      limit: pageSize,
      offset,
    });

    const totalPages = Math.ceil(count / pageSize);
    res.json({
      data: rows,
      pagination: {
        totalItems: count,
        totalPages,
        currentPage: page,
        pageSize,
      },
    });
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
    const { nama } = req.body;

    const files = req.files;
    const fileUpload = files?.file?.[0];
    const photoUpload = files?.photo?.[0];

    if (!fileUpload) {
      return res.status(400).json({ error: "File (PDF) is required." });
    }

    const filePath = `/uploads/${fileUpload.filename}`;
    const photoPath = photoUpload ? `/uploads/${photoUpload.filename}` : null;

    const newItem = await Kurikulum.create({
      nama,
      file: filePath,
      photo: photoPath,
      createdAt: new Date(),
    });

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
