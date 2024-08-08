// executar o servidor com express

// importar um módulo
const express = require('express')

// importar o consign
const consign = require('consign')

module.exports = () => {

    const app = express()

    consign()
        .include('controllers')
        .into(app)

    return app
}

