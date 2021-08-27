import React from "react";
import Person from "../person";

export default function ListPeople({ data }) {
  return (
    <div>
      <ul>
        {data.map((person) => {
          const { id, ...info } = person;
          return (
            <li key={id}>
              <Person {...info} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
