import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5f5a42a55990489ab0b041327063caa7'
    }
})