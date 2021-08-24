import axios from 'axios';

export const mp = axios.create({
  baseURL: 'http://localhost:3000/api/mercado-pago',
});
