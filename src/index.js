import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomerInfo from './Pages/CustomerInfo/CustomerInfo';
import CustomerShow from './Pages/CustomerShow/CustomerShow';
import AddCustomer from './Pages/AddCustomer/AddCustomer';
import Login from './Pages/Login';
import ShowCustomerWallet from './Pages/ShowCustomerWallet/ShowCustomerWallet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer-info" element={<CustomerInfo />} />
        <Route path="/show-customer-wallet" element={<ShowCustomerWallet />} />
        <Route path="/customer-show" element={<CustomerShow />} />
        <Route path="/add-customer" element={<AddCustomer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
