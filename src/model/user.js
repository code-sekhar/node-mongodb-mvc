const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model('user', UserSchema);
