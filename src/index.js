import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

const LoadingIcon = () => {
  return <div>Loading...</div>; // Placeholder khi trang đang được tải
};


// const ErrorBoundary = ({ children }) => {
//   try {
//     return children;
//   } catch (error) {
//     return <div>Something went wrong!</div>;
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-cicd">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingIcon />}>
              <App />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<LoadingIcon />}>
              <div>Home page</div>
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingIcon />}>
              <div>About Page</div>
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
