import axios from 'axios';

export const mp = axios.create({
  baseURL: 'https://yourway-app.herokuapp.com/api/mercado-pago',
});
