import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import BiblePane from "./BiblePane";
import BibleMenu from './BibleMenu';
const useStyles = makeStyles(theme => ({
  biblePane2: {
    position: "absolute",
    width: "47%",
    // paddingLeft: "22px",
    // backgroundColor: "#ddd",
    height: "100%",
    borderRight: "1px solid #f7f7f7",
    overflow: "hidden",
    "&:nth-child(3)": {
      left: "47%"
    }
  },
  biblePane3: {
    width: "6%",
    backgroundColor: "#3F0E40",
    position: "absolute",
    height: "100vh",
    paddingTop: "60px",
    maxHeight: "100%",
    right: 0,
    bottom: 0,
  },
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
      <div className={classes.biblePane3}>
        <BibleMenu />
      </div>

    </>
  );
};

export default ReadBible;
