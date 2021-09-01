import React from "react";
import PersonForm from "../components/editForm";
import Person from "../components/person";
import { emailValidation } from "../utils/const";

class EditPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      data: null,
      loading: false,
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.stateerror)
      console.log({ prevState, prevProps, state: this.state });
  }

  handlerChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlerSearch = async (e) => {
    const { email } = this.state;
    e.preventDefault();
    try {
      if (!email.match(emailValidation)) throw new Error("email invalido");
      const { person } = await fetch(
        `http://localhost:5050/api/people/${email}`
      ).then((response) => response.json());
      this.setState({
        data: person,
        loading: false,
        error: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        loading: false,
        error: error,
        data: null,
      });
    }
  };

  handleSumbit = (values) => {};

  render() {
    const { data, error } = this.state;
    return (
      <div>
        <input onChange={this.handlerChange} />
        <button onClick={this.handlerSearch}>Buscar</button>
        {error && <p>Error: {error.message}</p>}
        {data && (
          <PersonForm
            {...data}
            handleSubmit={(e) => {
              e.preventDefault();
              alert("");
            }}
          />
        )}
      </div>
    );
  }
}

export default EditPerson;
