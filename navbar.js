import React, { useState, useEffect } from 'react';
import userController from '../controllers/user.controller.js';


const NavigationBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoginStatus = () => {
      const userIsLoggedIn = userController.getLoggedInUser();
      setLoggedIn(userIsLoggedIn);
    };
    checkUserLoginStatus();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    alert('User signed out!');
    setLoggedIn(false);
  };

  return (
    <nav>
      <a href="index">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      {isLoggedIn && (
        <div id="sign-out-btn">
          <a href="#" onClick={handleSignOut}>Sign Out</a>
        </div>
      )}
    </nav>
  );
};

const navBar = () => {
  return (
    <div>
      <NavigationBar />
    </div>
  );
};

export default navBar;
