const express = require('express')
const path = require('path')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const cookieParser= require('cookie-parser')

const userRouter = require('./routes/userRouter')

const app = express()

app.enable('trust proxy')

app.use(helmet())
//data sanitization against NoSQL query injection
app.use(mongoSanitize())

//data sanitixzation against xss attacks
app.use(xss())

app.use(cookieParser())

app.use(express.json())

app.use('/api/v1/user', userRouter)


app.route('*').all( (req, res, next) => {

    if(!res.headersSent){
        res.status(404).send('Bad Request')
    }
    next()
} )

module.exports = app