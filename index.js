const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{


    let fileToRead = '';
    if(req.url == '/'){
        fileToRead = './index.html'
    } else if( req.url == '/about'){
        fileToRead = './about.html'
    } else if(req.url == '/contact-me'){
        fileToRead = './contact-me.html'

    }


    console.log(req.url)
    fs.readFile(fileToRead, (error, data) =>{
            if(error) {
                res.writeHead(500);
                res.end('server error')
            } else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.end(data);
            }
        })
    

})

server.listen(8080, ()=>{console.log('server is running on port 8080')})

