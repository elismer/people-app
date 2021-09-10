import React, { useState, useEffect } from "react";
import ListPeople from "../components/listPeople";
import Person from "../components/person";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "'center',",
  },
  person: {
    background: "white",
    position: "sticky",
    top: 20,
    bottom: 20,
    marginLeft: "5px",
    paddingTop: "40px",
    paddingBottom: "40px",
    zIndex: 5,
  },
}));
const People = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [person, setPerson] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log({ peopleList });
  useEffect(() => {
    const getPeopleList = async () => {
      setLoading(true);
      if (peopleList)
        try {
          const { people } = await fetch(
            "http://localhost:5050/api/people"
          ).then((response) => response.json());
          setPeopleList(people);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
          setError(error);
        }
    };
    getPeopleList();
  }, []);

  const handleClick = (person) => {
    // this.setState({
    //   person,
    // });
    setPerson(person);
  };
  const clasess = useStyle();
  if (loading) return <h1>Cargando...</h1>;
  if (error)
    return (
      <>
        <h1>Ocurrio un error</h1>
        <p>{error.message}</p>
      </>
    );
  return (
    <div className={clasess.list}>
      <ListPeople data={peopleList} handleClick={handleClick} />
      <div>{person && <Person {...person} className={clasess.person} />}</div>
    </div>
  );
};

export default People;
