import Joi from "joi";


const validLanguagesArr: string[] = ['french', 'spanish', 'portuguese', 'italian', 'swedish'];

const language = Joi.string().valid(...validLanguagesArr).required();
const userId = Joi.string().hex().length(24).required()



// Schemas:

const addLanguageSchema = Joi.object({
    language: language,
    userId: userId
});

const getLanguageDataForUserSchema = Joi.object({
    username: Joi.string().required(),
    language: language
});

const findAllLanguagesForThisUserSchema = Joi.object({
    userId: userId
});

const answerCorrectlySchema = Joi.object({
    word: Joi.string().required(),
    language: language,
    userId: userId
});

const answerIncorrectlySchema = Joi.object({
    word: Joi.string().required(),
    language: language,
    userId: userId
});

const findAllUnlearnedWordsForGivenLanguageForUserSchema = Joi.object({
    language: language,
    userId: userId
});

const getWordsForReviewForLanguageForUserSchema = Joi.object({
    language: Joi.string().valid(...validLanguagesArr).required(),
    userId: userId
});





const validationSchemas = {

    addLanguageSchema,
    getLanguageDataForUserSchema,
    findAllLanguagesForThisUserSchema,

    answerCorrectlySchema,
    answerIncorrectlySchema,

    findAllUnlearnedWordsForGivenLanguageForUserSchema,
    getWordsForReviewForLanguageForUserSchema
};

export default validationSchemas;