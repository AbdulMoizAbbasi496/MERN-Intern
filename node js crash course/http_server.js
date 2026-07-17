import http from 'http'

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type','Text/html')
    // res.statusCode(200)
    // req.method === 'GET' -> to check request method
    if (req.url==='/') {
        res.writeHead(200,{'Content-Type':'Text/html'})
        res.write("<h2>This is http server example - HOME PAGE.</h2>")
        res.end("<h1>WHOOOOOOH!</h1>")    
    } else if (req.url==='/about') {
        res.writeHead(200,{'Content-Type':'Text/html'})
        res.write("<h2>This is http server example- ABOUT PAGE.</h2>")
        res.end("<h1>WHOOOOOOH!</h1>")    
    }else{
        res.writeHead(404,{'Content-Type':'Text/html'})
        res.write("<h2>404 ERROR - PAGE NOT FOUND</h2>")
        res.end("<h1>WHOOOOOOH!</h1>")    
    }
    
})

// const PORT = 8000
const PORT = process.env.PORT
server.listen(PORT , ()=>{
    console.log(`HTTP Server Running on: http://localhost:${PORT}`);    
});

// node --watch http_server.js -> work same as nodemon