module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "image",
    {
      // LncRNA_name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   // defaultValue:"not sure"
      // },
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    },
    {
      modelName: "Image",
      tableName: "image",
    }
  );

  return Image;
};
