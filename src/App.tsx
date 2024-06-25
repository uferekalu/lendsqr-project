import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import UserDetailScreen from './components/userDetail/UserDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:userId" element={<UserDetailScreen />} />
    </Routes>
  );
};

export default App;
