// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models/db.js');

// Create a new comment
router.post('/', function(req, res) {
    var comment = req.body;
    db.saveComment(comment, function(err, comment) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(comment);
        }
    });
});

// Get all comments
router.get('/', function(req, res) {
    db.getComments(function(err, comments) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comments);
        }
    });
});

// Get a comment by id
router.get('/:id', function(req, res) {
    var id = req.params.id;
    db.getCommentById(id, function(err, comment) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comment);
        }
    });
});

// Update a comment by id
router.put('/:id', function(req, res) {
    var id = req.params.id;
    var comment = req.body;
    db.updateComment(id, comment, function(err, comment) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comment);
        }
    });
});

// Delete a comment by id
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    db.deleteComment(id, function(err, comment) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comment);
        }
    });
});

module.exports = router;