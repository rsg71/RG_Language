import pino from 'pino';
import config from './config';

if (config.NODE_ENV !== 'test') {
    console.log("log level is: ", config.LOG_LEVEL, ' and NODE_ENV is : ', process.env.NODE_ENV);

}

const logger = pino({
    level: config.LOG_LEVEL || "silent"
});

export default logger;