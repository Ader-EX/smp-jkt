module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Pengumuman",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "pengumuman",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: false,
    }
  );
};
