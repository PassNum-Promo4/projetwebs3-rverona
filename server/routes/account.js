// Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/User')



// Routes Users
User.methods(['get', 'put', 'post', 'delete']);

//DELETE ACCOUNT 
router.delete('/account', (req, res) => {
    let userId = req.get('userId');
    User.deleteOne({ _id: userId }, function (err, res) {
        if (err) handleError(err);
        res.status(201);
    });
})

// EDIT ACCOUNT

router.put('/account', (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, res) {
        if (err) res.send(err);
        res.status(201)
    });
});
module.exports = router;