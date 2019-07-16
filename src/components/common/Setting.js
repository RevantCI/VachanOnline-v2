import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const options = ["Download", "Print"];
const useStyles = makeStyles(theme => ({
  iconButton: {
    color: "#1976D2"
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: "#5181a9",
    color: "#fff"
  },
  expansion: {
    padding: 0,
    backgroundColor: "#5181a9",
    color: "#fff",
    boxShadow: "none"
  },
  expansion1: {
    borderBottom: "1px solid #fff",
    padding: 0
  },
  more: {
    color: "#fff"
  }
}));
const ITEM_HEIGHT = 68;
const Setting = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();
  return (
    <>
      <IconButton
        className={classes.iconButton}
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 130,
            backgroundColor: "#5181a9",
            color: "#fff"
          }
        }}
      >
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.more} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansion1}>
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {options.map(option => (
          <MenuItem key={option} selected={option === ""} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Setting;
