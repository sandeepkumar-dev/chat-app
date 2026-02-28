import axios from 'axios';
export const baseURL = 'http://139.59.9.53:8080';
export const httpClient = axios.create({
  baseURL: baseURL,
});
