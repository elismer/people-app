import React, { useState, useMemo } from "react";
import FilterPeople from "../filterPeople";
import { searchPeople } from "../../utils/searchPeople";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  TableContainer,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
const useSearchPeople = (data) => {
  const [query, setQuery] = useState("");
  const [filterPeople, setFilterPeople] = useState(data);

  useMemo(() => {
    const [filter, value] = query.split(":");
    const filterNormalized = filter.toLocaleLowerCase().trim();
    const valueNormalized = value?.toLocaleLowerCase().trim() || "";
    const props = { data, query: valueNormalized || filterNormalized };
    const result = searchPeople[filterNormalized]
      ? searchPeople[filterNormalized](props)
      : //TODO Busqueda Global
        searchPeople.nombre(props);
    setFilterPeople(result);
  }, [query, data]);

  return { query, setQuery, filterPeople };
};

export default function ListPeople({ data, handleClick }) {
  const { query, setQuery, filterPeople } = useSearchPeople(data);
  const [placeHolder, setPlaceHolder] = useState(query);
  const handlerChange = (e) => {
    setPlaceHolder(e.target.value);
  };

  const handlerSearch = (e) => {
    setQuery(placeHolder);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FilterPeople
        handlerSearch={handlerSearch}
        handlerChange={handlerChange}
        value={placeHolder}
      />
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table">
          <TableBody>
            {filterPeople.map((person, index) => {
              return (
                <TableRow key={index} onClick={() => handleClick(person)}>
                  <TableCell>{person.first_name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
