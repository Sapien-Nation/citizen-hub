import axios from 'axios';

const host = process.browser ? window.location.host : '';
const instance = axios.create({
  baseURL:
    host === 'passport-sandbox.sapien.network'
      ? 'https://token-sandbox.sapien.network/'
      : 'https://token-poc.sapien.network/',
});

export const authInstance = axios.create({
  baseURL:
    host === 'passport-sandbox.sapien.network'
      ? 'https://sandbox-oauth.sapien.network/'
      : 'https://oauth.sapien.network/ ',
});

instance.interceptors.request.use((config) => {
  const tokens = window.localStorage.getItem('tokens');
  if (tokens) {
    const { token } = JSON.parse(tokens);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, undefined);

authInstance.interceptors.request.use((config) => {
  const tokens = window.localStorage.getItem('tokens');
  if (tokens) {
    const { token } = JSON.parse(tokens);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, undefined);

export default instance;
