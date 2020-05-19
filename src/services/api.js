import axios from 'axios';

const baseApiUri = process.env.REACT_APP_BASE_API_URI;

export const register = async (user) => {
  const res = await axios.post(`${baseApiUri}/auth/register`, { user });
  return res.data;
};

export const login = async (user) => {
  const res = await axios.post(`${baseApiUri}/auth/login`, { user });
  return res.data;
};
