const Stock = require('../models/stockModel');


const getStock = async (req, res) => {
    const { Name } = req.body;
  
    const Stocks = await Stock.find({ Name: Name });
    
    try {
        if (Stocks) {
            res.status(201).json({
              Stocks
            });} 
            else {
                // res.status(401);
                res.status(401).send({message: "Invalid Email or Password"});
              }
    } catch (error) {
        res.status(500).json({message: error});
    }

  };
  
  module.exports = { getStock };