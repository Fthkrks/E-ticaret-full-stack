const express = require("express");
const router = express.Router();
const user = require("../models/user.js");


// Tüm kullanıcıları getirme (Read-all)


router.get("/", async (req, res) =>{
    try {
        const users = await user.find();

        res.status(200).json(users);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error"});
        
    }
})



// Kullanıcı Silme (delete)

router.delete("/:email", async(req, res) =>{
    try {
        const email = req.params.email;

        const deletedUser = await user.findOneAndDelete(email);

        if (!deletedUser){
            return res.status(404).json({error: "user not found"})
        }else{
            res.status(200).json(deletedUser)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error"})
        
    }
})




module.exports = router;
