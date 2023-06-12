const mongoose = require('mongoose');

// schema
const schema = mongoose.Schema;
const receiptSchema = new schema({

    customer: {
        type: Array,
        required: true,
    },
    employee : {
        type: Array,
        required: true,
    },
    date: {
        type: String,
        default: Date.now()
    },
    product: { 
        type: Array,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    sale:{
        type : Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
    }
    

  
})

// Model
const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
