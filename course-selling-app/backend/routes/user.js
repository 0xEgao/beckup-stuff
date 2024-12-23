const express = require('express');
const userrouter = express.Router();

userrouter.post('/signup', (req, res) => {
    res.json({
        message:"signup endpoint",
    })
});

userrouter.post('/signin', (req, res) => {
    res.json({
        message:"signin endpoint",
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