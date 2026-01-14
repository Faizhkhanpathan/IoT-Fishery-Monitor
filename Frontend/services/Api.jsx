import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Replace with your backend URL

export const getAllData = async () => {
  const response = await axios.get(`${API_URL}/data`);
  return response.data;
};