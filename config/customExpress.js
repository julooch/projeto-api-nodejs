// executar o servidor com express

// importar um módulo
const express = require('express')

// importar o consign
const consign = require('consign')

// importar o body parser
const bodyParser = require('body-parser')

module.exports = () => {

    const app = express()

    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}

