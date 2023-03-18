const mongoose = require("mongoose");

const foodsSchema = mongoose.Schema({

    name : {type: String, require},
    varients : [],
    prices : [],
    category : [],
    image : {type: String, require},
    description : {type: String, require}
}, {
    timestamps: true,
})

const foodModel = mongoose.model('foods', foodsSchema)

module.exports = foodModel