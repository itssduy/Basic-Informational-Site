const express = require('express');


const userRouter = express.Router();


const {getUsers, getUserById} = require('../db');

// BASIC CRUD ENDPOINTS FOR USERS

userRouter.get(('/'), async (req,res, next)=>{
    const users = await(getUsers())
    res.send(users);
})

userRouter.post(('/'), (req,res, next)=>{


    const newUser = {

    }
    res.send('nothing')
})

userRouter.get(('/:id'), (req,res, next)=>{
    const id = req.params.id

    if(!id){
        return next(new Error("Id not found"));
    }

    const user = getUserById(id)
    res.send(user)
})


userRouter.put(('/:id'), (req,res, next)=>{
    res.send('nothing')
})

userRouter.delete(('/:id'), (req,res, next)=>{
    res.send('nothing')
})




module.exports = userRouter