process.stdout.write('estajsiadjasd?\n')
process.stdin.on('data', function(data){
  process.stdout.write(`sua reposta foi ${data.toString()}\n`)
  process.exit()
})
