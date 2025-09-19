import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './pages/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App/>
  </AppProvider>
)
