const mongoose = require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb://localhost/ebanking",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err)=>{
        if(err) throw err
        console.log("connected to db")
    })
}