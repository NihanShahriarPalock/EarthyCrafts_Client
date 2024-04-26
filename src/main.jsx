import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from "react-router-dom";
import { router } from './routes/PublicRoutes.jsx';
import AuthContextProvider from './firebase/AuthContextProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
      <Toaster />
    </AuthContextProvider>
  </React.StrictMode>
);
