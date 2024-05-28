import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { useParams } from 'react-router-dom'
import moment from 'moment';
// This component is basically responsible for render single task detail in new page.

const TaskDetail = () => {
    const [task,setTask] = useState({})

      //format the date which is coming from database.
  const formattedDate = moment(task.dueDate).format('DD/MM/YYYY');

    //params use to take dynamic data from url.
    const params = useParams()
    useEffect(()=>{
  const openTaskDetail = async()=>{
   const res =  await axios.get(`/tasks/${params.id}`);
   setTask(res.data)
  }
  openTaskDetail()
    },[params.id])
  return (
    <>
<div className=" w-full p-10 flex font-[Gilroy] flex-col justify-center items-center ">
  <h1 className='mb-5 text-3xl font-semibold text-[#333] '>Task Detail Page</h1>
<div className='taskDetail p-3 rounded-md text-[#000] ' style={{backgroundColor:`${task.priority === "Low" ?'rgb(34 197 94)' : task.priority === 'Medium' ? 'rgb(234 179 8)':' rgb(239 68 68)'}`}}>
      <h3>Title : {task.title}</h3>
      <p>Description : {task.description}</p>
      <p>Due Date : {formattedDate}</p>
      <p className='mb-2'>Status: {task.status}</p>
    </div>
</div>
    </>
  )
}

export default TaskDetail