const mongoose = require('mongoose')


//create model

const Employee=mongoose.model('Employee',{
    //schema creation
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    Employee
}