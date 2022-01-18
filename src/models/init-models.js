var DataTypes = require("sequelize").DataTypes;
var _Accounts = require("./Accounts");
var _Comments = require("./Comments");
var _Posts = require("./Postssss");
var _SequelizeMeta = require("./SequelizeMeta");
var _auth_group = require("./auth_group");
var _auth_group_permissions = require("./auth_group_permissions");
var _auth_permission = require("./auth_permission");
var _auth_user = require("./auth_user");
var _auth_user_groups = require("./auth_user_groups");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _django_admin_log = require("./django_admin_log");
var _django_content_type = require("./django_content_type");
var _django_migrations = require("./django_migrations");
var _django_session = require("./django_session");
var _migrations_test_account = require("./migrations_test_account");
var _migrations_test_comment = require("./migrations_test_comment");
var _migrations_test_post = require("./migrations_test_post");
var _posts = require("./posts");

function initModels(sequelize) {
  var Accounts = _Accounts(sequelize, DataTypes);
  var Comments = _Comments(sequelize, DataTypes);
  var Posts = _Posts(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var django_migrations = _django_migrations(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var migrations_test_account = _migrations_test_account(sequelize, DataTypes);
  var migrations_test_comment = _migrations_test_comment(sequelize, DataTypes);
  var migrations_test_post = _migrations_test_post(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);

  auth_group_permissions.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "group_id"});
  auth_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "group_id"});
  auth_group_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "permission_id"});
  auth_user_user_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_user_user_permissions, { as: "auth_user_user_permissions", foreignKey: "permission_id"});
  auth_user_groups.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "user_id"});
  auth_user_user_permissions.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(auth_user_user_permissions, { as: "auth_user_user_permissions", foreignKey: "user_id"});
  django_admin_log.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "user_id"});
  auth_permission.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auth_permission, { as: "auth_permissions", foreignKey: "content_type_id"});
  django_admin_log.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "content_type_id"});
  migrations_test_comment.belongsTo(migrations_test_account, { as: "user", foreignKey: "user_id"});
  migrations_test_account.hasMany(migrations_test_comment, { as: "migrations_test_comments", foreignKey: "user_id"});
  migrations_test_post.belongsTo(migrations_test_account, { as: "user", foreignKey: "user_id"});
  migrations_test_account.hasMany(migrations_test_post, { as: "migrations_test_posts", foreignKey: "user_id"});
  migrations_test_comment.belongsTo(migrations_test_post, { as: "post", foreignKey: "post_id"});
  migrations_test_post.hasMany(migrations_test_comment, { as: "migrations_test_comments", foreignKey: "post_id"});

  return {
    Accounts,
    Comments,
    Posts,
    SequelizeMeta,
    auth_group,
    auth_group_permissions,
    auth_permission,
    auth_user,
    auth_user_groups,
    auth_user_user_permissions,
    django_admin_log,
    django_content_type,
    django_migrations,
    django_session,
    migrations_test_account,
    migrations_test_comment,
    migrations_test_post,
    posts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
