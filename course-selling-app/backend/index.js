const express = require('express');
const jwt = require('jsonwebtoken');
const { CourseRouter } = require('./routes/course');
const { userrouter } = require('./routes/user');
const { AdminRouter } = require('./routes/admin');
const port = 3000;
const app = express();


app.use('/user', userrouter);
app.use('/course', CourseRouter);
app.use('/admin', AdminRouter);

app.listen(port, () => {
    console.log('Server started');
});