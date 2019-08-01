import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { getVersions, getBooks } from "../common/utillity";

const useStyles = makeStyles(theme => ({
  button: {
    left: theme.spacing(0),
    fontSize: "1rem",
    marginRight: 10,
    textTransform: "none",
    backgroundColor: "#fff",
    border: "1px solid #fff"
  },
  list: {
    padding: 0
  },
  menuRoot: {
    backgroundColor: "#3970a7",
    color: "#fff",
    boxShadow: "none"
  },
  expansionDetails: {
    backgroundColor: "#3970a7",
    color: "#fff",
    boxShadow: "none",
    padding: "0 0 0 20px"
  },
  border: {
    textTransform: "capitalize",
    borderBottom: "1px solid #cecece26"
  },
  icon: {
    left: 15,
    position: "relative"
  },
  paper: {
    maxHeight: 400,
    width: 300,
    border: "1px solid #d3d4d5",
    backgroundColor: "#3970a7",
    color: "#fff"
  }
}));
const Version = ({ versions, version, setValue }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  React.useEffect(() => {
    if (versions.length === 0) {
      getVersions(setValue);
    }
  }, [setValue, versions]);

  function handleClose() {
    setAnchorEl(null);
  }
  const setVersion = event => {
    handleClose();
    setValue("version", event.currentTarget.getAttribute("value"));
    getBooks(setValue, event.currentTarget.getAttribute("data-sourceid"));
  };
  const classesI = `material-icons ${classes.icon}`;
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        classes={{ root: classes.button }}
      >
        {version}
        <i className={classesI}>keyboard_arrow_downn</i>
      </Button>
      {versions.length === 0 ? (
        ""
      ) : (
        <>
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{
              list: classes.list,
              paper: classes.paper
            }}
          >
            {versions.map((version, i) => (
              <ExpansionPanel
                defaultExpanded={true}
                classes={{ root: classes.menuRoot }}
                key={i}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={classes.border}
                >
                  <Typography>{version.language}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ padding: 0 }}>
                  <List className={classes.expansionDetails}>
                    {version.languageVersions.map((item, i) => (
                      <ListItem
                        key={i}
                        value={item.version.name}
                        data-sourceid={item.sourceId}
                        onClick={setVersion}
                      >
                        {item.version.name}
                      </ListItem>
                    ))}
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};
export default Version;
