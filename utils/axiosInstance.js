import axios from "axios";

const API_URL = "http://localhost:3000/api";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

export { 
    API_URL,
    axiosInstance
 };