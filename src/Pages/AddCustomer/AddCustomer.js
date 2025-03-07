import React, { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    custId: "",
    custName: "",
    custUserName: "",
    custPassword: "",
    city: "",
    state: "",
    email: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5071/api/customer", formData);
      alert("Customer added successfully!");
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input name="custId" type="number" placeholder="ID" onChange={handleChange} required />
        <input name="custName" type="text" placeholder="Name" onChange={handleChange} required />
        <input name="custUserName" type="text" placeholder="Username" onChange={handleChange} required />
        <input name="custPassword" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="city" type="text" placeholder="City" onChange={handleChange} required />
        <input name="state" type="text" placeholder="State" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="mobileNo" type="text" placeholder="Mobile No" onChange={handleChange} required />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
