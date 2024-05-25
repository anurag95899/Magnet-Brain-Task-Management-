import React, { useState } from 'react';
import axios from '../utils/axios.js'
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/tasks', { title, description, dueDate, priority });
    //  fetchTasks();
  
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
    navigate('/')
  };

  return (
    <>
    <div className=" w-full p-2 font-[Gilroy] flex flex-col justify-center items-center">
    <h4 className=' text-3xl mb-10 font-semibold'>Create Task</h4>
    <form onSubmit={handleSubmit} className=' w-[45%] flex flex-col gap-5 '>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required  className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500'  />
      <textarea  placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}  className=' border-2 rounded-md px-2 resize-none py-1 border-slate-700 outline-slate-500'  />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required  className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500'  />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} required  className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500' >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className='bg-blue-400 py-3 rounded-md shadow-sm text-white font-medium'  >Add Task</button>
    </form>
    </div>
    </>
  );
};

export default TaskForm;

