const mongoose = require("mongoose");
mongoose.promise = global.promise;
const db = {};
db.mongoose = mongoose;
db.user =require('./user.model')(mongoose);



module.exports= db;