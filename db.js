const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('deploy_nodeJS', 'postgres', 'rafa1902', {
    host: 'deploy-nodejs.c7oi6egs4yoh.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
});

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
});

module.exports = sequelize, Usuario