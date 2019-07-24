import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { bookChapters } from "../../data/bibledata";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles(theme => ({
  biblePanel: {
    padding: "25px 8%",
    backgroundColor: "white",
    lineHeight: 2,
    fontFamily: "var(--fontFamily)",
    fontSize: "var(--fontSize",
    "& p": {
      textAlign: "justify",
      color: "#616161"
    }
  }
}));
const Bible = props => {
  const instance = axios.create({
    baseURL: "https://stagingapi.autographamt.com/v1/sources/18/json/",
    timeout: 1000
  });
  const fontFamily = props.fontFamily === "Sans" ? "Roboto" : "Roboto Slab";
  const [bibleVerses, setBibleVerses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    console.log(props.book);
    let bookNo = Object.keys(bookChapters); //.indexOf(props.book);
    console.log(bookNo);
    console.log(bookNo.indexOf(props.book) + 1);
    instance
      .get("58/" + props.chapter)
      .then(function(response) {
        setBibleVerses(response.data.verses);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.book, props.chapter]);

  const classes = useStyles();
  return (
    <div
      className={classes.biblePanel}
      style={{
        fontFamily: fontFamily,
        fontSize: props.fontSize
      }}
    >
      {!isLoading ? (
        <p>
          {bibleVerses.map(verse => {
            const { number, text } = verse;
            return (
              <span key={number}>
                {number}. {text}
              </span>
            );
          })}
        </p>
      ) : (
        <h3>Loading...</h3>
      )}
      <Fab
        size="small"
        color="default"
        aria-label="Add"
        style={{ position: "fixed", top: "50vh", left: "2%" }}
      >
        <KeyboardArrowLeft />
      </Fab>
      <Fab
        size="small"
        color="default"
        aria-label="Add"
        style={{
          position: "fixed",
          top: "50vh",
          right: "3%"
        }}
      >
        <KeyboardArrowRight />
      </Fab>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    fontSize: state.fontSize,
    fontFamily: state.fontFamily,
    book: state.book,
    chapter: state.chapter
  };
};
export default connect(mapStateToProps)(Bible);
