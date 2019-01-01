const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('events', {
		name: DataTypes.STRING,
		description: DataTypes.TEXT
	}, {
		timestamps: false
	})
}