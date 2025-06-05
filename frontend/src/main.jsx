import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleProvider from './context/ToggleProvider.jsx'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ToggleProvider>
 <App />
    </ToggleProvider>
   
  </StrictMode>,
)
