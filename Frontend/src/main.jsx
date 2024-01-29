
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { Layout } from './components/Layouts/Layout.jsx'
import CartProvider from './context/CartProvider.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import AdminLayout from './components/Layouts/AdminLayout.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <App />
        </Layout>
      </CartProvider>
    
    </BrowserRouter>


  </React.StrictMode>,
)
