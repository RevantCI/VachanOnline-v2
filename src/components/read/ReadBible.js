import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import BiblePane from "./BiblePane";

const useStyles = makeStyles(theme => ({
  biblePane2: {
    position: "absolute",
    width: "50%",
    height: "100%",
    overflow: "hidden",
    "&:nth-child(3)": {
      left: "50%"
    }
  }
}));
const ReadBible = () => {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <div className={classes.biblePane2}>
        <BiblePane />
      </div>
      <div className={classes.biblePane2}>
        <BiblePane />
      </div>
    </>
  );
};

export default ReadBible;
