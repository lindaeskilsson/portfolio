import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css' // Din nya huvudfil med variabler och reset
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)