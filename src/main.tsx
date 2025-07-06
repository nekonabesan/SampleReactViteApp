//import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'
import './index.css'
//import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  /*<StrictMode>
    <App />
  </StrictMode>,*/
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)