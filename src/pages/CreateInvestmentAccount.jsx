// import React from 'react'

// function CreateInvestmentAccount() {
//   return (
//     <div>Create Investment Account</div>
//   )
// }

// export default CreateInvestmentAccount





                                             /*Edit 2*/



/*

import React, { useState } from 'react';

const CreateInvestmentAccount = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <center>
      <label><br/>
        Date :
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Acccount No : 
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Mobile No :
        <input
          type="text"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
      </label>
      <br/><br/>
      <label>
        Aadhar No :
        <input
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Address :
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Investment Balance :
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </label>
      <br/><br/>
      
      <br/>
      <br/>
      <center><button type="submit">Submit</button></center>
      </center>
    </form>
  );
};

export default CreateInvestmentAccount;


*/

                                       /*Edit 2*/


import React, { useState } from 'react';
import './CreateLoanAccountForm.css';

const CreateInvestmentAccountForm = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle successful account creation
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Account No</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Mobile No</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Aadhar No</label>
        <input
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Investment Balance</label>
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CreateInvestmentAccountForm;






