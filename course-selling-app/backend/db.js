const mongoose = require('mongoose');
require('dotenv').config();
const mongodbUrl = process.env.MONGODB_URL;
console.log("connecting to mongodb");
mongoose.connect(mongodbUrl);
const course = require('./routes/course');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    firstName: String,
    lastName:String,
});

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    firstName: String,
    lastName:String,
    
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: objectId,
    
});

const purchaseSchema = new Schema({
    userId: objectId,
   courseId: objectId, 
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel=mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports={
    userModel,adminModel,courseModel,purchaseModel
}