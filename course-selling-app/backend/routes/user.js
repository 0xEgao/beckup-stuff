const express = require('express');
//const zod = require('zod');
const userModel = require('../db').userModel;
const userrouter = express.Router();

userrouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    await userModel.create(
        {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
    )
    res.json({
        message:"signup successful",
    })
    
});

userrouter.post('/signin', async(req, res) => {
    const { email, password } = req.body;
    await userModel.find({
        email: email,
        password: password
    });
    res.json({
        message:"signin successful",
    })
});
userrouter.get('/courses', (req, res) => {
    res.json({  
        message:"Courses endpoint",
    })
});
userrouter.get('/purchases', (req, res) => {
    res.json({
        message:"purchases from a user",
    })
});
module.exports={ userrouter : userrouter }