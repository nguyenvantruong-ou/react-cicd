import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-cicd">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
