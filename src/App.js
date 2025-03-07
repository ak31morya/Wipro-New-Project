import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">Customer Management System</h2>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Login</Link></li>
          <li><Link to="/customer-info" className="nav-item">Customer Info</Link></li>
          <li><Link to="/show-customer-wallet" className="nav-item">My Wallet</Link></li>
          <li><Link to="/customer-show" className="nav-item">View Customers</Link></li>
          <li><Link to="/add-customer" className="nav-item">Add Customer</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h3>Welcome to Customer Management System</h3>
        <p>Manage your customers efficiently with this application.</p>
      </div>
    </div>
  );
}

export default App;
