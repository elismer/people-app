import { TextField, makeStyles, Card, Button } from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "350px",
    padding: "15px",
    margin: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "10px",
  },
}));

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
  const [ipAddressState, setIpAddressState] = useState(ip_address);
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Name"
          type="text"
          value={firstNameState}
          onChange={(e) => setFirstNameState(e.target.value)}
        />
        <TextField
          label="Lastname"
          type="text"
          value={lastNameState}
          onChange={(e) => setLastNameState(e.target.value)}
        />
        <TextField
          label="email"
          type="text"
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
        />
        <TextField
          label="gender"
          type="text"
          value={genderState}
          onChange={(e) => setGenderState(e.target.value)}
        />
        <TextField
          label="IP Address"
          type="text"
          value={ipAddressState}
          onChange={(e) => setIpAddressState(e.target.value)}
        />
        <Button variant="contained" className={classes.button} type="submit">
          Enviar
        </Button>
      </form>
    </Card>
  );
};

export default PersonForm;
