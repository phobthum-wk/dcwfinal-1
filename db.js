const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://phobthum:wara2543pp.@cluster0.hm5hxbc.mongodb.net/test'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('database connection successfull')
})

db.on('error', ()=>{
    console.log('database connection error')
})

module.exports = mongoose