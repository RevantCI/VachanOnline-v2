import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  landingFooter: {
    backgroundColor: "#2275bb",
    color: "#fff",
    padding: "5px 20px",
    marginTop: 40,
    textAlign: "center",
    "&div": {
      display: "inline-block",
      paddingTop: theme.spacing(3)
    }
  },
  text: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  link: {
    borderRight: "1px solid #fff",
    display: "inline-block",
    padding: "0px 10px",
    fontSize: 18,
    marginTop: 8,
    "&:last-child": {
      borderRight: 0
    }
  },
  button: {
    marginTop: 5
  }
}));
const LandingFooter = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.landingFooter}>
      <Grid xs={12} md={4}>
        {props.links.map(linkText => (
          <Link
            className={classes.link}
            onClick={props.toggleModal("aboutUs", true)}
          >
            {linkText}{" "}
          </Link>
        ))}
      </Grid>
      <Grid xs={12} md={5}>
        <Link>
          <Typography className={classes.text}>{props.copyright}</Typography>
        </Link>
      </Grid>
      <Grid xs={12} md={3}>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={classes.button}
        >
          {props.subscribe}
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingFooter;
