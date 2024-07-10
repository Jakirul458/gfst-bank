import React from 'react'
import './AllAcounts.css';

function InvestmentAccounts() {
    const users = [
        // Example data
        { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
        { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
        { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
        { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
        { date: '2023-07-09', accountNo: '123456789', name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890', aadharNo: '1234-5678-9012', address: '123 Main St' },
        
        // Add more users here
      ];
  return (
    <>
     
            <h1 className="mb-4">All Investment Accounts</h1>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Account No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Aadhar No</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.date}</td>
                            <td>{user.accountNo}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.aadharNo}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       
        <div className='print-btn-container'>
        <button type="print" className="print-btn">Print</button>
        </div>
    </>
  )
}

export default InvestmentAccounts




