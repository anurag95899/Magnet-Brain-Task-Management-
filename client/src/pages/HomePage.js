import React, { useContext, useEffect } from 'react'
import TaskList from '../components/TaskList'
import AuthContext from '../context/AuthContext'
import Login from '../components/Login'
import Header from '../components/Header'

const HomePage = () => {
  useEffect(()=>{
  
  },[])
  const {user} = useContext(AuthContext)


  return (

   <>

   
   {user ? <div className="">
    {<Header/>}
     <div className=' w-full p-3 font-[Gilroy]'>
        <h4 className='text-3xl text-center font-semibold  '>All Task List 📃</h4>
        <div className="mt-5 p-3">
        
          {<TaskList/>}
        </div>
    </div> </div> : <Login/>}

   </>
  )
}

export default HomePage