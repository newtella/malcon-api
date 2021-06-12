const moongose = require('mongoose');

const userSchema = moongose.Schema({
    fullname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Admin'
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = moongose.model('User', userSchema);