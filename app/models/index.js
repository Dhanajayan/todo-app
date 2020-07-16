require('dotenv').config()

const dbConfig = require("../config/db.config.js")[process.env.NODE_ENV || 'development'];

const Sequelize = require("sequelize");

let sequelize;

console.log("dbConfig ", dbConfig);

sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	port: dbConfig.PORT,
	pool: {
	   max: dbConfig.pool.max,
	   min: dbConfig.pool.min,
	   acquire: dbConfig.pool.acquire,
	   idle: dbConfig.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, Sequelize);

module.exports = db;
