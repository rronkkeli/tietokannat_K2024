const db = require('../mods/database');

const book = {
    getAll: (callback) => {
        let sql = 'SELECT * FROM book';
        return db.query(sql, callback);
    },

    get: (id, callback) => {
        let sql = 'SELECT * FROM book WHERE id_book = ?';
        return db.query(sql, [id], callback);
    },

    add: (book, callback) => {
        let sql = 'INSERT INTO book VALUES (NULL, ?, ?, ?)';
        return db.query(sql, [book.name, book.author, book.isbn], callback);
    },

    update: (id, book, callback) => {
        let sql = 'UPDATE book SET name = ?, author = ?, isbn = ? WHERE id_book = ?';
        return db.query(sql, [book.name, book.author, book.isbn, id], callback);
    },

    delete: (id, callback) => {
        let sql = 'DELETE FROM book WHERE id_book = ?';
        return db.query(sql, [id], callback);
    }
};

module.exports = book;