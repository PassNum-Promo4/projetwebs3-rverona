// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const register_router = require('./routes/register');
const user_router = require('./routes/user');
const login_router = require('./routes/login');
const project_router = require('./routes/project');
const cors = require('cors');
const Project = require('./models/Project')
const account_router = require('./routes/account')

// MongoDB mlab database
const db = 'mongodb://agoractylo:promo4@ds016098.mlab.com:16098/agoractylo';

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
})

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(cors());
app.use('/api', user_router);
app.use('/api', register_router);
app.use('/api', login_router);
app.use('/api', project_router);
app.use('/api', account_router);



// Start server
app.listen(3000);
console.log('Listening on port 3000...');
