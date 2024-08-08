const customExpress = require('./config/customExpress')

const app = customExpress()

// função para rodar o servidor numa porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000')) 
