const mongoose = require('mongoose');

// schema
const schema = mongoose.Schema;
const customerSchema = new schema({

    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
  
    dateOfBirth: {
        type: String,
        default: Date.now()
    }
})

// Model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
