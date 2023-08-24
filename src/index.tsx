import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(<App />)
})
