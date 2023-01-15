const express = require('express');
// const Stock = require('../models/stockModel');
// const config = require('../config');

const router = express.Router();
const csvtojson = require("csvtojson");

// router.post('/add', async(req,res)=>{
//     csvtojson()
//     .fromFile("./updated_data/ASHOKLEY.csv")
//     .then(csvData =>{
//         console.log(csvData);
//         Stock.insertMany(csvData).then(function(){
//             console.log("Data inserted")  // Success
//         }).catch(function(error){
//             console.log(error)      // Failure
//         });
//     });
// });

// router.get('/', async(req,res)=>{
//     try {
//         const stocks = await Stock.find({Name : "ASHOKLEY"});
//         res.send(stocks);    
//         console.log("YAY"); 
//     } catch (error) {
//      console.log(error);   
//     }
    
// })


// module.exports = router;


// const express = require("express");
const {
  getStock,
  // authUser
  // allUsers,
} = require("../controllers/stock");
// const { protect } = require("../middleware/authMiddleware");


// router.route("/").get(protect, allUsers);
router.route("/").post(getStock);
// router.post("/login", authUser);

module.exports = router;
