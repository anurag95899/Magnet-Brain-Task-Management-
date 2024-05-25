import React, { useState } from 'react';
import axios from '../utils/axios.js';
import TaskEditForm from './TaskEditForm';
import '../App.css'
import { format } from 'date-fns';


const TaskDetails = ({ task, fetchTasks }) => {
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
    <div className='taskDetail '>
      <h3>Title : {task.title}</h3>
      <p>Description : {task.description}</p>
      <p>Due Date : {task.dueDate}</p>
      <p className='mb-2'>Status: {task.status}</p>
      <button onClick={markAsCompleted}>Mark as Completed</button>
      <button className='edit' onClick={toggleEditing}>Edit</button>
      <button className='del' onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskDetails;
