
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user session, redirect to login page, etc.
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
