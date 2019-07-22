import React from "react";
import BookCombo from "../common/BookCombo";
import Version from "../read/Version";
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
    bottom: 80,
    height: "auto",
    padding: "15px 30px",
    // borderRadius: 20,
    boxShadow: "2px 2px 3px #968e8e",
    backgroundColor: "#0f3c5f"
  },
  button: {
    margin: theme.spacing(1.5),
    backgroundColor: "#fff",
    border: "1px solid #fff",
    "& hover": {
      textDecoration: "none"
    }
  },
  heading: {
    color: "#fff",
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
        <Version
          versions={versions}
          version={props.version}
          setValue={props.setValue}
        />
        <BookCombo
          book={props.book}
          chapter={props.chapter}
          setValue={props.setValue}
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
