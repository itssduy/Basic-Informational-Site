const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000
const path = require('path');


const userRouter = require('./routes/user.js')


require('dotenv').config()


app.use('/users', userRouter);

// const options = {root: path.join(__dirname)}
// app.get('/', (req, res)=>{
//     res.sendFile('index.html', options);
// })
// app.get('/about', (req, res)=>{
//     res.sendFile('about.html', options);
// })

// app.get('/contact-me', (req, res)=>{
//     res.sendFile('contact-me.html', options);
// })


app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log(`running on port ${PORT}`)
})
