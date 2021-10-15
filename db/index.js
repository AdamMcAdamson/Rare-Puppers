const { Pool } = require('pg')

const devConnection = require('../private/dbAccess')

const pool = new Pool({connectionString: process.env.PGDATABASEURL || devConnection})

module.exports = {
    query: (text, params) => pool.query(text, params),
}