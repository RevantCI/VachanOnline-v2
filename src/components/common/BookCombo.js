import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import { bookChapters } from "../../data/bibledata";
//import ListSubheader from "@material-ui/core/ListSubheader";
import BookItem from "./BookItem";
const useStyles = makeStyles(theme => ({
  button: {
    left: theme.spacing(1),
    fontSize: "1.2rem",
    margin: 10
  },
  root: {
    width: "100%",
    maxWidth: 280,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    position: "relative",
    top: 50,
    maxHeight: 400,
    width: 300
  }
}));
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
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
    {...props}
  />
));
export default function BookCombo({ onClick }) {
  const classes = useStyles();
  const chapters = 50; // !== "" ? bookChapters[props.book] : 0;

  const books = Object.keys(bookChapters);
  books.unshift("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const chapterList = [...new Array(chapters)].map((x, i) => i + 1);
  const [bookOpen, setBookOpen] = React.useState("");
  function bookClicked(event) {
    console.log(event);
    setBookOpen(event.currentTarget.innerText);
  }
  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        classes={{ root: classes.button }}
      >
        John 1
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper: classes.paper
        }}
        PaperProps={{
          style: {}
        }}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //  <ListSubheader component="div" id="nested-list-subheader">
          //    Old Testament
          //  </ListSubheader>
          //}
          className={classes.root}
        >
          {books.map((text, i) => (
            <BookItem
              text={text}
              key={i}
              chapters={chapterList}
              book={bookOpen}
              bookClicked={bookClicked}
              onchange={val => onClick("book", text)}
            />
          ))}
        </List>
      </StyledMenu>
    </>
  );
}
