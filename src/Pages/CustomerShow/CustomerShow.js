import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerShow = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5071/api/customer")
      .then((response) => {
        const filteredData = response.data.map(({ custPassword, ...rest }) => rest);
        setCustomers(filteredData);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.custId}>
              <td>{customer.custId}</td>
              <td>{customer.custName}</td>
              <td>{customer.custUserName}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>{customer.email}</td>
              <td>{customer.mobileNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerShow;
