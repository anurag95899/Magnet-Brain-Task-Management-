import React, { useState } from 'react';
import axios from '../utils/axios.js';

const TaskEditForm = ({ task, toggleEditing, fetchTasks }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/tasks/${task._id}`, { title, description, dueDate, priority });
    fetchTasks();
    toggleEditing();
  };

  return (
    <>
        <div className=" w-full p-2 font-[Gilroy] flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className=' w-[30%] flex flex-col gap-5 '>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500'   required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className=' border-2 resize-none rounded-md px-2 py-1 border-slate-700 outline-slate-500'   />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500'   required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className=' border-2 rounded-md px-2 py-1 border-slate-700 outline-slate-500'   required>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className='bg-blue-400 py-3 rounded-md shadow-sm text-white font-medium'  >Update Task</button>
      <button onClick={toggleEditing} className='bg-yellow-400 py-3 rounded-md shadow-sm text-white font-medium' >Cancel</button>
    </form>

     </div>
    
    </>
  );
};

export default TaskEditForm;
