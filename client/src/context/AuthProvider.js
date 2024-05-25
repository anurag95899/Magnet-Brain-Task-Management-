import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:8080/api/users/me').then(response => setUser(response.data)).catch(() => {
        localStorage.removeItem('token');
      });
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
    localStorage.setItem('token', response.data.token);
    console.log("Hello ",response);
     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    setUser(response.data.user);
  };

  const register = async (username, password) => {
   const response = await axios.post('http://localhost:8080/api/users/register', { username, password })
   console.log("Hello Anurag",response); 
   setUser(response.data.user);

  };

  const logout = async () => {
    localStorage.removeItem('token');
    await axios.post('http://localhost:8080/api/users/signout')
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;