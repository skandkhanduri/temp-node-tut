const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternate-syntax-export-module')
require('./mind-twister')
console.log(data.singleperson.name)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
