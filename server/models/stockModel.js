const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    Date : {
        type : String,
    } , 
    Open : {
        type : String,
    },
    Close : {
        type : String,
    },
    High : {
        type : String,
    },
    Low : {
        type : String,
    },
    AdjClose : {
        type : String,
    },
    Volume :{
        type : String,
    }
    
    
})

module.exports = mongoose.model('Stock', stockSchema);