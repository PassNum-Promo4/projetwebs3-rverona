const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Project = require('../models/Project')


// Create router for login or sign-in.

router.post('/login', (req, res) => {//I know a login must be done with a get method, but for the moment it only work with a post, I will change that soon
    let userData = req.body;
    User.findOne({ username: userData.username }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid username');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password');

                } else {
                    res.status(200).send(user);
                }
            }
        }
    })
})


  module.exports = router