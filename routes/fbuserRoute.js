const express = require("express");

const router = express.Router();
const fbUser = require("../models/fbuserModel")

router.post("/facebook_login", async (req, res) => {
    const { name, email} = req.body

    

    const user = await fbUser.find({ name, email})
    
    if(user){
        try {
    
            const user = await fbUser.find({ name, email})
    
            if (user.length > 0) 
            {
                const currentUser = {
                    name: user[0].name,
                    email: user[0].email,
                    _id: user[0]._id
                }
                res.send(currentUser);
            }
            else {
                return res.status(400).json({ message: 'User Login Failed' });
            }
        } catch (error) {
            return res.status(400).json({message: 'Something went wrong'});
        }}
    else if(!user){
        try {
            const newUser = new fbUser({ name, email})
            newUser.save()
            res.send('User Registered successfully')
    
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

})

module.exports = router