import React from 'react'

function Login() {
  return (
    <div>Login</div>


    
  )
}

export default Login

// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userId === 'johnDoe' && password === 'password123') {
//       setError(null);
//       // Handle successful login
//     } else {
//       setError('Invalid user ID or password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <p>{error}</p>}
//       <label>
//         User ID:
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;