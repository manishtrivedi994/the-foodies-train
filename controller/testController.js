let a = 1

exports.test1 = (req, res, next) =>{

    try{

        a++;
        console.log('request recieved')

        res.status(200).json({
            status: "success",
            data: "some data",
            a
        })

    }catch(err){

        res.status(200).json({
            status: "fail",
            error: err.stack
        })
    }

    
    next()
}