const express = require('express');
const router = express.Router();
const Food = require('../models/foodmodel')

router.get("/getallfoods", async(req, res) => {
    try {
    const foods = await Food.find({})
    res.send(foods);
} catch (err) {
    res.status(400).json({message: err});
}
})
module.exports = router;