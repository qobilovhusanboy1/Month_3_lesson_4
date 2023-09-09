const { Pool } = require("pg")

const config = require("../../config")

const pool = new Pool({
    user: config.user,
    host: config.host,
    password: config.password,
    database: config.database,
    port: config.port    
});

async function fetChall (SQL, param = []) {
    const client = await pool.connect();
    const {rows} = await client.query(SQL, param);
    return rows;
}

module.exports = { fetChall };