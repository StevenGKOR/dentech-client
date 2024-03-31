import axios from 'axios'

const API_URL: string = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL + 'auth'
  : 'https://dentech-api.onrender.com/api/v1/auth'

export const authHttp = axios.create({
  baseURL: API_URL,
  withCredentials: true
})
