import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-cicd">
      <Routes>
        <Route
          path="/"
          element={
            <App/>
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <h1>Home Page</h1>
              <p>Welcome to the home page of the site.</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <h1>About Page</h1>
              <p>This is the about page, where you can learn more about us.</p>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
