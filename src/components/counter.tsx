import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button type='button' onClick={increase}>증가</button>
      <button type='button' onClick={decrease}>감소</button>
    </>
  );
}
