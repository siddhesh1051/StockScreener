const express = require('express');
const Stock = require('../models/stockModel');
// const config = require('../config');

const router = express.Router();
const csvtojson = require("csvtojson");

router.post('/add', async(req,res)=>{
    csvtojson()
    .fromFile("./TATASTEEL.NS.csv")
    .then(csvData =>{
        console.log(csvData);
        Stock.insertMany(csvData).then(function(){
            console.log("Data inserted")  // Success
        }).catch(function(error){
            console.log(error)      // Failure
        });
    });
});

router.get('/', async(req,res)=>{
    try {
        const stocks = await Stock.findOne({Open : "73.55127"});
        res.send(stocks);    
        console.log("YAY");
    } catch (error) {
     console.log(error);   
    }
    
})


module.exports = router;