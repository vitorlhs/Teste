const express = require('express')
const server = express()

server.use('/api',function(req, res,next){
  console.log('Inicio')
  next()
  console.log('fim')
})

server.use('/api',function(req, res){
  console.log('resposta')
  res.send('<h1>API</h1>')
})

server.listen(3003, () => console.log('Executando...'))
