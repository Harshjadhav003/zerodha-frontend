import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup'
import AboutPage from './landing_page/about/AboutPage';
import Pricing from './landing_page/home/Pricing';
import ProductsPage from './landing_page/products/products_page.jsx';
import PricingPage from './landing_page/pricing/Pricing_page';
import Support_page from './landing_page/support/Support_page.jsx';
import Navbar from './landing_page/Navbar';
import Footer  from './landing_page/Footer';
import NotFound from "./landing_page/NotFound.jsx";
import "react-toastify/dist/ReactToastify.css";
import {default as Login } from"./landing_page/login/login.jsx"
import {default as Home } from"./landing_page/home/Home.jsx"



createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/support" element={<Support_page />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

  <Footer />
</BrowserRouter>
</StrictMode>
)


