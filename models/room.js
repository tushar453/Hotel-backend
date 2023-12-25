const mongoose = require('mongoose');
const roomSchema =new mongoose.Schema({
    name : {
        type  : String,
    //    required : true
    },
    maxcount : {
        type : Number,
        // required: true
    },
   phonenumber:{
    type: Number,
    // required : true
   },

   rentperday:{
    type: Number,
    // required : true
   },

   imageurls :[],
   currentbooking : [],

   roomtype : {
    type: String,
    // required : true
   },

   desc : {
    type : String,
    // required : true
   }

} ,{
    timestamps : true,
})



module.exports = mongoose.model('rooms' , roomSchema);
