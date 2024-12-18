import axios from 'axios'

export const axiosService = axios.create({
    baseURL: import.meta.env.VITE_API_URL || import.meta.env.VITE_LOCAL_URL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default axiosService;