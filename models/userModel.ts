import mongoose from "mongoose";


export interface IWordsLearned {
    number: number;
    word: string;
    translation: string;
    answeredCorrectly: boolean;
    lastDateAnsweredCorrectly: Date;
    instancesWordHasBeenSeen: number;
    nextReviewDate: Date;
}

export interface UserModelInterface {
    language: String,
    wordsLearned: IWordsLearned[],
    userId: String // an id really
}

const wordGroupSchema = new mongoose.Schema<UserModelInterface>({

    language: String,
    wordsLearned: [
        {
            number: Number,
            word: String,
            translation: String,
            answeredCorrectly: Boolean,
            lastDateAnsweredCorrectly: Date,
            instancesWordHasBeenSeen: Number,
            nextReviewDate: Date
        }
    ],
    userId: String // an id really

});

const WordGroup = mongoose.model("WordGroup", wordGroupSchema);


export interface IWordGroup extends mongoose.Document {
    _id: string;
    language: string,
    wordsLearned: IWordsLearned[],
    userId: string // an id really
}

export interface IWordGroupModel extends mongoose.Model<IWordGroup> { }

export default WordGroup;
