const mongoose = require('mongoose')

const studentSchema= new mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Mark:Number
})

var stuModel=mongoose.model("students",studentSchema);
module.exports =stuModel;