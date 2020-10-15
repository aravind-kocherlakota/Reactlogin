const router = require("express").Router();
const users =  require("../models/users");
const auth = require('../auth')

router.post('/login',async(req,res,err) =>{
    try{
        if(err) {
            console.log(err)
        }
        let {email,password} = req.body
        let userdata = await users.findOne({email,password});
        if(userdata){
            console.log(userdata)
            userdata.generateToken()
            res.send({success : 1, msg: "Authenticated",data:userdata})
        }else{
            res.send({success : 0, msg: "invalid login credentials"})
        }
    }
    catch(err){
        console.log(err+new Date())
    }
})



router.post('/signup',async(req,res,err) =>{
    try{
        if(err) {
            console.log(err)
        }
        if(await users.find({email : req.body.email}).countDocuments()) {
            res.send({success : 0, msg: "user already exists"})
        }
        else{
            let userdata =  new users(req.body)
            userdata.save();
            res.send({success : 1, msg: "user registered"})
        }

    }
    catch(err){
        console.log(err+new Date())

    }
})


module.exports =  router;