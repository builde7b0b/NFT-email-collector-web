import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const collectEmail = (emailData) => {
    return axios.post('/collect_email', emailData);
};


