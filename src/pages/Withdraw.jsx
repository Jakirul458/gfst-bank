/*
import React from 'react'

function Withdraw() {
  return (
    <div>Withdraw</div>
  )
}

export default Withdraw

*/


import React, { useState } from 'react';
import './Withdraw.css';

const Withdraw = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [withdraw, setWithdraw] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Account No:</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Transacion id:</label>
        <input
          type="text"
          value={transactionid}
          onChange={(e) => setTransactionid(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Withdraw Amount:</label>
        <input
          type="number"
          value={withdraw}
          onChange={(e) => setWithdraw(e.target.value)}
        />
      </div>
     
     
     
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Withdraw;