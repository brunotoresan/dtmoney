import axios from 'axios'

// Set configuration that are default 
// for all the requests that will be made for our API
export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})