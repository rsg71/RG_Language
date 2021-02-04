import axios from "axios";


export default {
    //get all words
    getAllSpanishWords: function () {
        return axios.get("/api/spanish")
    }
}