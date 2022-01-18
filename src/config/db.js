const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    port: process.env.DBPORT
});

