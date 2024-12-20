import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Login from './pages/login/login.tsx'
import Layout from './layout.jsx'
import Home from './pages/home/home.jsx'
import Estadios from './pages/home/estadios/estadios.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      // {
      //   element: <PrivateRoute element={<Whatsapp />} />,
      //   path: '/whatsapp'
      // },
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <Estadios />,
        path: '/estadios'
      }

    ]
  },
  // {
  //   element: <Login />,
  //   path: '/login'
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)