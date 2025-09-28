const express = require('express');


const middleware = express();




middleware.use('/', (req, res, next)=>{
    console.log(`${req.method} localhost:${process.env.PORT}${req.originalUrl}`);
    next();
})




module.exports = middleware