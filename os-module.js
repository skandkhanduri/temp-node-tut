const os = require('os');
const user = os.userInfo()
//method returns current user information
console.log(user)
//method returns the system uptime information
console.log(`The system uptime is ${os.uptime()/3600}/ hrs`)

//method returns the information about the system

const currentOS= {

    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);