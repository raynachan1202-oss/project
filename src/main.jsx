import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { FetchProvider } from './context/fetch.context.jsx';
import { AuthProvider } from './context/authcontext.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
