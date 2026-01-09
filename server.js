import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Hello World! This is my first Node.js server</h1>')

    // res.writeHead(500, {'Content-Type': 'application/json'})
    // res.end(JSON.stringify({message: 'Server error - 500'}))
})

server.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
})