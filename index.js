import express from 'express'
import { sequelize, Usuario } from './db.js'

const app = express()

const route = Router()

app.use(express.json())

app.use(route)

app.get("/teste/:nome/:senha", async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com o banco de dados")
        const novoUsuario = await Usuario.create({
            nome: req.query.nome,
            senha: req.query.senha,
        });
        res.send("USUARIO INSERIDO", novoUsuario.toJSON())
    } catch (error) {
        res.send("Erro ao conectar/inserir no banco de dados: ", error)
    } finally {
        sequelize.close()
    }
})



app.listen(3001, () => console.log("server running"))