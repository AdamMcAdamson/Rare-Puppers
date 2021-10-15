const { Pool } = require('pg')

const pool = new Pool({connectionString: process.env.PGDATABASEURL || require('../private/dbAccess')})

module.exports = {
    query: (text, params) => pool.query(text, params),
}