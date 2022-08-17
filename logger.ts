import pino from 'pino';

console.log("log level for pino is: ", process.env.LOG_LEVEL);

const logger = pino({
    level: process.env.LOG_LEVEL || "info"
});

export default logger;