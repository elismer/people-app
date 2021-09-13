import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const LinkButton = (props) => (
  <Button color="inherit" component={Link} {...props} />
);
export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LinkButton to="/">Home</LinkButton>
        <LinkButton to="/edit">Editar</LinkButton>
      </Toolbar>
    </AppBar>
  );
}
