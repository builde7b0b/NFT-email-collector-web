import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const collectEmail = (emailData) => {
    return api.post('/collect_email', emailData);
};


export const createCollection = (data) => api.post('/collection', data);
export const updateCollection = (id, data) => api.put(`/collections/${id}`, data);
export const deleteCollection = (id) => api.delete(`/collections/${id}`);
export const getAllCollections = () => api.get(`/collections`);