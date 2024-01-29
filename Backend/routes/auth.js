const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require("../models/user.js");

const generateRandomAvatar = () =>{
    const randomAvatar = Math.floor(Math.random() * 71);
    return `https://i.pravatar.cc/150?img=${randomAvatar}`

}





// Kullanıcı oluşturma (create - register)

router.post("/register", async(req, res) =>{

    try {
        const {username, email, password} = req.body;

        const exitingUser = await user.findOne({email});


        if(exitingUser){
            return res.status(400).json({error: "Email adress is already registed. "})
        }


        const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = await new user({
        username, 
        email, 
        password: hashedPassword,
        avatar: generateRandomAvatar()

        });

        newUser.save();

        res.status(201).json(newUser)

    } catch (error){
        console.log(error);
        res.status(500).json({error: "Server error."})

        
    }

})





// Kullanıcı girişi (login)


router.post("/login", async(req, res) =>{

    try {

        const {email, password} = req.body;


        const User = await user.findOne({email});

        if(!User){
            return res.status(401).json({error: "Invalid email or password."})
        }



        const isPasswordValid = await bcrypt.compare(password, User.password);


        if(!isPasswordValid){
            return res.status(401).json({erorr: "Invalid email or password."}); 
        }

        res.status(200).json({
            id: User._id,
            email: User.email,
            username: User.username,
            role: User.role,
            avatar: User.avatar
        }
        )
        
    } catch (error) {
        console.log(error);
        router.status(500).json({error: "Server error"})
        
    }
})







module.exports = router;




