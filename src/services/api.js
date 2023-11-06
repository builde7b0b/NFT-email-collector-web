import axios from "axios";


const api = axios.create({
    // baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 
    baseURL: 'https://nft-email-collector-api-806363e3ce7d.herokuapp.com/'
});

// const api = axios.create({
//     baseURL: 'https://nft-email-collector-api-806363e3ce7d.herokuapp.com/', //replacw with Flask API URL 

// });

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



export const collectEmail = (emailData) => {
    const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage

if (!token) {
    throw new Error('No token found');
}

const headers = {
    Authorization: `Bearer ${token}`
};
    return api.post('/collect_email', emailData, { headers });
};

export const getAllEmails = () => {
    const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage

if (!token) {
    throw new Error('No token found');
}

const headers = {
    Authorization: `Bearer ${token}`
};
    return api.get('/get_all_emails', { headers });
};

export const getEmailsByCollection =  async (collectionId) => {
    const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage
    if (!token) {
        throw new Error('No token found');
    }
    
    const headers = {
        Authorization: `Bearer ${token}`
    };
        return api.get(`/get_all_emails_by_collection/${collectionId}`, { headers });
    };
 // Function to get emails by user ID
export const getEmailsByUser = async (userId) => {
    const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage
    if (!token) {
        throw new Error('No token found');
    }

    const headers = {
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await api.get(`/get_emails_by_user/${userId}`, { headers });
        return response.data; // or however you want to process this
    } catch (error) {
        console.error("Error fetching emails:", error);
        throw error;
    }
};

// API function to get the current user's ID
export const getCurrentUserId = async () => {
    const token = localStorage.getItem('jwt');  // Assuming you store the JWT token in localStorage
    if (!token) {
        throw new Error('No token found');
    }

    const headers = {
        Authorization: `Bearer ${token}`
    };
    try {
        const response = await api.get('/get_current_user_id', { headers });
        console.log(response.data.user_id);
        return response.data.user_id; // Assuming the user ID is returned under the key user_id
    } catch (error) {
        console.error("Error fetching current user ID:", error);
        throw error;
    }
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
