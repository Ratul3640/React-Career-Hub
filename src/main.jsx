import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
