module.exports = {
	"development": {
		HOST: 'localhost',
		USER: 'root',
		PASSWORD: null,
		DB: 'todo',
		PORT: 3306,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	},
	"production": {
		HOST: process.env.HOST,
		USER: process.env.USER,
		PASSWORD: process.env.PASSWORD,
		DB: process.env.DB,
		PORT: process.env.PORT,
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}
	
};