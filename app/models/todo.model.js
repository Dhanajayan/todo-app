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
		freezeTableName: true
	});

	return Todo;
};