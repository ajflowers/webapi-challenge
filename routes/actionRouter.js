const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.post('/', (req, res) => {
    const newAction = req.body;
    
    Actions.insert(newAction)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error adding action', error: err });
        });
});

router.get('/', (req, res) => {
    Actions.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error retrieving actions', error: err });
        });
});

router.put('/:id', (req, res) => {
    const actionID = req.params.id;
    const newInfo = req.body;
    
    Actions.update(actionID, newInfo)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error updating action', error: err });
        });
});

router.delete('/:id', (req, res) => {
    const actionID = req.params.id;

    Actions.remove(actionID)
        .then(count => {
            if(count) {
                res.status(200).json({ message: `deleted action ID ${actionID}`});
            } else {
                res.status(500).json({ message: 'error deleting action' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'error deleting action', error: err })
        });
});

module.exports = router;