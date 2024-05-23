import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/Register';
import Otp from './components/Otp';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Register/>
  },
  {
    path:'/otp',
    element: <Otp/>
  },
  {
    path:'/login',
    element: <Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
