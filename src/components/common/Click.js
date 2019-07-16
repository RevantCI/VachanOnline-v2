// import React from "react";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1.5)
  }
}));
const Click = () => {
  let label = "Read";
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button}>
      {" "}
      {label}
    </Button>
  );
};

export default Click;

// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1.5)
//   }
// }));
// export default class Click extends Component {
//   render() {
//     let label = "Read";
//     const classes = useStyles();
//     return (
//       <div>
//         <Button variant="contained" className={classes.button}>
//           {label}
//         </Button>
//       </div>
//     );
//   }
// }
