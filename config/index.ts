require('dotenv').config();

export let isDev = process.env.NODE_ENV === 'dev';

export let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;


const config = {
    isDev,
    chooseConnection,
    NODE_ENV: process.env.NODE_ENV || "",
    PORT: process.env.PORT || "",
    LOG_LEVEL: process.env.LOG_LEVEL || "",
    FRONT_END_ORIGIN_URL: process.env.FRONT_END_ORIGIN_URL || "",
    COOKIE_PARSER_SECRET_CODE: process.env.COOKIE_PARSER_SECRET_CODE || "",
    DEV_MONGO: process.env.DEV_MONGO || "",
    MONGODB_URI: process.env.MONGODB_URI || "",
}


export default config;