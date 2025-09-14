import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to home page for proper portfolio structure
  return <Navigate to="/" replace />;
};

export default Index;