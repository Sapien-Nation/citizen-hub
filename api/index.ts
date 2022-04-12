import axios from 'axios';

enum Envs {
  Local = 'LOCAL',
  Sandbox = 'SANDBOX',
  QAT = 'QAT',
  POC = 'POC',
}

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
});

export const authInstance = axios.create({
  baseURL: '',
  withCredentials: true,
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
