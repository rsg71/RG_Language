import axios from "axios";


export default {
    //get all words
    getAllSpanishWords: function () {
        return axios.get("/api/spanish")
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
        return axios.get("/api/italian")
    },
    answerItalianCorrectly: function (wordId) {
        return axios.patch(`/api/italian/${wordId}`)
    },
}