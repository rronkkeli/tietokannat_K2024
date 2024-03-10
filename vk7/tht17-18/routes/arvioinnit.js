const express = require('express');
const router = express.Router();
const arvioinnit = require('../models/arvioinnit_model');

router.get('/student', (req, res) => {
    arvioinnit.getStudents((err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/student/:id', (req, res) => {
    arvioinnit.getStudent(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.post('/student', (req, res) => {
    arvioinnit.addStudent(req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.put('/student/:id', (req, res) => {
    arvioinnit.updateStudent(req.params.id, req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.delete('/student/:id', (req, res) => {
    arvioinnit.deleteStudent(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/course', (req, res) => {
    arvioinnit.getCourses((err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/course/:id', (req, res) => {
    arvioinnit.getCourse(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.post('/course', (req, res) => {
    arvioinnit.addCourse(req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.put('/course/:id', (req, res) => {
    arvioinnit.updateCourse(req.params.id, req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.delete('/course/:id', (req, res) => {
    arvioinnit.deleteCourse(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/report', (req, res) => {
    arvioinnit.getReports((err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.get('/report/:id', (req, res) => {
    arvioinnit.getReport(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.post('/report', (req, res) => {
    arvioinnit.addReport(req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.put('/report/:id', (req, res) => {
    arvioinnit.updateReport(req.params.id, req.body, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

router.delete('/report/:id', (req, res) => {
    arvioinnit.deleteReport(req.params.id, (err, dbResult) => {
        if (err) {
            res.json(err);
        } else {
            console.log(dbResult);
            res.json(dbResult);
        }
    })
});

module.exports = router;