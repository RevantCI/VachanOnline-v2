import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  }
}));

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography variant="h4" id="modal-title">
        Subscribe
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description" />
      <TextField
        id="standard-textarea"
        label="Email"
        placeholder="Enter Email Address"
        className={classes.textField}
        margin="normal"
      />
    </div>
  );
};
export default Subscribe;
