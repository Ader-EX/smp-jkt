module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Siswa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenisKelamin: {
        type: DataTypes.ENUM("L", "P"),
        allowNull: false,
      },
      agama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "kelas",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      tableName: "siswa",
      timestamps: false,
    }
  );
};
