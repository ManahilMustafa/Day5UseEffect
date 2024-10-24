import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. Start the timer when the component mounts and update every second.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // Increment every second.

    // 2. Cleanup the timer when the component unmounts.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs only once on mount.

  // 3. Listen for window resize and update the window width.
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // 4. Cleanup the resize event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this effect runs only once.

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
}

export default Timer;
