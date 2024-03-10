const db = require('../mods/db_rekisteri');

const arvioinnit = {
    addStudent: (student, callback) => {
        let sql = 'INSERT INTO opiskelija VALUES (NULL, ?, ?, ?, ?)';
        db.query(sql, [student.fname, student.lname, student.address, student.classId], callback);
    },

    getStudents: (callback) => {
        let sql = 'SELECT * FROM opiskelija';
        db.query(sql, callback);
    },

    getStudent: (id, callback) => {
        let sql = 'SELECT * FROM opiskelija WHERE idOpiskelija=?';
        db.query(sql, [id], callback);
    },
    
    updateStudent: (id, student, callback) => {
        let sql = 'UPDATE opiskelija SET Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? WHERE idOpiskelija=?';
        db.query(sql, [student.fname, student.lname, student.address, student.classId, id], callback);
    },

    deleteStudent: (id, callback) => {
        let sql = 'DELETE FROM opiskelija WHERE idOpiskelija=?';
        db.query(sql, [id], callback);
    },

    addCourse: (course, callback) => {
        let sql = 'INSERT INTO opintojakso VALUES (NULL, ?, ?, ?)';
        db.query(sql, [course.code, course.size, course.name], callback);
    },

    getCourse: (id, callback) => {
        let sql = 'SELECT * FROM opintojakso WHERE idOpintojakso=?';
        db.query(sql, [id], callback);
    },

    getCourses: (callback) => {
        let sql = 'SELECT * FROM opintojakso';
        db.query(sql, callback);
    },

    updateCourse: (id, course, callback) => {
        let sql = 'UPDATE opintojakso SET Koodi=?, Laajuus=?, Nimi=? WHERE idOpintojakso=?';
        db.query(sql, [course.code, course.size, course.name, id], callback);
    },

    deleteCourse: (id, callback) => {
        let sql = 'DELETE FROM opintojakso WHERE idOpintojakso=?';
        db.query(sql, [id], callback);
    },

    addReport: (report, callback) => {
        let sql = 'INSERT INTO arviointi VALUES (NULL, ?, ?, ?, ?)';
        db.query(sql, [report.date, report.grade, report.student, report.course], callback);
    },

    getReport: (id, callback) => {
        let sql = 'SELECT * FROM arviointi WHERE idArviointi=?';
        db.query(sql, [id], callback);
    },

    getReports: (callback) => {
        let sql = 'SELECT * FROM arviointi';
        db.query(sql, callback);
    },

    updateReport: (id, report, callback) => {
        let sql = 'UPDATE arvioiti SET Paivamaara=?, Arvosana=?, idOpiskelija=?, idOpintojakso=? WHERE idArviointi=?';
        db.query(sql, [report.date, report.grade, report.student, report.course, id], callback);
    },

    deleteReport: (id, callback) => {
        let sql = 'DELETE FROM arviointi WHERE idArviointi=?';
        db.query(sql, [id], callback);
    }
};

module.exports =  arvioinnit;