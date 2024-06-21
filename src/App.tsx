import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
