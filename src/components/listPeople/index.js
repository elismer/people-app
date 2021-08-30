import React from "react";

export default function ListPeople({ data, handleClick }) {
  return (
    <div>
      <ul>
        {data.map((person, index) => {
          return (
            <li key={index} onClick={() => handleClick(person)}>
              <p> Nombre: {person.first_name} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
