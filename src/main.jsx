import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

function Root() {
  const [activePage, setActivePage] = useState('About');

  return <App activePage={activePage} onPageChange={setActivePage} />;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
