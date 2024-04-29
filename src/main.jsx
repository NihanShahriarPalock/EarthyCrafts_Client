import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from "react-router-dom";
import { router } from './routes/PublicRoutes.jsx';
import AuthContextProvider from './firebase/AuthContextProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
        <Toaster />
        <Typewriter />
      </HelmetProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
