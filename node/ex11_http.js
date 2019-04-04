const http = require('http')
const server = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type":"text_html"})
  res.end('<h1>O express é melhor?</h1>')
})

const porta = 44444

server.listen(porta, function(){
  console.log(`Escutando a porta ${porta}`)
})
