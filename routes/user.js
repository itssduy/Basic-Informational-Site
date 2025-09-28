const express = require('express');


const userRouter = express.Router();


const userJson = require('../users.json');

// BASIC CRUD ENDPOINTS FOR USERS

userRouter.get(('/'), (req,res, next)=>{
    res.json(userJson);
})

userRouter.post(('/'), (req,res, next)=>{


    const newUser = {

    }
    res.send('nothing')
})

userRouter.get(('/:id'), (req,res, next)=>{
    const id = req.params.id

    if(id){
        return res.next(new Error("Id not found"))
    }
    res.send("works!")
})


userRouter.put(('/:id'), (req,res, next)=>{
    res.send('nothing')
})

userRouter.delete(('/:id'), (req,res, next)=>{
    res.send('nothing')
})




module.exports = userRouter