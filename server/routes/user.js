// Dependencies
const express = require('express');
const router = express.Router();

// Models
const Project = require('../models/Project');

// Routes Projects
Project.methods(['get', 'put', 'post', 'delete']);
Project.register(router, '/projects');


// USER MODEL
const User = require('../models/User');

// Routes Users
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/user');



module.exports = router;