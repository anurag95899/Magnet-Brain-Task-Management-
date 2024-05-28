import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider  from './context/AuthContext.js';
import HomePage from './pages/HomePage.js';
import TaskPage from './pages/TaskPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import Header from './components/Header.js';
import TaskEditForm from './components/TaskEditForm.js';
import AuthContext from './context/AuthContext.js';
import TaskDetail from './pages/TaskDetailPage.js';

const App = () => {
  const {user} = useContext(AuthContext)
  console.log("user",user);
  return (
   
  

      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/taskedit" element={<TaskEditForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/taskdetailpage/:id" element={<TaskDetail />} />
          
        </Routes>
      </BrowserRouter>


    
   
  );
};

export default App;

