const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require('stripe')(
  'sk_test_51No1FeSB1ZsdGv2Y4eFmzAwnmaNTBnXWAqdOPaWhKFIgIbIOiAvKpS22EOcFbagt0d9VIO0xblZh2sdJ57DBbRb000HIUDfArX'
);
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
app.use(cors());
require("./db");
const Products = require("./models/room");
const User = require("./models/user");
const Booking = require("./models/booking");
app.post("/create", async (req, resp) => {
  let data = Products(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send(result);
});

app.post("/getroombyid", async (req, resp) => {
  const roomid = req.body.roomid;

  let data = await Products.findOne({ _id: roomid });
  resp.send(data);
});

app.get("/list", async (req, resp) => {
  let data = await Products.find();
  resp.send(data);
});

app.post("/register", async (req, resp) => {
  let newuser = User(req.body);
  let result = await newuser.save();

  resp.send("User Registered Successfully.Now Login to Continue");
});
app.post("/login", async (req, resp) => {
  // let newuser  = User(req.body);
  // let result =await newuser.save();

  // resp.send(result);

  const { email, password } = req.body;
  const user = await User.findOne({ email: email, password: password });
  if (user) {
    const temp = {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      _id: user._id,
    };
    resp.send(temp);
  } else {
    return resp.status(400).json({ message: "login failed" });
  }
});

app.post("/bookroom", async (req, res) => {
  const {
    room,
    userid,
    username,
    fromdate,
   
    todate,
    totalamount,
    totaldays,
   
  } = req.body;

// try {
//     stripe.customers.create({
//         email:CancellationToken,
//         source:token.id
//     }).then((customer)=>{
//         return stripe.charges.create({
//             amount:totalamount,
//             currency:'INR',
//             customer:customer.id
//         });
//     }).then((charge)=>{
        
//     })
// } catch (error) {
    
// }




     const newbooking = new Booking({
      room: room.name,
      roomid: room._id,
      userid,
      username,
      fromdate,
      todate,
      totalamount,
      totaldays,
      transactionid: "12345",
    });

    const booking = await newbooking.save();
    res.send("Room Booked Successfully");
    
    const roomtemp = await Products.findOne({ _id: room._id });
    roomtemp.currentbooking.push({
      bookingid: booking._id,
      fromdate,
      todate,
      userid: userid,
      username: booking.username,
   
      status: booking.status,
    });
    await roomtemp.save();
  }

);
app.post("/getroombyuserid", async (req, resp) => {
  const userid = req.body.userid;

  const bookings = await Booking.find({ userid : userid});
  resp.send(bookings);
});


app.post("/cancelbooking" ,async(req ,resp)=>{
  const{bookingid , roomid} = req.body;

  const bookingss = await Booking.findOne({_id:bookingid})
  
 bookingss.status = 'cancelled';
//  console.log(bookingss);
let result  = await bookingss.save();

 const room = await Products.findOne({_id:roomid})



const bookings = room.currentbooking;

const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)
room.currentbooking = temp
console.log(temp);
await room.save()
 
resp.send('booking cancelled');
})


const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// const {MongoClient} = require('mongodb');

// const url  = 'mongodb://127.0.0.1:27017';

// const client = new MongoClient(url);

//  async function getData (){
//     let result = await client.connect();
//   let db =  result.db('Hotel-Room')
//   let collection = db.collection('Rooms');
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }

// getData();
