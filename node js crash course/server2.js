import http from 'http'

const users = [
    {id:1,name:'Abdul Moiz',dep:'BSAI'},
    {id:2,name:'Ahmed Ali',dep:'BSDS'},
    {id:3,name:'Shayan',dep:'BSCS'}
]
const server = http.createServer((req,res)=>{
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.write('This is home page')
            res.end()
        } else if (req.url === '/api/users'){
            res.writeHead(200,{'Content-Type':'application/json'})
            const data = JSON.stringify(users)
            res.write(data)
            res.end()
        } else if (req.url.match('/api/users/([0-9])')) {
            res.writeHead(200,{'Content-Type':'application/json'})
            const id = req.url.split('/')[3]
            const user = users.find((user)=> user.id === parseInt(id) )
            const data = JSON.stringify(user)
            res.write(data)
            res.end()
        } else{
            res.writeHead(404,{'Content-Type':'Text/html'})
            res.end('404 Error - Page not found!')    
        }
    }else{
        res.writeHead(404,{'Content-Type':'Text/html'})
        res.end('<h1>Method not allowed!</h1>')
    }
})

const PORT = process.env.PORT || 7000
server.listen(PORT,()=>{
    console.log(`Server running at  http://localhost:${PORT}`);
})