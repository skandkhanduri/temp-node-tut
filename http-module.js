const http= require('http')
const server=http.createServer((req, res) => {

    if (req.url==='/')
   {
    res.end('Welcome to my home page')
    return
   }
   if (req.url==='/about')
   {
    res.end('Welcome to my about page')
    return
   }
   res.end(`
   <h1>Oops!</h1>
   <p>Wrong page</p>
   <a href="/">back home</a>
   `)
})

server.listen(4000)