const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'crud',
    password: 'crud',
    database: 'crud'
});

module.exports = connection;