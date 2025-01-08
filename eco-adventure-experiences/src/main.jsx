import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import  { Toaster } from 'react-hot-toast'
import 'animate.css';
import 'aos/dist/aos.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
      </RouterProvider>
        <Toaster/>
        
    </AuthProvider>
  </StrictMode>,
)
