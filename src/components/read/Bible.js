import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import API from "../../store/api";
import { bookChapters } from "../../data/bibledata";
const useStyles = makeStyles(theme => ({
  biblePanel: {
    padding: "25px 8%",
    backgroundColor: "white",
    lineHeight: 2,
    "& p": {
      textAlign: "justify",
      color: "#616161"
    }
  }
}));
const Bible = props => {
  const fontFamily = props.fontFamily === "Sans" ? "Roboto" : "Roboto Slab";
  const [bibleVerses, setBibleVerses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    console.log(props.book);
    let bookNo = Object.keys(bookChapters).indexOf(props.book) + 1;
    setIsLoading(true);
    API.get(bookNo + "/" + props.chapter)
      .then(function(response) {
        setBibleVerses(response.data.verses);
        if (response.data.verses !== undefined) setIsLoading(false);
      })
      .catch(function(error) {
        console.log(error);
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
        <h3>Book not available</h3>
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
