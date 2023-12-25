const mongoose = require('mongoose');
const messageSchema =new mongoose.Schema({
    name : {
        type  : String,
       required : true
    },
    email : {
        type : String,
        required: true
    },
   messages:{
    type: String,
    required : true
   },
   roomtype:{
    type: String,
    required : true
   }

} ,{
    timestamps : true,
})

module.exports = mongoose.model('messages' , messageSchema);