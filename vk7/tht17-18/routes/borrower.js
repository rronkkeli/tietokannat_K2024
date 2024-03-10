const express = require('express');
const router = express.Router();
const borrower = require('../models/borrower_model');

router.get('/', (req, res) => {
    borrower.getAll((err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/:id', (req, res) => {
    borrower.get(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.post('/', (req, res) => {
    borrower.add(req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.put('/:id', (req, res) => {
    borrower.update(req.params.id, req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.delete('/:id', (req, res) => {
    borrower.delete(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

module.exports = router;