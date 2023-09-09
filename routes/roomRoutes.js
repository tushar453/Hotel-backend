const express = require("express");
const router  = express.Router();


const room  = require('../db');



router.get("/getrooms" , async(req , resp)=>{
    try {
        const  rooms = await room.find({rooms})
       resp.send(rooms);
    } catch (error) {
        return resp.status(400).json({message:error})}
});

module.exports  = router;