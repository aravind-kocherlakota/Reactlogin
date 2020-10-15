const mongoose = require("mongoose") 
const {Schema} = mongoose;
const jwt = require("jsonwebtoken");

const usersSchema = new Schema({
    password:{type:String,required: true},
    email: {type:String,required: true},
    fullName: {type:String,required: true},
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }]
})
usersSchema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign({_id : user._id.toString()},process.env.tokenString)
    console.log(token)
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token
}

module.exports = mongoose.model('users',usersSchema,'users');