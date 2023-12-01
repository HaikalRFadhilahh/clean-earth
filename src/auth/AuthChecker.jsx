import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/masuk");
    }
  }, [navigate]);

  return children;
};

export default AuthChecker;

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AuthChecker = ({ children }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       axios.get('http://localhost:3001/protected-page', {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then(response => {
//           setUser(response.data.user);
//         })
//         .catch(error => {
//           console.error(error.message);
//           navigate('/masuk');
//         });
//     } else {
//       navigate('/masuk');
//     }
//   }, [navigate]);

//   return children;
// };

// export default AuthChecker;
