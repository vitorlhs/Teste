const express = require('express')
const server = express()

server.get('/',function(req, res,next){
  console.log('Inicio')
  next()
  console.log('fim')
})

server.get('/',function(req, res){
  console.log('resposta')
  res.send('<h1>OLA EXPRESS</h1>')
})

server.listen(3003, () => console.log('Executando...'))
