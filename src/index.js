import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// import searchImages from './api';

// searchImages(); // testing the query asking Unsplash for data

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
