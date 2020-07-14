const dbConfig = require("../config/db.config.js")[process.env.NODE_ENV || 'development'];

const Sequelize = require("sequelize");

console.log("dbConfig ", dbConfig, process.env.NODE_ENV);
if(!process.env.NODE_ENV) {
	const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
		host: dbConfig.HOST,
		dialect: dbConfig.dialect,
		operatorsAliases: false,

		pool: {
		   max: dbConfig.pool.max,
		   min: dbConfig.pool.min,
		   acquire: dbConfig.pool.acquire,
		   idle: dbConfig.pool.idle
		}
	});
} else {
	const sequelize = new Sequelize(process.env.DATABASE_URL);
}


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = require("./todo.model.js")(sequelize, Sequelize);

module.exports = db;
