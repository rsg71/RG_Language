import pino from 'pino';
import config from './config';

console.log("log level for pino is: ", config.LOG_LEVEL);

const logger = pino({
    level: config.LOG_LEVEL || "info"
});

export default logger;