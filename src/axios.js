import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-production-1bea.up.railway.app/'
})

export default instance;