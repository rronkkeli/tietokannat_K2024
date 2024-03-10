const db = require('../mods/database');

const borrower = {
    getAll: (callback) => {
        let sql = 'SELECT * FROM borrower';
        return db.query(sql, callback);
    },

    get: (id, callback) => {
        let sql = 'SELECT * FROM borrower WHERE id_borrower = ?';
        return db.query(sql, [id], callback);
    },

    add: (borrower, callback) => {
        let sql = 'INSERT INTO borrower VALUES (NULL, ?, ?, ?)';
        return db.query(sql, [borrower.fname, borrower.lname, borrower.streetaddress], callback);
    },

    update: (id, borrower, callback) => {
        let sql = 'UPDATE borrower SET fname = ?, lname = ?, streetaddress = ? WHERE id_borrower = ?';
        return db.query(sql, [borrower.fname, borrower.lname, borrower.streetaddress, id], callback);
    },

    delete: (id, callback) => {
        let sql = 'DELETE FROM borrower WHERE id_borrower = ?';
        return db.query(sql, [id], callback);
    }
};

module.exports = borrower;