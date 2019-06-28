import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import LandingMenu from "./LandingMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 0,
    display: "flex",
    width: "100%"
  },
  appBar: {
    background: "rgba(0,0,0,0.5)"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing(15),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 200,
      "&:focus": {
        width: 240
      }
    }
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    backgroundColor: "#007bff"
  }
}));

const CarouselHeader = ({ menus, aboutUs, contactUs }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <LandingMenu
              menus={menus}
              aboutUs={aboutUs}
              contactUs={contactUs}
            />
            <Typography className={classes.title} variant="h5" noWrap>
              Vachanonline
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "Search" }}
              />
            </div>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default CarouselHeader;
