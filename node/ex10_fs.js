const fs = require('fs')
const fileNames = fs.readdirSync(__dirname)


fileNames.forEach(f=> console.log(f))
