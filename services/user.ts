import { determineSeedToUse } from '../utils/seederFunctions';
import logger from '../logger';
import db from '../models';
import { getDateXDaysAgo, getDateXDaysAhead } from '../utils/helperFunctions';


const UserCollection = db.UserCollection;


export default class UserService {

    public async FindLanguage(language: string, userId: string) {
        try {
            const languageFound = await UserCollection.find({ language, userId });
            console.log("languageFound is: ", languageFound);
            return languageFound;
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async FindAllLanguagesForUser(userId: string) {
        try {
            const allLanguageForUser = await db.UserCollection.find({ userId: userId });
            return allLanguageForUser
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async CreateUserLanguage(newLanguageForUser: any) {
        try {
            const newLanguageCreated = await UserCollection.create(newLanguageForUser);
            console.log('newLangauge: ', newLanguageCreated);
            const wordsLength = newLanguageForUser.wordsLearned!.length;
            logger.info(`inserted ${newLanguageForUser.language} for this user with ${wordsLength} words`);
            return newLanguageCreated;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public assembleNewLanguageForUser(newLanguage: any, userId: string) {
        let newUserLanguage = {
            language: newLanguage,
            wordsLearned: determineSeedToUse(newLanguage),
            userId: userId // an id really
        }
        return newUserLanguage;
    }


    public async validateAndCreateLanguageForUser(languageToFind: any, userId: string) {
        try {
            const newUserLanguage = this.assembleNewLanguageForUser(languageToFind, userId)
            console.log("newUserLanguage: ", newUserLanguage);

            // call to service layer
            // Abstraction on how to access the data layer and the "business" logic
            const languageFound = await this.FindLanguage(languageToFind, userId);
            console.log("languageFound is: ", languageFound);

            if (languageFound.length > 0) {
                throw new Error("language already exists")
            } else {
                logger.debug("languageFound is: ", languageFound);

                const newLanguage = this.CreateUserLanguage(newUserLanguage);
                return newLanguage;
            }
        } catch (err: any) {
            logger.error(err);
            throw new Error(err.message);
        }
    }

    public async answerWordCorrectly(user: any, wordToLookFor: string, language: string) {
        try {

            if (user.id === undefined) {
                return new Error('no user found');
            }

            const filter = { userId: user.id, language: language };
            const targetLanguageForUser = await db.UserCollection.find(filter);
            console.log("targetLanguageForUser: ", targetLanguageForUser);


            // finding the word obj within the wordsLearned array for this user
            const wordToUpdateObj = targetLanguageForUser[0].wordsLearned.find((item: any) => item.word === wordToLookFor);
            const indexOfWordToUpdate = (targetLanguageForUser[0].wordsLearned.findIndex((item: any) => item.word === wordToLookFor)) + 1;

            let instances = wordToUpdateObj.instancesWordHasBeenSeen;

            // also if you got the word wrong in the session, you need to see it again until you get it right

            let nextReviewDate;
            const today = new Date();


            if (instances === 0) {
                // instance 0: see word, gets correct
                // - next time seeing word: 1 days later
                nextReviewDate = getDateXDaysAhead(1, today);
            } else if (instances === 1) {
                // instance 1: see word, gets correct
                // - next time seeing word: 5 days later
                nextReviewDate = getDateXDaysAhead(5, today);
            } else if (instances === 2) {
                // instance 2: see word, gets correct
                // - next time seeing word: 12 days later
                nextReviewDate = getDateXDaysAhead(12, today);
            } else if (instances === 3) {
                // instance 3: see word, gets correct
                // - next time seeing word: 28 days later
                nextReviewDate = getDateXDaysAhead(28, today);
            } else if (instances > 3) {
                // If answered correctly 4 times already, 
                // - next time seeing word: 45 days later
                nextReviewDate = getDateXDaysAhead(45, today);
            }


            console.log('nextReviewDate: ', nextReviewDate);

            await db.UserCollection.updateOne(
                {
                    userId: user.id, language: language, "wordsLearned.word": wordToLookFor // note that all three of these are used to narrow down the object within the document that we want to update (the nth object in the wordsLearned array). What happens here is the first two filters lock down the document itself. The wordsLearned.word loops through each word (element) in the wordsLearned array. If it finds the word we are looking for, it carries on in the update function to the next section ($set);
                },
                // here we need to set new values for several fields
                {
                    "$set": {
                        "wordsLearned.$.answeredCorrectly": true,
                        "wordsLearned.$.lastDateAnsweredCorrectly": new Date(),
                        "wordsLearned.$.instancesWordHasBeenSeen": instances++,
                        "wordsLearned.$.nextReviewDate": nextReviewDate
                    }
                },
                {
                    new: true
                }
            )

            return 'language updated successfully with correctly answered word';

        } catch (err: any) {
            throw new Error(err.message)
        }

    }

    public async answerWordIncorrectly(user: any, wordToLookFor: string, language: string) {
        try {


            if (user.id === undefined) { return new Error('no user') };

            const filter = { userId: user.id, language: language };
            const targetLanguageForUser = await db.UserCollection.find(filter);
            console.log("targetLanguageForUser: ", targetLanguageForUser);


            // finding the word obj within the wordsLearned array for this user
            const wordToUpdateObj = targetLanguageForUser[0].wordsLearned.find((item: any) => item.word === wordToLookFor);
            const indexOfWordToUpdate = (targetLanguageForUser[0].wordsLearned.findIndex((item: any) => item.word === wordToLookFor)) + 1;
            console.log("\nwordToUpdateObj is: ", wordToUpdateObj);
            console.log("\nindexOfWordToUpdate is: ", indexOfWordToUpdate);

            let instances = wordToUpdateObj.instancesWordHasBeenSeen;
            console.log("\ninstances: ", instances);
            console.log("\ninstances++: ", instances++);


            let nextReviewDate;
            const today = new Date();


            // see word, gets incorrect
            // - next time seeing word: 2 days later (every time for now. May modify going forward)
            nextReviewDate = getDateXDaysAhead(1, today);
            console.log('nextReviewDate: ', nextReviewDate);

            await db.UserCollection.updateOne(
                {
                    userId: user.id, language: language, "wordsLearned.word": wordToLookFor // note that all three of these are used to narrow down the object within the document that we want to update (the nth object in the wordsLearned array). What happens here is the first two filters lock down the document itself. The wordsLearned.word loops through each word (element) in the wordsLearned array. If it finds the word we are looking for, it carries on in the update function to the next section ($set);
                },
                // here we need to set new values for several fields
                {
                    "$set": {
                        "wordsLearned.$.nextReviewDate": nextReviewDate,
                        "wordsLearned.$.instancesWordHasBeenSeen": instances++
                    }
                },
                {
                    new: true
                }
            )

            return 'finished updating word as having been answered incorrectly';

        } catch (err: any) {
            throw new Error(err.message)
        }



    }

    public async findAllUnlearnedWordsForGivenLanguageForUser(user: any, language: string) {
        logger.debug(`finding all unlearned ${language} words for user...`);

        try {
            let userId = user.id;

            let unlearnedWordsFilter = { userId: userId, language: language, lastDateAnsweredCorrectly: null }

            let words = await db.UserCollection
                .find(unlearnedWordsFilter)
            // .aggregate([
            //     {
            //         $project: {
            //             language: 1,
            //             userId: 1,
            //             wordsLearned: {
            //                 $slice: ["$wordsLearned", 10]
            //             }
            //         }
            //     }
            // ])
            logger.debug('found unlearned words for user...');
            console.log("unlearned words: ", words);

            if (words.length === 0) {
                logger.debug('user has no words to review at this time');
                return words;
            }

            let base = words[0];
            console.log("baseis: ", base);
            let sliced = { ...base, wordsLearned: base.wordsLearned.filter((word: any) => word.answeredCorrectly === false).slice(0, 15) } // for now, doing automatically up to 15 words in a quiz at a time. Might make this selectable by the user first.

            console.log("sliced: ", sliced);
            return sliced;

        } catch (err: any) {
            logger.error(err);
            throw new Error(err.message);
        }
    }

    public async getWordsForReviewForLanguageForUser(user: any, language: string) {
        console.log(`finding all reviewable ${language} words for user...`);
        try {
            const userId = user.id;

            // the date to look for should be x number of days in the past

            // find all words that have a lastDateAnsweredCorrectly where the value (the date) is more than X # of days ago.

            // let date_to_look_for = new Date(2022, 05, 26, 20, 36, 8);

            const date_to_look_for = getDateXDaysAgo(2);


            console.log("==================================");
            console.log("date_to_look_for is: ", date_to_look_for);
            console.log("==================================");

            // ^ I want to get everything before this date. 

            const filter_for_past_certain_date = {
                userId: userId,
                language: language,
                // "wordsLearned.lastDateAnsweredCorrectly": { $lte: date_to_look_for }
            }

            const words = await db.UserCollection.find(filter_for_past_certain_date);
            console.log("words: ", words);

            const arrAllWords = words[0].wordsLearned;

            const wordsToReview = arrAllWords.filter((wordObj: any) => {
                let { lastDateAnsweredCorrectly: lastDate } = wordObj;
                if (lastDate === null) { return false }
                else {
                    console.log("lastDate: ", lastDate);
                    if (lastDate < date_to_look_for) {
                        console.log("==> ", lastDate, " IS LESS than", date_to_look_for)
                        return true
                    } else {
                        console.log(lastDate, " is NOT LESS than", date_to_look_for)
                        return false
                    }

                }
            });
            console.log("wordsToReview: ", wordsToReview);

            return wordsToReview;

            // db.UserCollection.aggregate([
            //     {
            //         $project: {
            //             wordsLearned: {
            //                 $filter: {
            //                     input: "$wordsLearned",
            //                     as: "item",
            //                     cond: { $lte: ["$$item.lastDateAnsweredCorrectly", date_to_look_for] }
            //                 }
            //             }
            //         }
            //     }
            // ])

            // db.UserCollection
            //     .find(filter_for_past_certain_date)
            // .then(words => {
            //     console.log('found all words for review');
            //     console.log(words);
            //     res.json(words[0]);
            //     console.log('sent')
            // })
            // .catch((err: any) => {
            //     console.log(err);
            //     res.status(422).json(err)
            // });

        } catch (err: any) {
            logger.error(err);
            throw new Error(err.message);
        }
    }

}
