const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error retrieving projects', error: err });
        })
})

router.post('/', (req, res) => {
    newProject = req.body;s

    Projects.insert(newProject)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'error adding project', error: err });
        })
})

router.put('/:id', (req, res) => {
    projectID = req.params.id;
    newInfo = req.body;

    Projects.update(projectID, newInfo)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'error updating project', error: err })
        })
})

router.delete('/:id', (req, res) => {
    projectID = req.params.id;

    Projects.remove(projectID)
        .then(count => {
            if(count) {
                res.status(200).json({ message: `deleted project ID ${projectID}`});
            } else {
                res.status(500).json({ message: 'error deleting project' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'error deleting project', error: err })
        })
})

module.exports = router;