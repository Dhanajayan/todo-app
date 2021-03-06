module.exports = (sequelize, Sequelize) => {
	const Todo = sequelize.define("todo", {
		id: {
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: 'id',
		},
		title: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		completed: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	}, {
	  freezeTableName: true // Model tableName will be the same as the model name
	});

	return Todo;
};