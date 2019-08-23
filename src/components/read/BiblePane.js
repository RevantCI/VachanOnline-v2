import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fullscreen from "react-full-screen";
import MenuBar from "./MenuBar";
import Bible from "./Bible";

const useStyles = makeStyles(theme => ({
  bible: {
    display: "flex",
    width: "100%",
    padding: "0px 0px",
    position: "absolute",
    top: 135,
    bottom: 0,
    overflow: "auto"
  },
  fullscreen: {
    backgroundColor: "#fff"
  }
}));

const BiblePane = bibleNo => {
  const classes = useStyles();
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <>
      <MenuBar setFullscreen={setFullscreen} bibleNo={bibleNo} />
      <Grid container className={classes.bible}>
        <Grid item xs={12}>
          <Fullscreen
            enabled={fullscreen}
            onChange={fullscreen => setFullscreen(fullscreen)}
            className={classes.fullscreen}
          >
            <Bible bibleNo={bibleNo} />
          </Fullscreen>
        </Grid>
      </Grid>
    </>
  );
};

export default BiblePane;
