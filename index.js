const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');
// const http = require('http');
// const fs = require('fs');


require('dotenv').config()


const options = {root: path.join(__dirname)}
app.get('/', (req, res)=>{
    res.sendFile('index.html', options);
})
app.get('/about', (req, res)=>{
    res.sendFile('about.html', options);
})

app.get('/contact-me', (req, res)=>{
    res.sendFile('contact-me.html', options);
})


app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log(`running on port ${PORT}`)
})

// console.log(process.env.TEST);
// const server = http.createServer((req, res)=>{


//     let fileToRead = '';
//     if(req.url == '/'){
//         fileToRead = './index.html'
//     } else if( req.url == '/about'){
//         fileToRead = './about.html'
//     } else if(req.url == '/contact-me'){
//         fileToRead = './contact-me.html'

//     }


//     console.log(req.url)
//     fs.readFile(fileToRead, (error, data) =>{
//             if(error) {
//                 res.writeHead(500);
//                 res.end('server error')
//             } else {
//                 res.writeHead(200, {'content-type': 'text/html'});
//                 res.end(data);
//             }
//         })
    

// })

// server.listen(8080, ()=>{console.log('server is running on port 8080')})

