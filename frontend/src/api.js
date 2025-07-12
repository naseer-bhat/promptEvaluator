// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://promptevaluator.onrender.com', // change this to your backend URL if deployed
});

export default instance;
