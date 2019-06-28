import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FeedbackIcon from "@material-ui/icons/Feedback";
import RoomIcon from "@material-ui/icons/Room";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles({
  list: {
    width: 250
  }
});
const icon = index => {
  switch (index) {
    case 0:
      return <BuildIcon />;
    case 1:
      return <RoomIcon />;
    case 2:
      return <FeedbackIcon />;
    case 3:
      return <MailIcon />;
    default:
      return null;
  }
};

const LandingMenu = ({ menus, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menus.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default LandingMenu;
