const User = require('../models/User')
const jwt = require('jsonwebtoken')

const handleErrors = (err) =>{
    console.log(err.message,err.code)
    let errors = { email :'',password:''};

    // incorrect email
    if(err.message === 'Incorrect Email'){
        errors.email = 'This email is not registered'
    }
    if(err.message === 'Incorrect Password'){
        errors.password = 'This password is wrong'
    }

    if (err.code === 11000){
        errors.email = 'that email is already registered'
        return errors
    }
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
           errors[properties.path] = properties.message
        })
    }

    return errors;
}

module.exports.signUp_get = (req,res)=>{
    
}

module.exports.logout_get = (req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')
}



module.exports.signUp_post = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.create({email,password});
        const token = createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        res.status(201).json({user:user._id})
    }catch(err){
       const errors = handleErrors(err)
        res.status(400).json({errors});
    } 
}


module.exports.login_get = (req,res)=>{
    
}

module.exports.login_post = async (req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        res.status(200).json({user:user._id})
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors})
    }

}

const maxAge = 3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},'helloworld',{
        expiresIn: maxAge
    });
}