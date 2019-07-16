import React from "react";
import Combo from "./Combo";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import { versions, bookChapters } from "../../data/bibledata";
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
    height: "auto",
    padding: "25px 30px",
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
const BibleIndex = props => {
  const chapters = props.book !== "" ? bookChapters[props.book] : 0;
  let label = "Read";
  let chapterList = [...new Array(chapters)].map((x, i) => i + 1);
  const books = Object.keys(bookChapters);
  books.unshift("");
  chapterList.unshift("");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.bibleIndex}>
        <Typography variant="h5" gutterBottom className={classes.heading}>
          Read Bible
        </Typography>
        <Combo
          name="version"
          label="Version"
          options={versions}
          value={props.version}
          onchange={val => props.setValue("version", val)}
        />
        <Combo
          name="book"
          label="Book"
          options={books}
          value={props.book}
          onchange={val => props.setValue("book", val)}
        />
        <Combo
          name="chapter"
          label="Chapter"
          options={chapterList}
          value={props.chapter}
          onchange={val => props.setValue("chapter", val)}
        />
        <Link
          to={{
            pathname: "/read",
            hash: "#submit",
            search: "?quick-search=true"
          }}
        >
          <Button variant="contained" className={classes.button}>
            {" "}
            {label}
          </Button>
        </Link>
      </Paper>
    </div>
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
)(BibleIndex);
