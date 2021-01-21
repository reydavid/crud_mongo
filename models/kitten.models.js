const mongoose = require('mongoose')

const kittyRegistration = new mongoose.Schema({
color:  {
    type: String
    },
weight: {
    type: String
    },
adopted: {
    type:Boolean
    }
})

module.exports = mongoose.model('Kitty', kittyRegistration);