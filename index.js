const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()

        // função para rodar o servidor numa porta 3000
        app.listen(3000, () => console.log('Servidor rodando na porta 3000')) 
    }
})


