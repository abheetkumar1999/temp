const os = require('os')
//info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime
console.log(`the system up time ${os.uptime()} seconds`) 

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)