import React, { useEffect, useState } from 'react'
//runs  only when count updated or changes
function Variatioon3 () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("I will run only when count changes")
    }, [count]) 
    function handleClick() {
        setCount(count+1);
    }
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      <br/>
      Count is: {count}
    </div>
  )
}

export default Variatioon3