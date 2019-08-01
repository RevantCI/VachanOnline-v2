import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import API from "../../store/api";
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
    if (props.sourceId && props.bookCode && props.chapter) {
      setIsLoading(true);
      API.get(
        "bibles/" +
          props.sourceId +
          "/books/" +
          props.bookCode +
          "/chapters/" +
          props.chapter +
          "/verses/1"
      )
        .then(function(response) {
          setBibleVerses(response.data);
          setIsLoading(false);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }, [props.sourceId, props.bookCode, props.chapter]);

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
          <span>
            {bibleVerses.verseNumber}. {bibleVerses.verseContent.text}
          </span>
        </p>
      ) : (
        <h3>Loading</h3>
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
    sourceId: state.sourceId,
    bookCode: state.bookCode,
    chapter: state.chapter
  };
};
export default connect(mapStateToProps)(Bible);
