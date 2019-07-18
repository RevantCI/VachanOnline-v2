import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const ITEM_HEIGHT = 68;
const Setting = ({ settingsAnchor, handleClose }) => {
  const open = Boolean(settingsAnchor);
  return (
    <>
      <Menu
        id="long-menu"
        anchorEl={settingsAnchor}
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
        <MenuItem onClick={handleClose}>Download</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
      </Menu>
    </>
  );
};

export default Setting;
