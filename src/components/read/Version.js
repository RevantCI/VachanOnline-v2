import React from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    left: theme.spacing(0),
    fontSize: "1rem",
    marginRight: 10,
    textTransform: "none"
  },
  list: {
    padding: 0
  },
  menuRoot: {
    backgroundColor: "#3970a7",
    color: "#fff"
  },
  border: {
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
const Version = ({ versions, version, setValue, closeMenu }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const setVersion = event => {
    handleClose();
    setValue("version", event.currentTarget.getAttribute("value"));
  };
  const classesI = `material-icons ${classes.icon}`;
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        classes={{ root: classes.button }}
      >
        {version}
        <i className={classesI}>keyboard_arrow_downn</i>
      </Button>
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
        <ExpansionPanel
          defaultExpanded="true"
          classes={{ root: classes.menuRoot }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.border}
          >
            <Typography>English</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={{ padding: "0px 0px 20px 0px" }}>
            <List className={classes.menuRoot}>
              {versions.map((text, i) => (
                <ListItem key={i} value={text} onClick={setVersion}>
                  {text}
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Menu>
    </>
  );
};
export default Version;
