/*
import React from 'react'

function Profit() {
  return (
    <div>Profit</div>
  )
}

export default Profit
*/


                                          /* edit 2*/

/*
import React, { useState } from 'react';
import './Profit.css';

const Profit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [profit, setProfit] = useState('');
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
        <label>Profit Amount:</label>
        <input
          type="number"
          value={profit}
          onChange={(e) => setProfit(e.target.value)}
        />
      </div>
     
     
     
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Profit;

*/



                                                /*Edit 3*/

import React, { useState } from 'react';
import './Profit.css';

const Profit = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [transactionid, setTransactionid] = useState('');
  const [deposit, setDeposit] = useState('');
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  const handleVerify = async () => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`https://your-api.com/verify-account?account=${account}`);
      const result = await response.json();

      if (result.exists) {
        setIsVerified(true);
        setError(null);
      } else {
        setIsVerified(false);
        setError('Account does not exist.');
      }
    } catch (err) {
      setIsVerified(false);
      setError('Error verifying account. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Account No:</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <button type="button" onClick={handleVerify} className="verify-btn">Verify</button>
      </div>

      {isVerified && (
        <>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Transaction ID:</label>
            <input
              type="text"
              value={transactionid}
              onChange={(e) => setTransactionid(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Deposit Amount:</label>
            <input
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </>
      )}

      
    </form>
  );
};

export default Profit;
