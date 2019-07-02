import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  aboutUs: {
    textAlign: "center",
    marginBottom: 100
  }
}));
const AboutUs = props => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Typography className={classes.aboutUs} variant="h6">
          {props.aboutUs}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
