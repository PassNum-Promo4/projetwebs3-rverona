// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var projectSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    publicationDate: String,
    genre: String
});

// Return model
module.exports = restful.model('project', projectSchema);