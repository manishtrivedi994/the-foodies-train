const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const { promisify } = require('util')

const createTokenSendCookie = function(id, req, res){

    const token =  jwt.sign({ id }, process.env.JWT_SECRET)
    res.cookie('jwt', token, { 
        httpOnly: true,
        secure: req.secure 
    }); 
    return token
}

exports.signUp = async (req, res, next) => {
    
    try{

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }
    
        const data = await User.create(user);

        if(!data){
            throw new Error('Something went wrong')
        }

        const token = createTokenSendCookie(data._id, req, res)

        res.status(201).json({
            status: 'success',
            token,
            data: {
                id : data.id,
                name: data.name,
                email: data.email,
                role: data.role,
                createdAt: data.createdAt
            }
        })

        next();

    }catch(err){
        
        console.log(err)
        
        res.status(401).json({
            status:"fail",
            error: err.message
        })
    }
    next()
    
};

exports.logIn = async (req, res, next) => {
    try{
        const {email, password} = req.body ;

        if(!email || !password){
            throw new Error('Provide email and password')
        }
        
        const user = await User.findOne({email}).select('+password');

        if(!user){
            throw new Error('User does not exist')
        }

        const checkPass = await user.correctPassword(password, user.password)
    
        if(!checkPass){
            throw new Error('Invalid password')
        }

        const token = createTokenSendCookie(user._id, req, res)

        res.status(200).json({
            status: "success",
            token
        })

        next();

    }catch(err){
        
        res.status(401).json({
            status:"fail",
            error: err.message
        })
        
    }
    
};

exports.isLoggedIn = async (req, res, next) => {

    if(req.cookies.jwt){
        try{

            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

            const freshUser = await User.findById(decoded.id);

            if(!freshUser){
                return next();
            }

            res.locals.user = freshUser;
            
        }catch(err){
            return next()
        }
    }

    next()
};

exports.logout = (req, res, next) => {
    
    res
        .cookie('jwt', 'loggedout', {  
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true
        })
        .status(200)
        .json({ status: 'success' });

    next()
}