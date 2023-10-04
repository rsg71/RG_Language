import config from './';

export const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}


export const dbConnectionString = config.chooseConnection || "";