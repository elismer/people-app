import React, { useState, useEffect } from "react";
import ListPeople from "../components/listPeople";
import Person from "../components/person";
import "./People.css";
const People = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     peopleList: [],
  //     person: undefined,
  //     loading: false,
  //     error: null,
  //   };
  // }
  const [peopleList, setPeopleList] = useState([]);
  const [person, setPerson] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   try {
  //     const { people } = await fetch("http://localhost:5050/api/people").then(
  //       (response) => response.json()
  //     );
  //     this.setState({
  //       peopleList: people,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     this.setState({
  //       loading: false,
  //       error: error,
  //     });
  //   }
  // }

  useEffect(() => {
    const getPeopleList = async () => {
      setLoading(true);
      try {
        const { people } = await fetch("http://localhost:5050/api/people").then(
          (response) => response.json()
        );
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

  if (loading) return <h1>Cargando...</h1>;
  if (error)
    return (
      <>
        <h1>Ocurrio un error</h1>
        <p>{error.message}</p>
      </>
    );
  return (
    <div className="list">
      <ListPeople data={peopleList} handleClick={handleClick} />
      {person && <Person {...person} className="personItem" />}
    </div>
  );
};

export default People;
