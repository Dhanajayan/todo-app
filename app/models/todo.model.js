module.exports = (sequelize, Sequelize) => {
	const Todo = sequelize.define("todo", {
		title: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		completed: {
			type: Sequelize.BOOLEAN,
			defaultValue: 0
		}
	}, {
		tableName: "todo",
	  freezeTableName: true // Model tableName will be the same as the model name
	});

	return Todo;
};