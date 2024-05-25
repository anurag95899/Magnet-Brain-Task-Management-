import React, { useState, useContext } from 'react';
import  AuthContext  from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate('/')
  };

  return (
    <>
    <div className=" w-full flex flex-col justify-center items-center">
    <h4 className='mt-5 text-2xl'>Login Page</h4>
    <form onSubmit={handleSubmit} className='w-[40%] flex  mt-10 flex-col gap-5'>
      <input type="text" placeholder="Username" value={username} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500' onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500' onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='bg-blue-400 py-3 rounded-md shadow-sm text-white font-medium'>Login</button>
    </form>
     <h4 className='mt-4 text-lg'>New Account ? <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-700 mx-1 font-bold   focus:outline-none focus:shadow-outline"
                >
                  Sign up
                </Link></h4>
    </div>
    
    </>
  );
};

export default Login;
