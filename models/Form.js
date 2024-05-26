module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define(
    "Form",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      paranoid: true,
      indexes: [
        {
          unique: false,
          fields: ["id"],
        },
        {
          unique: false,
          fields: ["title"],
        },
      ],
    }
  );
  return Form;
};
