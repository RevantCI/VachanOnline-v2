import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import TopBar from "./TopBar";
import BiblePane from "./BiblePane";
import BibleMenu from "./BibleMenu";
import { getBooks } from "../common/utillity";

const useStyles = makeStyles(theme => ({
  biblePane1: {
    position: "absolute",
    width: "96%",
    height: "100%",
    backgroundColor: "#fff",
    borderRight: "1px solid #f7f7f7",
    overflow: "hidden"
  },
  biblePane2: {
    position: "absolute",
    width: "47%",
    height: "100%",
    backgroundColor: "#fff",
    borderRight: "1px solid #f7f7f7",
    overflow: "hidden",
    "&:nth-child(2)": {
      right: "6%",
      backgroundColor: "#fff"
    }
  },
  rightMenu: {
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
  }
}));
const ReadBible = props => {
  const classes = useStyles();
  const [parallelBible, setParallelBible] = React.useState(false);
  function toggleParallelBible() {
    setParallelBible(!parallelBible);
  }
  let { versions, setValue2 } = props;
  React.useEffect(() => {
    if (parallelBible) {
      if (versions.length > 0) {
        let versionObj = versions[0].languageVersions[0];
        setValue2(
          "version",
          versionObj.language.name + "-" + versionObj.version.code.toUpperCase()
        );
        setValue2("sourceId", versionObj.sourceId);
        getBooks(setValue2, versionObj.sourceId);
      }
    }
  }, [parallelBible, versions, setValue2]);
  let pane;
  if (!parallelBible) {
    pane = (
      <div className={classes.biblePane1}>
        <BiblePane setValue={props.setValue1} paneData={props.panel1} />
      </div>
    );
  } else {
    pane = (
      <>
        <div className={classes.biblePane2}>
          <BiblePane setValue={props.setValue1} paneData={props.panel1} />
        </div>
        <div className={classes.biblePane2}>
          <BiblePane setValue={props.setValue2} paneData={props.panel2} />
        </div>
      </>
    );
  }
  return (
    <>
      <TopBar />
      <div>
        {pane}
        <div className={classes.rightMenu}>
          <BibleMenu toggleParallelBible={toggleParallelBible} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    versions: state.versions,
    panel1: state.panel1,
    panel2: state.panel2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue1: (name, value) =>
      dispatch({ type: actions.SETVALUE1, name: name, value: value }),
    setValue2: (name, value) =>
      dispatch({ type: actions.SETVALUE2, name: name, value: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadBible);
