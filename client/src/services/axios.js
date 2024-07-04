import axios from 'axios'

const axiosRequest = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosRequest
