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
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const { people } = await fetch("http://localhost:5050/api/people").then(
      (response) => response.json()
    );
    this.setState({
      peopleList: people,
      loading: false,
    });
  }

  handleClick = (person) => {
    this.setState({
      person,
    });
  };

  render() {
    const { peopleList, person, loading } = this.state;
    if (loading) return <h1>Cargando...</h1>;
    return (
      <div className="list">
        <ListPeople data={peopleList} handleClick={this.handleClick} />
        {person && <Person {...person} className="personItem" />}
      </div>
    );
  }
}
