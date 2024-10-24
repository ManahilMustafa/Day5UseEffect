import React, { useEffect, useState } from 'react';

function KeyPressDetector() {
  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeyPressed(event.key);
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array so the effect runs once, when the component mounts

  return (
    <div>
      <h1>Press any key</h1>
      {keyPressed && <p>You pressed: {keyPressed}</p>}
    </div>
  );
}

export default KeyPressDetector;
