import React, { useState } from "react";
import PersonForm from "../components/editForm";
import FilterPeople from "../components/filterPeople";
import { emailValidation } from "../utils/const";

const EditPerson = (props) => {
  const [email, setEmail] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlerChange = (e) => {
    setEmail(e.target.value);
  };

  const handlerSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email.match(emailValidation)) throw new Error("email invalido");
      const { person } = await fetch(
        `http://localhost:5050/api/people/${email}`
      ).then((response) => response.json());
      setData(person);
      setLoading(false);
      setError(null);
      // this.setState({
      //   data: person,
      //   loading: false,
      //   error: false,
      // });
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
      // this.setState({
      //   loading: false,
      //   error: error,
      //   data: null,
      // });
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    alert("Persona modificada");
  };

  return (
    <div>
      <FilterPeople
        handlerChange={handlerChange}
        handlerSearch={handlerSearch}
      />
      {loading && <h1>Cargando...</h1>}
      {error && <p>Error: {error.message}</p>}
      {data && <PersonForm {...data} handleSubmit={handleSumbit} />}
    </div>
  );
};

export default EditPerson;
