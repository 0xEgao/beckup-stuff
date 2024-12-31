const express = require('express');
const AdminRouter = express.Router();
const jwt=require('jsonwebtoken');
const { adminModel } = require('../db');
const JWT_ADMIN_PASSWORD = "asdasdasdadasdad";

//admin is just coursecreator
AdminRouter.get('/admins', (req, res) => {
    res.json({
        message:"Admin endpoint",
    })
});

AdminRouter.post('/signin', async(req, res) => {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);


        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

AdminRouter.post('/signup', async(req, res) => {
    const { email, password, firstName, lastName } = req.body;
    await adminModel.create(
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

AdminRouter.post('/add', (req, res) => {
    res.json({
        message:"admin add course endpoint",
    })
});

module.exports = { AdminRouter: AdminRouter }