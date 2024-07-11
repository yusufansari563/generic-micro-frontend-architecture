import React from 'react'

function Count() {
    const [count, setCount] = React.useState(0);
  return (
    <>
        <div role='countDiv'>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default Count