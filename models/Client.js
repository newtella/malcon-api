const moongose = require('mongoose');

const clientSchema = moongose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        min: 8
    },
    state: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'state'
    },
    city: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'city'
    },
    address: {
        type: String,
        max: 1024
    }
});

module.exports = moongose.model('Client', clientSchema);