// Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/User')
// const userSession = require('./login');
const Project = require('../models/Project')
const userSession = require('../routes/login');


var userCurrent= "";

/* GET ALL PROJECTS */
router.get('/allprojects', (req, res) => {
  Project.find((error, projects) => {
      if (error) res.send(error);
      res.json(project);
  });
});
/* GET SINGLE PROJECT BY ID */

router.get('/myProjects', (req, res) => {
  let id = req.get('userId');
  Project.find({ userId: id }, (error, projects) => {
      if (error) res.send(error);
      res.json(projects);
  })
})

/* SAVE PROJECT */
router.post('/addproject', function(req, res) {
  let addProjectData = req.body;
  let project = new Project(addProjectData);
  project.username = userCurrent;
  project.save((err, projectAdd) => {
    if (err) {
      console.log(err);
    } 
    else {
        res.status(200).send(project)
      }
    })
  })



/* UPDATE PROJECT */
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}),

/* DELETE PROJECT */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;