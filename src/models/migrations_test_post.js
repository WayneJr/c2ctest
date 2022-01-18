const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations_test_post', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    draft: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'migrations_test_account',
        key: 'id'
      }
    },
    subtitle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'migrations_test_post',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "migrations_test_post_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "migrations_test_post_user_id_08a63f70",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
