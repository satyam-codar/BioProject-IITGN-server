const dbConfig = require("../config/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cancerTable = require("./cancer.model.js")(sequelize, Sequelize);
db.QgrsMapper = require("./QGRS_mapper.model")(sequelize, Sequelize);
db.G4hunterPoint9 = require("./g4hunter_point_9.model")(sequelize, Sequelize);
db.G4hunter1Point4 = require("./g4hunter_1_point_4.model")(
  sequelize,
  Sequelize
);
db.Image = require("./image.model.js")(sequelize, Sequelize);

module.exports = db;
