require("dotenv/config")

const {env} = process;

const config = {
    user: env.USER,
    host: env.HOST,
    password: env.PASSWORD,
    database: env.DATABASE,
    port: env.PORT
}

module.exports = config