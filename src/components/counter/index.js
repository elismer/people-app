import React, { useState } from "react";

export default function Count({ init }) {
  const [count, setCount] = useState(init);

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
