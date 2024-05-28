import React, { useState } from 'react';
import axios from '../utils/axios.js';
import TaskEditForm from './TaskEditForm';
import '../App.css'
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import TaskDetailPage from '../pages/TaskDetailPage.js';
import moment from 'moment';


const TaskDetails = ({ task, fetchTasks }) => {

  //format the date which is coming from database.
  const formattedDate = moment(task.dueDate).format('DD/MM/YYYY');

  const [editing, setEditing] = useState(false);

  const deleteTask = async () => {
    await axios.delete(`/tasks/${task._id}`);
    fetchTasks();
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const markAsCompleted = async () => {
    await axios.put(`/tasks/${task._id}`, { status: 'completed' });
    fetchTasks();
  };

  if (editing) {
 return <TaskEditForm task={task} toggleEditing={toggleEditing} fetchTasks={fetchTasks} />;
  }

  return (
    <div className='taskDetail p-2 shadow-sm rounded-md text-[#000] ' style={{backgroundColor:`${task.priority === "Low" ?'rgb(34 197 94)' : task.priority === 'Medium' ? 'rgb(234 179 8)':' rgb(239 68 68)'}`}}>
      <Link to={`taskdetailpage/${task._id}`} className=' bg-transparent'  ><h3>Title : {task.title}</h3></Link>
      <p>Description : {task.description}</p>
      <p>Due Date : {formattedDate}</p>
      <p className='mb-2'>Status: {task.status}</p>
      <button onClick={markAsCompleted}>Mark as Completed</button>
      <button className='edit' onClick={toggleEditing}>Edit</button>
      <button className='del' onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskDetails;
