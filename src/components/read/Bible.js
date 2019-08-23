import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import * as actions from "../../store/actions";
import API from "../../store/api";
import { nextChapter, previousChapter } from "../common/utillity";
const useStyles = makeStyles(theme => ({
  biblePanel: {
    paddingLeft: 85,
    backgroundColor: "white",
    lineHeight: 2,
    position: "absolute",
    width: "100%",
    height: "100%",
    "& p": {
      textAlign: "justify",
      color: "#616161",
      marginBottom: 5
    },
    "& span": {
      textAlign: "justify",
      color: "#616161"
    }
  },
  bibleReadingPane: {
    position: "absolute",
    right: 85,
    left: 85,
    height: "100%",
    overflow: "auto"
  },
  prevChapter: {
    position: "absolute",
    top: "45%",
    left: 20
  },
  nextChapter: {
    position: "absolute",
    top: "45%",
    right: 20
  }
}));
const Bible = props => {
  const fontFamily =
    props.fontFamily === "Sans" ? "Roboto,Noto Sans" : "Roboto Slab,Martel";
  const [verses, setVerses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if (props.sourceId && props.bookCode && props.chapter) {
      //code to get chatper content if version, book or chapter changed
      setIsLoading(true);
      API.get(
        "bibles/" +
          props.sourceId +
          "/books/" +
          props.bookCode +
          "/chapter/" +
          props.chapter
      )
        .then(function(response) {
          setVerses(response.data.chapterContent.verses);
          setIsLoading(false);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }, [props.sourceId, props.bookCode, props.chapter]);

  //Function to load previous chapter
  const prevClick = () => {
    if (!isLoading) {
      previousChapter(
        props.setValue,
        props.sourceId,
        props.chapterList,
        props.chapter,
        props.bookList,
        props.bookCode
      );
    }
  };
  //Function to load next chapter
  const nextClick = () => {
    if (!isLoading) {
      nextChapter(
        props.setValue,
        props.sourceId,
        props.chapterList,
        props.chapter,
        props.bookList,
        props.bookCode
      );
    }
  };
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
        <div className={classes.bibleReadingPane}>
          {verses.map(item => (
            <span key={item.number}>
              {item.metadata &&
              item.metadata[0] &&
              item.metadata[0]["styling"] &&
              (item.metadata[0]["styling"][0] === "p" ||
                item.metadata[0]["styling"][0].startsWith("q")) ? (
                <p>
                  {item.number}. {item.text}
                </p>
              ) : (
                <span>
                  {item.number}. {item.text}
                </span>
              )}
            </span>
          ))}
        </div>
      ) : (
        <h3>Loading</h3>
      )}
      <Fab
        size="small"
        color="default"
        aria-label="Add"
        className={classes.prevChapter}
        onClick={prevClick}
      >
        <KeyboardArrowLeft />
      </Fab>
      <Fab
        size="small"
        color="default"
        aria-label="Add"
        className={classes.nextChapter}
        onClick={nextClick}
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
    chapter: state.chapter,
    chapterList: state.chapterList,
    bookList: state.bookList
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
)(Bible);
