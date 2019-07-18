import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Combo from "../common/Combo";
import Popover from "@material-ui/core/Popover";
import { versions } from "../../data/bibledata";
import Setting from "../common/Setting";
import BookCombo from "../common/BookCombo";
const useStyles = makeStyles(theme => ({
  read: {
    padding: "0 8%",
    width: "100%",
    borderBottom: "1px solid #f1ecec"
  },
  select: {
    marginTop: "-8px"
  },
  info: {
    padding: 0,
    width: "40px",
    marginTop: 20,
    marginRight: "8px",
    color: "#1976D2",
    cursor: "pointer"
  },
  settings: {
    padding: 0,
    width: "40px",
    marginTop: 19,
    marginLeft: "-10px",
    color: "#1976D2",
    cursor: "pointer"
  },
  items: {
    justify: "flex-end",
    float: "right"
  },
  paper: {
    width: "80%"
  },
  content: {
    padding: 20,
    lineHeight: 2,
    fontSize: 16,
    backgroundColor: "#5181a9",
    color: "#fff"
  }
}));
export default function MenuBar({ version, setValue, setFullscreen }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function goFull() {
    setFullscreen(true);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [anchorEl1, setAnchorEl1] = React.useState(false);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid container className={classes.read}>
      <Grid item xs={6}>
        <Combo
          className={classes.select}
          name="version"
          label="Version"
          options={versions}
          value={version}
          onchange={val => setValue("version", val)}
          stylePadding="40px"
        />
        <BookCombo onClick={setValue} />
      </Grid>
      <Grid
        item
        xs={6}
        className={classes.items}
        container
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
      >
        <div
          aria-describedby={id}
          onClick={handleClick}
          className={classes.info}
        >
          <i className="material-icons md-32">info_outline</i>
        </div>
        <Popover
          id={id}
          className={classes.paper}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div className={classes.content}>
            <h2>SvgIcon components</h2>
            It's interesting to have the building blocks needed to implement
            custom icons, but what about presets? We provide a separate npm
            package, @material-ui/icons, that includes the 1,000+ official
            Material icons converted to SvgIcon components. It's interesting to
            have the building blocks needed to implement custom icons, but what
            about presets? We provide a separate npm package,
            @material-ui/icons, that includes the 1,000+ official Material icons
            converted to SvgIcon components. It's interesting to have the
            building blocks needed to implement custom icons, but what about
            presets? We provide a separate npm package, @material-ui/icons, that
            includes the 1,000+ official Material icons converted to SvgIcon
            components.
          </div>
        </Popover>
        <div className={classes.info} onClick={goFull}>
          <i className="material-icons md-32">zoom_out_map</i>
        </div>
        <div
          className={classes.settings}
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick1}
        >
          <i className="material-icons md-36">more_vert</i>
        </div>
        <Setting
          handleClick={handleClick1}
          anchorEl={anchorEl1}
          handleClose={handleClose1}
        />
      </Grid>
    </Grid>
  );
}
