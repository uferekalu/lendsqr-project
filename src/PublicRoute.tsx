import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
  component: React.ComponentType<any>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('authenticatedUser');
  const location = useLocation();

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace state={{ from: location }} />
  ) : (
    <Component />
  );
};

export default PublicRoute;
