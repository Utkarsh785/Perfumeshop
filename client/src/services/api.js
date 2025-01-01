import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Product APIs
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

// Review APIs
export const getProductReviews = async (productId) => {
  const response = await axios.get(`${API_URL}/reviews/product/${productId}`);
  return response.data;
};

export const addReview = async (reviewData) => {
  const response = await axios.post(`${API_URL}/reviews`, reviewData);
  return response.data;
};

export const updateReview = async (id, reviewData) => {
  const response = await axios.patch(`${API_URL}/reviews/${id}`, reviewData);
  return response.data;
};

export const deleteReview = async (id) => {
  const response = await axios.delete(`${API_URL}/reviews/${id}`);
  return response.data;
};

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}); 