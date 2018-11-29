const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

// Use Schema 
const AdminSchema = mongoose.Schema ( {
    name: {
        type: String
    },
    username: {
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        required: true 
    }
});

const User = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}