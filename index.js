const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000
const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routes
const userRouter = require('./routes/user.js');

//Middleware
const loggerMiddleware = require('./middleware/logger.js');

require('dotenv').config();

app.use('/', loggerMiddleware);

app.use('/users', userRouter);


app.get('/animals', (req, res)=>{
    res.render("index", {message: "EJS Rocks!"});
})
app.get('/about', (req, res)=>{
    res.render('about', {message: 'welcome to the about page'})
})





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


app.use((err, req, res, next)=>{
    console.log("unexpected server error");
    res.status(500).send(err.message || "UNEXPECTED SERVER ERROR!");
    next();
})



app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log(`running on port ${PORT}`)
})
