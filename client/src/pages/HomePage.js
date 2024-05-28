import React, { useContext, useEffect } from 'react'
import TaskList from '../components/TaskList'
import AuthContext from '../context/AuthContext'
import Login from '../components/Login'
import Header from '../components/Header'

const HomePage = () => {

  const {user} = useContext(AuthContext)

  return (

   <>

   
   {user ?  // If the user is logged in, render the following content:
   (<div className="">

{/* Render the Header component */}
    {<Header/>}
     <div className=' w-full p-3 font-[Gilroy]'>
        <h4 className='text-3xl text-center font-semibold  '>All Task List 📃</h4>
        <div className="flex mt-5  gap-5 w-full justify-center items-center">
          <h3 className=' text-xl font-medium '>Task Priority Colours :-</h3>
          <h4 className='flex gap-1'><div className=' w-5  h-5 rounded-sm bg-green-500'></div> Low</h4>
          <h4 className='flex gap-1'><div className=' w-5  h-5 rounded-sm bg-yellow-500'></div> Medium</h4>
          <h4 className='flex gap-1'><div className=' w-5  h-5 rounded-sm bg-red-500'></div> High</h4>
        </div>
        <div className="mt-5 p-3">
        {/* Render the TaskList component */}
          {<TaskList/>}
        </div>
    </div> </div>) :
    // If the user is not logged in, render the Login component.
    <Login/>}

   </>
  )
}

export default HomePage