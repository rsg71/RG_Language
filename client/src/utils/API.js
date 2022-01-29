import axios from "axios";


export default {
    //get all words
    getAllSpanishWords: function () {
        return axios.get("/api/spanish")
    },
    answerCorrectly: function (wordId) {
        return axios.patch(`/api/spanish/${wordId}`)
    }
}