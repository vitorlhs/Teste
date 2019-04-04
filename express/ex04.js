const express = require('express')
const server = express()

server.route('/clientes')
  .get((req,res) => res.send('<h1>Lista</h1>'))
  .post((req,res) => res.send('Novo Cliente'))
  .put((req,res) => res.send('Alterar Cliente'))
  .delete((req,res) => res.send('Deletar Cliente'))

server.listen(3003, () => console.log('Executando...'))
