import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App  from './create-cv'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
