import React, { useState } from "react";

const PersonForm = ({
  first_name,
  last_name,
  email,
  gender,
  ip_address,
  handleSubmit,
}) => {
  // constructor(props) {
  //   super(props);
  //   const { first_name, last_name, email, gender, ip_address } = props;
  //   this.state = {
  //     first_name,
  //     last_name,
  //     email,
  //     gender,
  //     ip_address,
  //   };
  //   this.handleSubmit = props.handleSubmit;
  // }

  const [firstNameState, setFirstNameState] = useState(first_name);
  const [lastNameState, setLastNameState] = useState(last_name);
  const [emailState, setEmailState] = useState(email);
  const [genderState, setGenderState] = useState(gender);
  const [ipAddresState, setIpAddresState] = useState(ip_address);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={firstNameState}
          onChange={(e) => setFirstNameState(e.target.value)}
        />
      </label>
      <label>
        Lastname:
        <input
          type="text"
          value={lastNameState}
          onChange={(e) => setLastNameState(e.target.value)}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
        />
      </label>
      <label>
        gender:
        <input
          type="text"
          value={genderState}
          onChange={(e) => setGenderState(e.target.value)}
        />
      </label>
      <label>
        IP Address:
        <input
          type="text"
          value={ipAddresState}
          onChange={(e) => setIpAddresState(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PersonForm;
