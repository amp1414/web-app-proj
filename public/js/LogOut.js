import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';
import UserList from './UserList';

const UserList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedToken = localStorage.getItem('token');
      setIsLoggedIn(!!storedToken); 
    };

    checkLoginStatus();
  }, []);


  const handleLogout = () => {

    localStorage.removeItem('token');

    setIsLoggedIn(false);
  };



  return (
    <div>
      <h2>User List</h2>

      {}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please login to view the user list.</p>
      )}

      {}
    </div>
  );
};



const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect or perform any necessary action upon logout
  };

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
