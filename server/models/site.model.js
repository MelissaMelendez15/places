const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siteSchema = new Schema({

    name: {
        required: true,
        type: String
    }, 

    service: {
        required: true,
        type: [String]
    },

    description: {
        type: String
    },
    
    location: {
        address: String,
        lat: String,
        lng: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    rate: {
        type: Number
    },

    price: {
        type: String,
        enum: ['€', '€€', '€€€', '€€€€']
    },

    comments: {
        type: []
    }, 

    imageUrl: String

},
{
    timestamps: true
})

const Site = mongoose.model('Site', siteSchema)

module.exports = Site