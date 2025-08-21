const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' // This will use the same domain as frontend in production
  : 'http://localhost:5000/api';

export default API_BASE_URL;
