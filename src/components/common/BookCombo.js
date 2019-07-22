import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import { bookChapters } from "../../data/bibledata";
import BookItem from "./BookItem";
const useStyles = makeStyles(theme => ({
  button: {
    left: theme.spacing(1),
    fontSize: "1rem",
    margin: 9,
    padding: "6px 0 6px 19px",
    textTransform: "none",
    backgroundColor: "#fff",
    border: "1px solid #fff"
  },
  icon: {
    left: 15,
    position: "relative"
  },
  root: {
    width: "100%",
    maxWidth: 580,
    backgroundColor: "#3970a7",
    color: "#fff"
  },
  paper: {
    position: "relative",
    top: 50,
    maxHeight: 400,
    width: 600,
    border: "1px solid #d3d4d5",
    backgroundColor: "#3970a7",
    color: "#fff"
  }
}));
export default function BookCombo({ book, chapter, setValue }) {
  const classes = useStyles();
  const bookDropdown = React.useRef(null);
  const books = Object.keys(bookChapters);

  const [bookOpen, setBookOpen] = React.useState("Genesis");
  function bookClicked(event) {
    if (bookOpen !== event.currentTarget.innerText) {
      setBookOpen(event.currentTarget.innerText);
    } else {
      setBookOpen("");
    }
  }
  const chapters = bookChapters[bookOpen];
  const chapterList = [...new Array(chapters)].map((x, i) => i + 1);
  const [openCombo, setOpenCombo] = React.useState(false);
  function openMenu(event) {
    setOpenCombo(true);
  }
  function closeMenu() {
    setOpenCombo(false);
  }
  const classesI = `material-icons ${classes.icon}`;
  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={openMenu}
        ref={bookDropdown}
        classes={{ root: classes.button }}
      >
        {book} {chapter}
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
        id="customized-menu"
        anchorEl={bookDropdown.current}
        keepMounted
        open={openCombo}
        onClose={closeMenu}
        classes={{
          paper: classes.paper
        }}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {books.map((text, id) => (
            <BookItem
              text={text}
              key={id}
              chapters={chapterList}
              bookOpen={bookOpen}
              bookClicked={bookClicked}
              setValue={setValue}
              closeMenu={closeMenu}
            />
          ))}
        </List>
      </Menu>
    </>
  );
}
