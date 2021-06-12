const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

//Login
router.post('/login', async(req, res) => {

    //check if its valid schema
    const { error } = loginValidation(req.body);
    if(error){
        return res.status(400).json({message: error});
    }
    //Check the email
    const user = await User.findOne({email: req.body.email});
    if(!user){ 
        return res.status(401).json(
            { message: "Correo o contrasena incorrecta" }
        )
    }
    //Check the password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){ 
        return res.status(401).json(
            { message: "Correo o contrasena incorrecta" }
        )
    }
    //logged!
    res.status(200).json({message: "Inicio de sesion correcto"});
});

//Register
router.post('/register', async (req, res) => {

    //validate data 
    const {error} = registerValidation(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    const ifEmailExist = await User.findOne({email: req.body.email})
    if (ifEmailExist) {
        return res.status(400).json(
            { message: "El correo ya se encuentra en uso, utiliza otro." }
        )
    }
    //Save Data
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.status(200).json({message: savedUser});
    }catch(err){
        res.status(400).json({message: err});
    }
});

module.exports = router;