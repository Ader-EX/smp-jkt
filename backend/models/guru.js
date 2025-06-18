module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Guru",
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
      nip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mapel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tugasTambahan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "guru",
      timestamps: false,
    }
  );
};
