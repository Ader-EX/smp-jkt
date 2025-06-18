const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Kelas = require("./kelas")(sequelize, DataTypes);
const Siswa = require("./siswa")(sequelize, DataTypes);
const Berita = require("./berita")(sequelize, DataTypes);
const Pengumuman = require("./pengumuman.js")(sequelize, DataTypes);
const Guru = require("./guru")(sequelize, DataTypes);
const Staff = require("./staff")(sequelize, DataTypes);
const Kurikulum = require("./kurikulum")(sequelize, DataTypes);

// Define associations
Kelas.hasMany(Siswa, { foreignKey: "kelasId", onDelete: "CASCADE" });
Siswa.belongsTo(Kelas, { foreignKey: "kelasId" });

module.exports = {
  sequelize,
  Kelas,
  Siswa,
  Berita,
  Pengumuman,
  Guru,
  Staff,
  Kurikulum,
};
