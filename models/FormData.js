module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define(
    "FormData",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      formId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isgraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
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
          fields: ["name"],
        },
        {
          unique: false,
          fields: ["email"],
        },
        {
          unique: false,
          fields: ["phoneNumber"],
        },
        {
          unique: false,
          fields: ["isgraduate"],
        },
      ],
    }
  );
  return Form;
};
