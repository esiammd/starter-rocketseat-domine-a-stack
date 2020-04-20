import axios from 'axios';

// const api = axios.create({ baseURL: 'http://192.168.0.105:3001/api' });
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;