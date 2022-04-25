const express = require("express")
const perfilRoute = require("./routes/PerfilRoute")
const notificacaoRoute = require("./routes/NotificacaoRoute")
const loginRoute = require("./routes/LoginRoute")

const api = express()
const db = require("./db")

db.connect()

api.use(express.json())
api.use("/perfil", perfilRoute)
api.use("/notificacao", notificacaoRoute)
api.use("/login", loginRoute)

// Rota raíz
api.get("/", (req, res) => {
  res.send("Bem-vindo(a) ao Perfil Profissional API")
})

module.exports = api
