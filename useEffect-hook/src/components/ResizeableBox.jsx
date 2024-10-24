import React, { useEffect, useState } from 'react';

function ResizableBox() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. Listen for window resize events
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth); // Update state with new window width
    }

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this effect runs once on mount

  // 2. Set dynamic styles based on window width
  const boxStyle = {
    width: windowWidth > 1200 ? '400px' : windowWidth > 800 ? '300px' : '200px',
    height: windowWidth > 1200 ? '400px' : windowWidth > 800 ? '300px' : '200px',
    backgroundColor: windowWidth > 1200 ? 'green' : windowWidth > 800 ? 'blue' : 'red',
    transition: 'all 0.3s ease', // Smooth transitions for resizing
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
  };

  return (
    <div>
      <h1>Resize the window to see the box resize!</h1>
      <div style={boxStyle}>
        {windowWidth}px
      </div>
    </div>
  );
}

export default ResizableBox;
