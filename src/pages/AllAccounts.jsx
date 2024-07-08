
import React from 'react'
import './AllAcounts.css';

function AllAccounts() {
  return (
<>
    
    <div className="container mt-5">
            <h1 className="mb-4">All Savings Accounts</h1>
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
                {/* <tbody>
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
                </tbody> */}
            </table>
        </div>
</>
  )
}

export default AllAccounts


// import React from 'react';

// const AllAccounts = ({ users }) => {
//     return (
//         <div>
//             <h1>User Accounts</h1>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Account No</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Mobile No</th>
//                         <th>Aadhar No</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.date}</td>
//                             <td>{user.accountNo}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.mobileNo}</td>
//                             <td>{user.aadharNo}</td>
//                             <td>{user.address}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AllAccounts;

