//modules-encapsulate the code and share the minimum
//commonJs, every file is module(by default)
const name =require('./4-names') 
console.log(name)
const sayhi = require('./5-utils')
const data = require('./6-alternative')
sayhi(name.fname)
sayhi(name.lname)
console.log(data)
require('./7-mindgranade')
