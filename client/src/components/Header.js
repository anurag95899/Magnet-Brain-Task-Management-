import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext  from '../context/AuthContext';

const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const logoutUser = async ()=>{
   logout()
   navigate('/login')
  }

  return (
  <>
  <nav className='bg-[#333] text-white w-full py-2 px-8 flex items-center justify-between'>
    <Link to="#" className=' font-bold text-2xl' style={{textDecoration:"none"}}> Magnet Brains</Link>
     <div className=" flex gap-6 items-center font-medium text-lg">
      <Link to="tasks" className='bg-green-400 px-5 py-2 rounded-md shadow-md '>Create Task</Link>
      <Link  onClick={logoutUser} className='bg-red-400 px-5 py-2 rounded-md shadow-md '>Logout</Link>
     </div>

   

  </nav>
  
  </>
  );
};

export default Header;