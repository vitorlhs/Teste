const _ = require('lodash')

const alunos =[{
  nome : 'joao',
  nota : 9.2
},
{
  nome: 'maria',
  nota: 1.2},
{
  nome: 'pedro',
  nota: 9.1
}]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
