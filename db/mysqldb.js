const mysql = require('mysql2/promise')
/*
module.exports =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'smartcities'
})*/

module.exports =  mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})