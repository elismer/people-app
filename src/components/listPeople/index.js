import React, { useState, useMemo } from "react";
import FilterPeople from "../filterPeople";

const useSearchPeople = (data) => {
  const [query, setQuery] = useState("");
  const [filterPeople, setFilterPeople] = useState(data);

  useMemo(() => {
    const result = data.filter((person) => {
      console.log({ person: person.first_name.toLowerCase(), query });
      return query
        ? person.first_name.toLowerCase().includes(query.toLowerCase())
        : true;
    });
    setFilterPeople(result);
  }, [query, data]);

  return { query, setQuery, filterPeople };
};

export default function ListPeople({ data, handleClick }) {
  const { query, setQuery, filterPeople } = useSearchPeople(data);

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <FilterPeople handlerChange={handlerChange} value={query} />
      <ul>
        {filterPeople.map((person, index) => {
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
