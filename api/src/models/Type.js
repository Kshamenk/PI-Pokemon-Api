const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})
}