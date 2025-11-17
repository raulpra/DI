import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>404</h1>
      <p style={{ marginBottom: '1rem' }}>Lo sentimos — la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;
