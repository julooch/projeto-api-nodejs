// o express irá criar o servidor e disponibilizar as rotas (endpoints)

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Você está na rota de atendimentos"))
}