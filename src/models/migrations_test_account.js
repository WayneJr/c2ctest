const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations_test_account', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "migrations_test_account_username_key"
    },
    phone_number: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: "migrations_test_account_phone_number_key"
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'migrations_test_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "migrations_test_account_phone_number_0631151f_like",
        fields: [
          { name: "phone_number" },
        ]
      },
      {
        name: "migrations_test_account_phone_number_key",
        unique: true,
        fields: [
          { name: "phone_number" },
        ]
      },
      {
        name: "migrations_test_account_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "migrations_test_account_username_5b661561_like",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "migrations_test_account_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
