const Pool = require('pg').Pool // this is a package that allows us to connect to a postgres database
require('dotenv').config() // this is a package that allows us to use environment variables

const pool = new Pool({ // this is the connection to the database
    // process is a global variable that is available in node
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: 'todoapp'
})

// pool.password = typeof pool.password == undefined ? " " : pool.password

module.exports = pool