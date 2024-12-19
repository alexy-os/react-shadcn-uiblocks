import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 