import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowCustomerWallet = () => {
  const { id } = JSON.parse(localStorage.getItem("loggedInUser")); 
  const [wallets, setWallets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    // let user = JSON.parse(localStorage.getItem("loggeddInUser"))
    alert(user)
    alert(user.custId)
    let uid = user.custId
    axios
      .get(`http://localhost:5071/api/Customer/${uid}/wallet`)
      .then((response) => {
        setWallets(response.data);
      })
      .catch((err) => {
        setError("No wallet details found.");
        console.error(err);
      });
  }, [id]);

  return (
    <div className="wallet-container">
      <h2>My Wallet</h2>
      {error && <p className="error-message">{error}</p>}
      {wallets.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Wallet ID</th>
              <th>Wallet Type</th>
              <th>Wallet Amount</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr key={wallet.walletId}>
                <td>{wallet.walletId}</td>
                <td>{wallet.walletType}</td>
                <td>${wallet.walletAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No wallet records available.</p>
      )}
    </div>
  );
};

export default ShowCustomerWallet;
