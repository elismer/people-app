import React from "react";
import ListPeople from "../components/listPeople";
import Person from "../components/person";
import "./People.css";
export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList: [],
      person: undefined,
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    try {
      const { people } = await fetch("http://localhost:5050/api/people").then(
        (response) => response.json()
      );
      this.setState({
        peopleList: people,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  handleClick = (person) => {
    this.setState({
      person,
    });
  };

  render() {
    const { peopleList, person, loading, error } = this.state;
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
        <ListPeople data={peopleList} handleClick={this.handleClick} />
        {person && <Person {...person} className="personItem" />}
      </div>
    );
  }
}
