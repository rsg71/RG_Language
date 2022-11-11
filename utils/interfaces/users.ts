import mongoose from 'mongoose';


export interface UserRequestInterface {
    username: string;
    id: string;
}



export interface IWordsLearned {
    number: number;
    word: string;
    translation: string;
    answeredCorrectly: boolean;
    lastDateAnsweredCorrectly: Date;
    instancesWordHasBeenSeen: number;
    nextReviewDate: Date;
}


export interface IWordGroup extends mongoose.Document {
    _id: string;
    language: string,
    wordsLearned: IWordsLearned[],
    userId: string // an id really
}

export interface IWordGroupModel extends mongoose.Model<IWordGroup> { }