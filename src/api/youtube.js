import axios from "axios";
const KEY = "AIzaSyD16kQjH6wp0qoaouAt75Q8-LzznWI2j8k"  // Youtube Data API Key

export default axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        key: KEY,
        maxResults: 5,
        type: 'video'
    }
})