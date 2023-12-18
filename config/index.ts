require('dotenv').config();
import joi from 'joi';


export const isDev = process.env.NODE_ENV === 'dev';
export const isTest = process.env.NODE_ENV === 'test';
// console.log('isTest? : ', isTest);
// console.log('well then , what is is? : ', process.env.NODE_ENV);
// console.log('=======')
// console.log('does test === test? I think it should', process.env.NODE_ENV === 'test')
export const chooseConnection = isDev ? process.env.DEV_MONGO : isTest ? process.env.DEV_MONGO : process.env.MONGODB_URI;
// console.log('chosen connection string for mongoDB: ', chooseConnection);
// export const chooseConnection = 'mongodb://localhost/booksDb';



const envVarsSchema = joi
    .object()
    .keys({

        COOKIE_PARSER_SECRET_CODE: joi.string().required(),
        DEV_MONGO: joi.string().required(),
        FRONT_END_ORIGIN_URL: joi.string().required(),
        JWT_SECRET: joi.string().required(),
        LOG_LEVEL: joi.string().valid("silent", "trace", "debug", "info", "warn", "error").required(),
        PORT: joi.number().positive().required(),
        MONGODB_URI: joi.string().required(),

        TEST_USERNAME: joi.string().required(),
        TEST_PASSWORD: joi.string().required(),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);


if (error) {
    throw new Error(`Env variables validation error: ${error.message}`);
} else {
    if (process.env.NODE_ENV !== 'test') {
        // console.log('Env variables validation passed successfully!');
        // console.log('node env is: ', process.env.NODE_ENV);
    }
}


const config = {
    isDev,
    chooseConnection,
    NODE_ENV: process.env.NODE_ENV || "",


    COOKIE_PARSER_SECRET_CODE: envVars.NODE_ENV,
    DEV_MONGO: envVars.NODE_ENV,

    FRONT_END_ORIGIN_URL: envVars.FRONT_END_ORIGIN_URL,
    JWT_SECRET: envVars.JWT_SECRET,
    LOG_LEVEL: envVars.LOG_LEVEL,
    PORT: envVars.PORT,
    MONGODB_URI: envVars.MONGODB_URI,

    TEST_USERNAME: envVars.TEST_USERNAME,
    TEST_PASSWORD: envVars.TEST_PASSWORD
};


export default config;