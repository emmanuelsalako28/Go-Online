import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './jquery-plugins'; // This ensures polyfills -> plugins order

// Import bootstrap from node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/fontawesome.css'
import './assets/css/templatemo-finance-business.css'
import './assets/css/owl.css'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
