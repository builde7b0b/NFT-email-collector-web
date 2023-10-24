import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = async (userData) => {
    try {
        // Make the POST request to the /login endpoint
        const response = await api.post('/login', userData);
        
        // Assume the backend sends the JWT as 'token' in the response data
        const jwtToken = response.data.token;
        
        // Store the JWT in localStorage
        localStorage.setItem('jwt', jwtToken);
        console.log(jwtToken);

        return response;  // Return the response for further processing or feedback to the user
    } catch (error) {
        throw error;  // Handle or propagate the error as required
    }
};

const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage

if (!token) {
    throw new Error('No token found');
}

const headers = {
    Authorization: `Bearer ${token}`
};

export const collectEmail = (emailData) => {
    return api.post('/collect_email', emailData, { headers });
};

export const getAllEmails = () => {
    return api.get('/get_all_emails', { headers });
};




export const createCollection = (data) => {
    // Append the unique_token to the data object
    // data.unique_token = unique_token;
  
    // Make the POST request to the /collection endpoint

    const token = localStorage.getItem('jwt');
    console.log(token);

    if(!token) {
        throw new Error('No token found');
    }

    // set auth header with JWT token 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return api.post('/collection', data, config);
  };
  export const updateCollection = (id, data) => {
    const token = localStorage.getItem('jwt');

    if(!token) {
        throw new Error('No token found');
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return api.put(`/collections/${id}`, data, config);
};

export const deleteCollection = (id) => {
    const token = localStorage.getItem('jwt');

    if(!token) {
        throw new Error('No token found');
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return api.delete(`/collections/${id}`, config);
};

// export const getAllCollections = () => api.get(`/collections`);
export const getAllCollections = () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
        throw new Error('No token found');
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return api.get('/mycollections', config);
};

export const createPaymentIntent = async (amount) => {
    try {
        const response = await axios.post('/api/create-payment-intent', { amount: amount });
        return response.data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
}
