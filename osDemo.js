import os from 'os'

// userInfo()
console.log('Information about the user', os.userInfo())

//totalmem
console.log(`Total memory of the system in bytes: ${os.totalmem()}`)

//freemem
console.log(`Free memory of the system available in bytes: ${os.freemem()}`)

//cpus
console.log('Information about each core of the CPU', os.cpus())