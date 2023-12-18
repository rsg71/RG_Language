import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: String,
    title: String
});

const Book = mongoose.model("Book", bookSchema);


export default Book;