import React from "react";

export default function FilterPeople({ handlerChange, handlerSearch, value }) {
  return (
    <div>
      <input onChange={handlerChange} value={value} />
      <button onClick={handlerSearch}>Buscar</button>
    </div>
  );
}
