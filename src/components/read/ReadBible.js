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
import Fullscreen from "react-full-screen";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Combo from "../common/Combo";
import Popover from "@material-ui/core/Popover";
import { versions, bookChapters } from "../../data/bibledata";
import Setting from "../common/Setting";
import Bible from "./Bible";

const useStyles = makeStyles(theme => ({
  root: {
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
    padding: "10px 6%",
    width: "100%",
    borderBottom: "1px solid #f1ecec"
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
    padding: 0,
    width: "40px",
    marginTop: 20,
    marginRight: "8px",
    color: "#1976D2",
    cursor: "pointer"
  },
  settings: {
    padding: 0,
    width: "40px",
    marginTop: 19,
    marginLeft: "-10px",
    color: "#1976D2",
    cursor: "pointer"
  },

  items: {
    justify: "flex-end",
    float: "right"
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
    padding: "0px 0px"
  },
  fullscreen: {
    backgroundColor: "#fff"
  },
  materialIcon: {
    width: 30
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

  const [fullscreen, setFullscreen] = React.useState(false);
  function goFull() {
    setFullscreen(true);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [anchorEl1, setAnchorEl1] = React.useState(false);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
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
        <Grid
          item
          xs={6}
          className={classes.items}
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
          <div
            aria-describedby={id}
            onClick={handleClick}
            className={classes.info}
          >
            <i class="material-icons md-32">info_outline</i>
          </div>
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
              to have the building blocks needed to implement custom icons, but
              what about presets? We provide a separate npm package,
              @material-ui/icons, that includes the 1,000+ official Material
              icons converted to SvgIcon components. It's interesting to have
              the building blocks needed to implement custom icons, but what
              about presets? We provide a separate npm package,
              @material-ui/icons, that includes the 1,000+ official Material
              icons converted to SvgIcon components.
            </div>
          </Popover>
          <div className={classes.info} onClick={goFull}>
            <i class="material-icons md-32">zoom_out_map</i>
          </div>
          <div
            className={classes.settings}
            aria-label="More"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick1}
          >
            <i class="material-icons md-36">more_vert</i>
          </div>
          <Setting
            handleClick={handleClick1}
            anchorEl={anchorEl1}
            handleClose={handleClose1}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.bible}>
        <Grid item xs={12}>
          <Fullscreen
            enabled={fullscreen}
            onChange={fullscreen => setFullscreen(fullscreen)}
            className={classes.fullscreen}
          >
            <Bible />
          </Fullscreen>
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
