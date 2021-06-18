const http= require('http')

const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcom to our home page")
    }
    else if(req.url === '/about'){
        res.end('here is our short history')
    }
    else{
    res.end(`
    <h1>Oops!</h1>
    <p>the page does not exist.</p>
    <a href="/">back home</a>`)
    }
})
server.listen(5000)