import axios from "axios";


export default {
    //get all words
    getAllSpanishWords: function () {
        return axios.get("/api/spanish")
    },
    getSpanishWordsForReview: function () {
        return axios.get("/api/spanish/for-review")
    },
    answerCorrectly: function (wordId) {
        return axios.patch(`/api/spanish/${wordId}`)
    },
    getAllFrenchWords: function () {
        return axios.get("/api/french")
    },
    answerFrenchCorrectly: function (wordId) {
        return axios.patch(`/api/french/${wordId}`)
    },
    //German
    getAllGermanWords: function () {
        return axios.get("/api/german")
    },
    answerGermanCorrectly: function (wordId) {
        return axios.patch(`/api/german/${wordId}`)
    },

    // Italian
    getAllItalianWords: function () {
        console.log("getting all italian words...")
        return axios.get("/api/italian")
    },
    answerItalianCorrectly: function (wordId) {
        return axios.patch(`/api/italian/${wordId}`)
    },
    addItalianWord: function (word) {
        return axios.post(`/api/italian`, word)
    },
    getItalianWordsForReview: function () {
        return axios.get("/api/italian/for-review")
    },

    // Portuguse
    getAllPortugueseWords: function () {
        return axios.get(`/api/portuguese/`)
    },
    answerPortugueseCorrectly: function (wordId) {
        return axios.patch(`/api/portuguese/${wordId}`)
    },
}