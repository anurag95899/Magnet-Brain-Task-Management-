import React, { createContext, useState, useEffect } from 'react';
import axios from '../utils/axios';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
     setUser(currentUser);
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
    localStorage.setItem('currentUser',JSON.stringify(response.data.user));
    console.log("Hello ",response);
    // setUser(response.data.user);
  };




  const register = async (username, password) => {
   const response = await axios.post('http://localhost:8080/api/users/register', { username, password })
  //  console.log("Api Data",response); 
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