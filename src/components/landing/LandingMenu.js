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
import Drawer from "@material-ui/core/Drawer";
import AboutUs from "./AboutUs";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const LandingMenu = ({
  menu,
  menus,
  modal,
  toggleModal,
  aboutUs,
  toggleDrawer
}) => {
  const classes = useStyles();
  return (
    <>
      <Drawer open={menu} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={toggleModal("aboutUs", true)}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary={menus[0]} />
            </ListItem>
            <ListItem button onClick={toggleModal("aboutUs", true)}>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary={menus[1]} />
            </ListItem>
            <ListItem button onClick={toggleModal("aboutUs", true)}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary={menus[2]} />
            </ListItem>
            <ListItem button onClick={toggleModal("aboutUs", true)}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={menus[3]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Modal open={modal.aboutUs} onClose={toggleModal("aboutUs", false)}>
        <AboutUs aboutUs={aboutUs} />
      </Modal>
    </>
  );
};
export default LandingMenu;
