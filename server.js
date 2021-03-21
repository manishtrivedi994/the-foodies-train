const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = require('./app');

dotenv.config({path: './config.env'})

const DB = process.env.DB.replace('<DATABASE_PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log("db connection successful")
})

const port = process.env.PORT || 3000

const server = app.listen(port, () =>{
    console.log(`Server listening at port ${port}`)
})

process.on('unhandledRejection', (err)=>{
    console.log( err.name, err.message, err.stack)
    console.log('Unhandled rejection... SHUTTING DOWN!')
    server.close(()=>{
        process.exit(1)
    });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM Recieved. Shutting down gracefully.')
    server.close(() => {
        console.log('Process Terminated')
    });
})
