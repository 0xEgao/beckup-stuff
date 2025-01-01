const express = require('express');
const jwt = require('jsonwebtoken');
const userMiddleware=require('../middlewares/user');
const { purchaseModel } = require('../db');
require('dotenv').config();
const {userModel,courseModel,purchaseModel} = require('../db');
const userrouter = express.Router();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
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
    const { email, password } = req.body;

    const admin = await userModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_USER_PASSWORD);


        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

userrouter.get('/purchases', userMiddleware, async(req, res) => {
    const userId = req.userId;
    const purchases = await purchaseModel.find(
        {
            userId,
        }
    )
    let purchaseDetails = [];
    for (i = 0; i < purchases.length; i++){
        purchaseDetails.push(purchases[i].courseId);
    }
    const CourseData = await courseModel.find(
        {
            _id: { $in: purchaseDetails }
            //$in let us match the values of an array with the values of a field in the document,and returs them ,then .find() will push it to CourseData
        }
    )
    res.json({
        purchases,
        CourseData
    })
});
module.exports={ userrouter : userrouter }