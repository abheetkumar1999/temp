// npm - global command,come with node
//npm --version

//local dependency - use it only in this particular project
//npm i <package name>

//global dependency - use it in any project
//npm install -g <package name>
//sudo install -g <package name> (mac)

//package.json - manifest file(stores important info about the package/project)
//manual approach (create package.json in the root, create properties)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')
const items=[1,[2,[3,[4]]]]
const newitem = _.flattenDeep(items)
console.log(newitem)

