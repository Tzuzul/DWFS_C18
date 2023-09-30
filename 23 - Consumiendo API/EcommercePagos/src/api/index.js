import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api-auth-kdka.onrender.com'
})

export default instance