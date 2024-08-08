// executar o servidor com express

// chamar um módulo
const express = require('express')

// o express irá criar o servidor e disponibilizar as rotas (endpoints)
const app = express()

// função para rodar o servidor numa porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000')) 
