module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Kelas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      namaKelas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thnPelajaran: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waliKelas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "kelas",
      timestamps: false,
    }
  );
};
