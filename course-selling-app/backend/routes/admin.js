const express = require('express');
const AdminRouter = express.Router();

const {adminModel} = require('../db');

//admin is just coursecreator
AdminRouter.get('/admins', (req, res) => {
    res.json({
        message:"Admin endpoint",
    })
});

AdminRouter.post('/signin', (req, res) => {
    res.json({
        message:"admin signin endpoint",
    })
})

AdminRouter.post('/signup', (req, res) => {
    res.json({
        message:"admin signup endpoint",
    })
});

AdminRouter.post('/add', (req, res) => {
    res.json({
        message:"admin add course endpoint",
    })
});

module.exports = { AdminRouter: AdminRouter }