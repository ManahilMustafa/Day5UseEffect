import React, { useEffect, useState } from 'react';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. Fetch user data when the component mounts (run once).
  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch('https://api.example.com/user/1');
      const data = await response.json();
      setUser(data);
    }

    fetchUserData();
  }, []); // Empty dependency array means this runs only once after the initial render.

  // 2. Update the document title when the user data changes (runs every time user data updates).
  useEffect(() => {
    if (user) {
      document.title = `${user.name}'s Dashboard`;
    }
  }, [user]); // This effect runs whenever the `user` state changes.

  // 3. Add an event listener for window resize and update state when window size changes.
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // 4. Cleanup the event listener when the component is unmounted.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this effect runs only once after the initial render.

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user ? <p>Hello, {user.name}!</p> : <p>Loading user data...</p>}
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
}

export default UserDashboard;

