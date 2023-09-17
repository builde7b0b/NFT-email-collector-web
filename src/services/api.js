import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const collectEmail = (emailData) => {
    return axios.post('/collect_email', emailData);
};


export const createCollection = (data) => axios.post('/collections', data);
export const updateCollection = (id, data) => axios.put(`/collections/${id}`, data);
export const deleteCollection = (id) => axios.delete(`/collections/${id}`);