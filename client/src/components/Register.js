import React, { useState, useContext } from 'react';
import AuthContext  from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, password);
    navigate('/login')
  };

  return (
    <>
    <div className=" w-full flex flex-col justify-center items-center">
    <h4 className='mt-5 text-2xl'>Sign Up Page</h4>
    <form onSubmit={handleSubmit} className='w-[40%] flex  mt-10 flex-col gap-5'>
      <input type="text" placeholder="Username" value={username} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500' onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500' onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='bg-blue-400 py-3 rounded-md shadow-sm text-white font-medium' >Register</button>
    </form>

    </div>
    
    </>
  );
};

export default Register;
