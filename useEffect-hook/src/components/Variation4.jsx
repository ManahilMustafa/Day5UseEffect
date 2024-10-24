import React, { useEffect, useState } from 'react'
//Multiple dependcies
function Variation4 () {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        alert("I will run on only when count/total is updated")
    }, [count, total]) 
    function handleClick() {
        setCount(count+1);
       
    }
    function handleClickTotal() {
        setTotal(total+1);
    }
  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is: {total}
    </div>
  )
}

export default Variation4