// First we need to import axios.js
import axios from 'axios';

export default axios.create({
  baseURL: '127.0.0.1',
  // baseURL: 'http://54.187.48.56/api',
  headers: {
    'Content-type': 'application/json',
  },
});
