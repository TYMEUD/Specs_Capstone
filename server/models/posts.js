const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Post: sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        caption: DataTypes.STRING,
        genre: DataTypes.STRING,
        img: DataTypes.STRING,
        body: DataTypes.STRING
    })
}