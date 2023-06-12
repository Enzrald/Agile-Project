const mongoose = require('mongoose');

// schema
const schema = mongoose.Schema;
const employeeSchema = new schema({

    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: String,
        default:  Date.now()
    }
})

// Model
const Emmployee = mongoose.model('Emmployee', employeeSchema);

module.exports = Emmployee;
