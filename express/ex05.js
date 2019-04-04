const express = require('express')
const server = express()
const router =  require('./ex05_routes')

server.use('/api', router)

server.listen(3003, () => console.log('Executando...'))
