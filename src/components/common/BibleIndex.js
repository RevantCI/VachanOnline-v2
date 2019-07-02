import React from "react";
import Combo from "./Combo";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    marginBottom: -30
  },
  bibleIndex: {
    margin: "auto",
    position: "relative",
    bottom: 70,
    height: 128,
    padding: "0px 30px",
    borderRadius: 20,
    boxShadow: "2px 2px 3px #968e8e"
  },
  button: {
    margin: theme.spacing(1.5)
  },
  heading: {
    color: "#2f2f2f",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10
  }
}));
const BibleIndex = ({ versions, books, chapters, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.bibleIndex}>
        <Typography variant="h5" gutterBottom className={classes.heading}>
          Read Bible
        </Typography>
        <Combo name="version" label="Version" options={versions} />
        <Combo name="book" label="Book" options={books} />
        <Combo name="chapter" label="Chapter" options={chapters} />
        <Button size="large" variant="contained" className={classes.button}>
          {label}
        </Button>
      </Paper>
    </div>
  );
};
export default BibleIndex;
