function temparam(param){
  return process.argv.indexOf(param) !== -1
}

if(temparam('--producao')){
  console.log('atencao')
} else{
  console.log('tranquilo')
}
