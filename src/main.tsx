import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const redirect = sessionStorage.getItem('nx-redirect')
if (redirect) {
  sessionStorage.removeItem('nx-redirect')
  if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, '', redirect)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
