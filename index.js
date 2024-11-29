import express from 'express'

import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('deploy_nodeJS', 'postgres', 'rafa1902', {
    host: 'deploy-nodejs.c7oi6egs4yoh.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
});

const usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
});

const app = express()

app.use(express.json())

app.get("/teste/:nome/:senha", async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com o banco de dados")
        const novoUsuario = await usuario.create({
            nome: req.params.nome,
            senha: req.params.senha,
        });
        res.send("USUARIO INSERIDO", novoUsuario.toJSON())
    } catch (error) {
        res.send("Erro ao conectar/inserir no banco de dados: ", error)
    } finally {
        sequelize.close()
    }
})

app.get("/", (req, res) => {
    console.log("Bateu na API")
    res.send("Bem vindo")
})



app.listen(3001, () => console.log("server rodando"))