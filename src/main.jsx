import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Pages/App"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Pages/Footer/Footer"
import { AuthContextProvider } from './context/AuthContext'
import { AdminAuthContextProvider } from './context/AdminAuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminAuthContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </AdminAuthContextProvider>
  </React.StrictMode>,
)