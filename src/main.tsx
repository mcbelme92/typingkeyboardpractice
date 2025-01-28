import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from './App.tsx'
import { TypingProvider } from './context/TypingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TypingProvider>
      <App />
    </TypingProvider>
  </StrictMode>,
)
