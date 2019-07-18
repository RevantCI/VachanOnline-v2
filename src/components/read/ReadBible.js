import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fullscreen from "react-full-screen";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Bible from "./Bible";

const useStyles = makeStyles(theme => ({
  bible: {
    display: "flex",
    width: "100%",
    padding: "0px 0px"
  },
  fullscreen: {
    backgroundColor: "#fff"
  }
}));

const PageHeader = props => {
  const classes = useStyles();
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <>
      <TopBar />
      <MenuBar
        version={props.version}
        setValue={props.setValue}
        setFullscreen={setFullscreen}
      />
      <Grid container className={classes.bible}>
        <Grid item xs={12}>
          <Fullscreen
            enabled={fullscreen}
            onChange={fullscreen => setFullscreen(fullscreen)}
            className={classes.fullscreen}
          >
            <Bible />
          </Fullscreen>
        </Grid>
      </Grid>
    </>
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
)(PageHeader);
