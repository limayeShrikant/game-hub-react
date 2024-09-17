import axios from "axios";

const apikey = process.env.VITE_API_KEY;

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apikey
    }
})