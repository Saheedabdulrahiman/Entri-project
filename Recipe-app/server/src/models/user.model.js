const  mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');

//name,
const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,"please provide a name"]
   },
   email:{
    type:String,
    required:[true,"please provide an email."],
    unique:true,
    lowercase:true,
    validator: [validator.isEmail,"Please provide an valid email ."]

   },
   password:{
    type:String,
    required:[true,"please enter your password"],
    minlength:5
   },
   confirmPassword:{
     type:String,
     required:true,
     validate:{
     validator:
        function (val){
           return val== this.password;
        },
        messsage:"passwrd and conform password would not match"
     
      }
   }

})


userSchema.pre('save',async function(next){
  if(!this.isModified('password')){return next();}
  this.password = await bcrypt.hash(this.password,10);
  this.confirmPassword = undefined;
  next();
  

})

//compare password
userSchema.methods.comparePasswordInDb  = async function (pswd,pswdDB) {
    return await bcrypt.compare(pswd,pswdDB);
}

const User = mongoose.model('User',userSchema);
module.exports = User;



