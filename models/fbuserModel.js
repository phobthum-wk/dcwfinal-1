const mongoose = require("mongoose");

const fbuserSchema = mongoose.Schema({
    name : {type: String, require},
    email : {type: String , require},
} , {
    timestamps : true,
})

module.exports = mongoose.model('fbusers', fbuserSchema)