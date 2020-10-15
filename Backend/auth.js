const jwt = require("jsonwebtoken");
const users = require("./models/users");

const auth = async(req,res,next) =>{
    try{
        const token = req.header('Authorization');
        const decoded = jwt.verify(token,process.env.tokenString)
        const user = users.findOne({_id : decoded._id, 'tokens.token': token})
        if(!user){
            throw new Error()
        }
        next()

    }catch(err){
        console.log(err)
        res.send({success : 0, msg: "Please Audthenticate"})
    }
}

module.exports = auth