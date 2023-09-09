const mongoose = require('mongoose');
const bookingSchema =new mongoose.Schema({
    room : {
        type  : String,
    //    required : true
    },
    roomid : {
        type : String,
        // required: true
    },
   userid:{
    type: String,
    // required : true
   },

   username:{
    type:String,
   },
   

   fromdate:{
    type: String,
    // required : true
   },

 totaldays:{
type:Number,
 },

   todate : {
    type: String,
    // required : true
   },

   totalamount : {
    type : Number,
    // required : true
   },
   transactionid:{
    type:String
   },
   status:{
    type:String , default : 'Confirmed'
   }

} ,{
    timestamps : true,
})



module.exports = mongoose.model('bookings' , bookingSchema);