// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String
    // registerDate: String,
    // bio: String
});

// Return model
module.exports = restful.model('User', userSchema);