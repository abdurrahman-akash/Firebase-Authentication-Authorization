import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthProviders from './providers/AuthProviders'
import Toaster from './components/Toaster/Toaster'
import Profile from './components/Profile/Profile'
import PrivateRoute from './routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    <Toaster />
  </StrictMode>,
)
