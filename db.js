const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Hotel-Room")
// var connection = mongoose.connection;

// connection.on('error' , ()=>{
//     console.log('failed')
// })

// connection.on('connected' , ()=>{
//     console.log('success')
// })

// module.exports = mongoose



// const mongoose  = require('mongoose');

//  mongoose.connect("mongodb://127.0.0.1:27017/Hotel-Room");



// const roomSchema =new mongoose.Schema({
//     name : {
//        type  : String,
//        required : true
//     },
//     maxcount : {
//         type : Number,
//         // required: true
//     },
//    phonenumber:{
//     type: Number,
//     // required : true
//    },

//    rentperday:{
//     type: Number,
//     // required : true
//    },

//    imageurls :[],
//    currentbooking : [],

//    roomtype : {
//     type: String,
//     // required : true
//    },

//    desc : {
//     type : String,
  
//     // required : true
//    }

// } ,{
//     timestamps : true,
// });
// const main =  async ()=>{
// const roomModel = mongoose.model('Rooms' , roomSchema)
// let data = new roomModel({name:"m8"});
// let result  = await data.save();
// console.log(result);


// }
// const updateIndb = async() =>{
//     const roomModel = mongoose.model('Rooms' , roomSchema);
//     let data = await roomModel.updateOne({
       
// name:"spot on shiva dhaba" 
//     },
//     {
//         $set : {name:"tushar dhaba"}
//     })

//     console.log(data)
// }
// updateIndb()

// module.exports = mongoose
