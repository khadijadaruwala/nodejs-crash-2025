//argv
console.log(process.argv);
console.log(process.argv[3]);


//env
console.log(process.env);


//pid
console.log(process.pid);


//current working directory
console.log(process.cwd());

//memory usage
console.log(process.memoryUsage());

//uptime
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
})
// exit the process
process.exit(0)

console.log("After the exit");

