import React, { useEffect, useState } from 'react'
//runs  on only first render
function Variation2 () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("I will run on only first render")
    }, []) 
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

export default Variation2