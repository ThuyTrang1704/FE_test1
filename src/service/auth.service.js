
import api from "./axiosClient";


const login = async (data) => {
  try {
    const response = await api.post('/api/login',data);
    const userData = response.data;
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  } catch (error) {
    throw new Error('Login failed');
  }
};

const authService = {
  login,
};

export default authService;