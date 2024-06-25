import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import UserDetailScreen from './components/userDetail/UserDetail';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { NotificationProvider } from './components/notification/NotificationContext';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Routes>
        <Route path="/" element={<PublicRoute component={Login} />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path="/dashboard/:userId"
          element={<ProtectedRoute component={UserDetailScreen} />}
        />
      </Routes>
    </NotificationProvider>
  );
};

export default App;
