import React, { useState, useEffect } from 'react';
import axios from '../utils/axios.js';
import TaskDetails from './TaskDetails';
import '../App.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);

//fetchTasks Function is used to get all the tasks from database.

  const fetchTasks = async () => {
    const response = await axios.get('/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=''>
      <ul className='flex gap-5 flex-col'>
        {currentTasks.map(task => (
          <li key={task._id}>
            <TaskDetails task={task} fetchTasks={fetchTasks} />
          </li>
        ))}
      </ul>
      <Pagination tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate} />
    </div>
  );
};

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='listPage'>
      <div className="listBoxPage">
        {pageNumbers.map(number => (
          <div key={number}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TaskList;
