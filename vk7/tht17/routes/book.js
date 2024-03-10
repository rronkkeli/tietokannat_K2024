const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/', (req, res) => {
    book.getAll((err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/:id', (req, res) => {
    book.get(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.post('/', (req, res) => {
    book.add(req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.put('/:id', (req, res) => {
    book.update(req.params.id, req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.delete('/:id', (req, res) => {
    book.delete(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

module.exports = router;