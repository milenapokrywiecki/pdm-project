import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.23.149.84:3001/api'
})

export default api;