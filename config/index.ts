require('dotenv').config();

export let isDev = process.env.NODE_ENV === 'dev';

export let chooseConnection = isDev ? process.env.DEV_MONGO : process.env.MONGODB_URI;


const config = {
    isDev,
    chooseConnection
}


export default config;