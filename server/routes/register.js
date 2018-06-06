// Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/User')

//Create router for signup or register the new user.

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser)
        }
    })
})
module.exports = router