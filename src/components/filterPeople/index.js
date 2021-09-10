import React from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    marginLeft: "5px",
    textTransform: "none",
    color: "#fff",
    fontSize: "1.125rem",
    fontWeight: 400,
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    height: "50px",
    background:
      "linear-gradient(130deg, rgba(109,90,250,1) 0%, rgba(127,38,247,1) 100%)",
    "&$disabled": {
      color: "rgba(255, 255, 255,0.7)",
    },
    lineHeight: "1.25",
  },
}));

export default function FilterPeople({ handlerChange, handlerSearch, value }) {
  const classes = useStyle();
  return (
    <div className={classes.div}>
      <TextField onChange={handlerChange} variant="outlined" value={value} />
      <Button
        className={classes.root}
        onClick={handlerSearch}
        variant="contained"
      >
        <Search />
      </Button>
    </div>
  );
}
