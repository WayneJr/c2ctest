const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations_test_comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
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
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'migrations_test_post',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'migrations_test_account',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'migrations_test_comment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "migrations_test_comment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "migrations_test_comment_post_id_ee5ee27c",
        fields: [
          { name: "post_id" },
        ]
      },
      {
        name: "migrations_test_comment_user_id_f8e0691c",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
