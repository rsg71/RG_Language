import mongoose from "mongoose";
import config from './config/index';
import ExpressLoader from './loaders/Express'

require('dotenv').config();


const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}



// Connect to Mongoose --- //
mongoose.connect(config.chooseConnection || "", mongooseOptions)
    .then((res: any) => {
        console.log("connected successfully to: ", res.connections[0]._connectionString)
        console.log("mongodb is successfully connected ✔");

        // load Express instance
        new ExpressLoader();
    })
    .catch((err: any) => console.log("err!: ", err));

