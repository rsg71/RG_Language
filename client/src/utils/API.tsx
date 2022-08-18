import axios from "axios";


export default {
    //get all words
    getAllSpanishWords: function () {
        return axios.get("/api/spanish")
    },
    getSpanishWordsForReview: function () {
        return axios.get("/api/spanish/for-review")
    },
    answerCorrectly: function (wordId: string) {
        return axios.patch(`/api/spanish/${wordId}`)
    },
    getAllFrenchWords: function () {
        return axios.get("/api/french")
    },
    answerFrenchCorrectly: function (wordId: string) {
        return axios.patch(`/api/french/${wordId}`)
    },
    //German
    getAllGermanWords: function () {
        return axios.get("/api/german")
    },
    answerGermanCorrectly: function (wordId: string) {
        return axios.patch(`/api/german/${wordId}`)
    },

    // Italian
    getAllItalianWords: function () {
        console.log("getting all italian words...")
        return axios.get("/api/italian")
    },
    answerItalianCorrectly: function (wordId: string) {
        return axios.patch(`/api/italian/${wordId}`)
    },
    addItalianWord: function (word: any) {
        return axios.post(`/api/italian`, word)
    },
    getItalianWordsForReview: function () {
        return axios.get("/api/italian/for-review")
    },

    // Portuguse
    getAllPortugueseWords: function () {
        return axios.get(`/api/portuguese/`)
    },
    answerPortugueseCorrectly: function (wordId: string) {
        return axios.patch(`/api/portuguese/${wordId}`)
    },



    // ===================================
    // Generic 
    getAllUnlearnedWords: function (language: string) {
        // return axios.get(`/api/${language}/words/unlearned`, { params: { language } })

        return axios.get(`/api/users/languages/words/unlearned`, { params: { language } })
    },
    getWordsForReviewForLanguageForUser: function (language: string) {
        console.log("getting all words for review for a particular language")
        return axios.get(`/api/users/languages/${language}/for-review`)
    },
    // ===================================



    // Auth
    signup: function (data: any) {
        return axios.post(`/api/auth/signup`, data)
    },
    // Auth
    login: function (data: any) {
        return axios.post(`/api/auth/login`, data)
    },
    // Auth
    logout: function () {
        console.log("on the logout function")
        return axios.get(`/api/auth/logout`)
    },

    // Auth
    pageLoadCheckLoggedIn: function () {
        console.log("checking if already logged in...");
        // console.log("page load check login login function being called by app.js")
        return axios.get(`/api/auth/page-load-login`)
    },

    getUser: function () {
        return axios.get("/user", { withCredentials: true })
    },


    // WIP
    getLanguageDataForUser: function (username: string, language: string) {
        return axios.get(`/api/users/languages/${username}/languages/${language}`)
    },



    // Generic quiz
    answerWordCorrectly: function (language: string, wordId: string, word: string) {
        console.log("word is: ", word);
        // return axios.patch(`/api/${language}/${wordId}`, null, { params: { word } })
        return axios.patch(`/api/users/languages/${language}/quiz/answer-word/`, null, { params: { language, wordId, word } })
    },
    answerWordIncorrectly: function (language: string, wordId: string, word: string) {
        console.log("answer incorrectly word is: ", word);
        return axios.patch(`/api/users/languages/${language}/quiz/answer-word-incorrectly`, null, { params: { language, wordId, word } })
    },


    getUsersHomepageData: function () {
        return axios.get("/users-languages", { withCredentials: true })
    },

    addLanguage: function (language: string) {
        let data = { language }
        return axios.post("/api/users/languages", data, { withCredentials: true })
    },
    findAllLanguagesForThisUser: function (userId: string) {
        return axios.get(`/api/users/languages/${userId}`, { withCredentials: true })
    }
}