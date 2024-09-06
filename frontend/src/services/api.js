import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchEmissions = () => {
    return axios.get(`${API_URL}/emissions`);
};

export const submitEmission = (data) => {
    return axios.post(`${API_URL}/emissions`, data);
};
