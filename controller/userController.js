const User = require('../models/userModel')
const Post = require('../models/postModel')
const Logs = require('../models/logModel')
const Request = require('../models/requestModel')

const loginAndAuth = require('../utils/loginAndAuth')

exports.getAllUsers = async ( req, res, next ) => {

    try{

        loginAndAuth.checkLogin(res.locals.user)
        loginAndAuth.checkAuthorization(res.locals.user)

        const data = await User.find()

        res.status(200).json({
            status: 'success',
            length: data.length,
            data
        })

    }catch(err){
        res.status(200).json({
            status:'fail',
            error: err.message
        })
    }

    next()
}
