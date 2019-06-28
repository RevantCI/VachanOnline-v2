import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import FeedbackIcon from "@material-ui/icons/Feedback";
import RoomIcon from "@material-ui/icons/Room";
import BuildIcon from "@material-ui/icons/Build";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import AboutUs from "./AboutUs";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));
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

const LandingMenu = ({ menus, aboutUs }) => {
  const classes = useStyles();

  const [menu, setMenu] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenu(open);
  };
  const [aboutUsModal, setAboutUs] = React.useState(false);

  const toggleAboutUs = value => () => {
    setAboutUs(value);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Open drawer"
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={menu} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menus.map((text, index) => (
              <ListItem button onClick={toggleAboutUs(true)} key={text}>
                <ListItemIcon>{icon(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Modal open={aboutUsModal} onClose={toggleAboutUs(false)}>
        <AboutUs aboutUs={aboutUs} />
      </Modal>
    </>
  );
};
export default LandingMenu;
