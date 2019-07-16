import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Combo from "../common/Combo";
import Popover from "@material-ui/core/Popover";
// import MailIcon from "@material-ui/icons/Mail";
import { versions, bookChapters } from "../../data/bibledata";
// import { Paper } from "@material-ui/core";
import Setting from "../common/Setting";
import Bible from "./Bible";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // position: "absolute",
    top: 0,
    display: "flex",
    width: "100%"
  },
  appBar: {
    background: "#3970a7",
    padding: "0px 20px"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    "& a": {
      color: "inherit",
      textDecoration: "none"
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
    margin: theme.spacing(0),
    color: "white",
    borderColor: "white",
    backgroundColor: "#007bff"
  },
  read: {
    // position: "absolute",

    padding: "10px 6%",
    // display: "flex",
    width: "100%",
    borderBottom: "1px solid #ddd"
    // marginLeft: "47%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  btn: {
    border: "1px solid #ccc",
    textAlign: "left",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginRight: theme.spacing(1)
  },
  box: {
    width: "30%",
    display: "inline-block",
    backgroundColor: "#00f"
  },
  select: {
    marginTop: "-8px"
  },
  info: {
    marginTop: 2
  },
  items: {
    textAlign: "right"
  },
  paper1: {
    width: "80%"
  },
  content: {
    padding: 20,
    lineHeight: 2,
    fontSize: 16,
    backgroundColor: "#5181a9",
    color: "#fff"
  },
  bible: {
    display: "flex",
    width: "100%",
    // backgroundColor: "#f0f0f0",
    padding: "0px 0px"
  }
}));

const PageHeader = props => {
  const chapters = props.book !== "" ? bookChapters[props.book] : 0;

  let chapterList = [...new Array(chapters)].map((x, i) => i + 1);
  const books = Object.keys(bookChapters);
  books.unshift("");
  chapterList.unshift("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              <Link to="/">Vachanonline</Link>
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
      <Grid container className={classes.read}>
        <Grid item xs={6}>
          <Combo
            className={classes.select}
            name="version"
            label="Version"
            options={versions}
            value={props.version}
            onchange={val => props.setValue("version", val)}
            stylePadding="40px"
          />
          <Combo
            name="book"
            label="Book"
            options={books}
            value={props.book}
            onchange={val => props.setValue("book", val)}
            stylePadding="40px"
          />
          <Combo
            name="chapter"
            label="Chapter"
            options={chapterList}
            value={props.chapter}
            onchange={val => props.setValue("chapter", val)}
            stylePadding="40px"
          />
        </Grid>
        <Grid item xs={6} className={classes.items}>
          <div>
            <Button
              aria-describedby={id}
              onClick={handleClick}
              className={classes.info}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1976D2"
                  d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                />
              </svg>
            </Button>
            <Popover
              id={id}
              className={classes.paper1}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <div className={classes.content}>
                <h2>SvgIcon components</h2>
                It's interesting to have the building blocks needed to implement
                custom icons, but what about presets? We provide a separate npm
                package, @material-ui/icons, that includes the 1,000+ official
                Material icons converted to SvgIcon components. It's interesting
                to have the building blocks needed to implement custom icons,
                but what about presets? We provide a separate npm package,
                @material-ui/icons, that includes the 1,000+ official Material
                icons converted to SvgIcon components. It's interesting to have
                the building blocks needed to implement custom icons, but what
                about presets? We provide a separate npm package,
                @material-ui/icons, that includes the 1,000+ official Material
                icons converted to SvgIcon components.
              </div>
            </Popover>
            <Button>
              <svg
                style={{ width: "24px", height: "24px", color: "blue" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1976D2"
                  d="M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z"
                />
              </svg>
            </Button>
            <Setting />
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.bible}>
        <Grid item xs={12}>
          <Bible />
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = state => {
  return {
    version: state.version,
    book: state.book,
    chapter: state.chapter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) =>
      dispatch({ type: actions.SETVALUE, name: name, value: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeader);
