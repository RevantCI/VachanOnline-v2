import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import BiblePane from "./BiblePane";
import BibleMenu from './BibleMenu';
import Search from './Search'
const useStyles = makeStyles(theme => ({
  biblePane2: {
    position: "absolute",
    width: "47.5%",
    height: "100%",
    backgroundColor: "#fff",
    borderRight: "1px solid #f7f7f7",
    overflow: "hidden",
    "&:nth-child(3)": {
      left: "47.5%",
      backgroundColor: "#fff",
    }
  },
  biblePane3: {
    width: "5%",
    backgroundColor: "#2e639a",
    position: "absolute",
    height: "100vh",
    paddingTop: "60px",
    maxHeight: "100%",
    right: 0,
    bottom: 0,
    overflow: "hidden",
    textAlign: "center"
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
        <Search />
      </div>
      <div className={classes.biblePane3}>
        <BibleMenu />
      </div>

    </>
  );
};

export default ReadBible;
