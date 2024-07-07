/*
import React from 'react'

function LoanInstallment() {
  return (
    <div>Loan Installment</div>
  )
}

export default LoanInstallment
*/


import React, { useState } from 'react';
import './LoanInstalment.css';

const LoanInstalment = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [instalment, setInstalment] = useState('');
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
        <label>Instalment Amount:</label>
        <input
          type="number"
          value={instalment}
          onChange={(e) => setInstalment(e.target.value)}
        />
      </div>
     
     
     
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default LoanInstalment;