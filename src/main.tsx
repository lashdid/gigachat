import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource/poppins"
import './index.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import Chat from './pages/chat'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/register'/>,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/chat',
    element: <Chat />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
