import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
const useStyle = makeStyles({
  card: {
    width: "300px",
    height: "150px",
    display: "flex",
    margin: "15px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
});

export default function Person({
  first_name,
  last_name,
  email,
  gender,
  ip_address,
}) {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>
          <PersonIcon />
          Nombre: {first_name}
        </Typography>
        <Typography>Apellido: {last_name}</Typography>
        <Typography>email: {email}</Typography>
        <Typography>gender: {gender}</Typography>
        <Typography>ip_address: {ip_address}</Typography>
      </CardContent>
    </Card>
  );
}
