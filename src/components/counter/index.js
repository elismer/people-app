import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleClick = (type) => {
    type === "suma" ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => handleClick("suma")}>+</button>
      <button onClick={() => handleClick("resta")}>-</button>
    </div>
  );
}
