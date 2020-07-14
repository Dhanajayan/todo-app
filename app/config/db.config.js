
module.exports = {
	"development": {
		HOST: 'localhost',
		USER: 'root',
		PASSWORD: null,
		DB: 'todo',
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}
	
};