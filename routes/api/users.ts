const router = require("express").Router();
import userController from "../../controllers/userController";

// Matches with "/api/users/languages"

/**
 * @swagger
 * /api/users/languages:
 *   post:
 *     summary: Adds a language for the user
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language: 
 *                 type: string
 *             example:
 *               language: "spanish"  
 *     responses:
 *       200:
 *         description: language added successfully
 *       401:
 *         description: unauthorized
 */
router.route("/")
  .post(userController.addLanguage);


/**
* @swagger
* /api/users/languages/{userId}:
*   get:
*     summary: Returns all languages for this user
*     tags: [Users]
*     responses:
*       200:
*         description: all languages for this user
*       401:
*         description: unauthorized
*/
router.route("/:userId")
  .get(userController.findAllLanguagesForThisUser);


/**
* @swagger
* /api/users/languages/{username}/languages/{language}:
*   get:
*     summary: Returns language data for user
*     tags: [Users]
*     responses:
*       200:
*         description: the language data for user
*       401:
*         description: unauthorized
*/
router.route("/:username/languages/:language")
  .get(userController.getLanguageDataForUser)


/**
* @swagger
* /api/users/languages/words/unlearned:
*   get:
*     summary: Returns all unlearned words for given language for user
*     tags: [Users]
*     responses:
*       200:
*         description: the language data for user
*       401:
*         description: unauthorized
*/
router.route("/words/unlearned")
  .get(userController.findAllUnlearnedWordsForGivenLanguageForUser)


/**
* @swagger
* /api/users/languages/{language}/for-review:
*   get:
*     summary: Returns words for review for given language for user
*     tags: [Users]
*     responses:
*       200:
*         description: the language data for user
*       401:
*         description: unauthorized
*/
router.route("/:language/for-review")
  .get(userController.getWordsForReviewForLanguageForUser)


/**
* @swagger
* /api/users/languages/{language}/quiz/answer-word:
*   patch:
*     summary: Answer word on quiz for language for user
*     tags: [Quiz]
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               word: 
*                 type: string
*               language: 
*                 type: string
*             example:
*               word: "para"
*               language: "spanish"  
*     responses:
*       200:
*         description: the language data for user
*       401:
*         description: unauthorized
*/
router.route("/:language/quiz/answer-word")
  .patch(userController.answerCorrectly)


/**
* @swagger
* /api/users/languages/{language}/quiz/answer-word-incorrectly:
*   patch:
*     summary: Answer word incorrectly on quiz for language for user
*     tags: [Quiz]
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               language: 
*                 type: string
*               word: 
*                 type: string
*             example:
*               language: "spanish"
*               word: "para"  
*     responses:
*       200:
*         description: word successfully answered incorrectly
*       401:
*         description: unauthorized
*/
router.route("/:language/quiz/answer-word-incorrectly")
  .patch(userController.answerIncorrectly)

export default router;