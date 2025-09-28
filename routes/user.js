const express = require('express');


const userRouter = express.Router();


const userJson = require('../users.json');

// BASIC CRUD ENDPOINTS FOR USERS

userRouter.get(('/'), (req,res, next)=>{
    res.json(userJson);
})

userRouter.post(('/'), (req,res, next)=>{
    res.send('nothing')
})

userRouter.get(('/:id'), (req,res, next)=>{
    
})


userRouter.put(('/:id'), (req,res, next)=>{
    
})

userRouter.delete(('/:id'), (req,res, next)=>{
    
})


module.exports = userRouter