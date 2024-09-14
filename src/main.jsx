import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Auth0Provider
    domain="dev-52hzpb88agwmb6zx.us.auth0.com"
    clientId="1sxC3uqZm8XUkr75d0RsD2coeE6asYHj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>,
)
