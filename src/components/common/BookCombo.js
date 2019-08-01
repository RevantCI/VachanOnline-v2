import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import BookItem from "./BookItem";
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
    maxWidth: 940,
    backgroundColor: "#3970a7",
    color: "#fff"
  },
  paper: {
    position: "relative",
    top: 50,
    maxHeight: 580,
    width: 940,
    backgroundColor: "#3970a7",
    color: "#fff"
  },
  book: {
    borderBottom: "1px solid #cecece26",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    paddingBottom: 1,
    display: "inline-block",
    width: 160,
    transition: "width 600ms ease-out, height 600ms ease-out",
    textAlign: "center",
    padding: "0px 0px",

  },
  nested: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0),
    display: "inline-block",
    width: 50,
    // backgroundColor: "#00C4FD",
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
}));
export default function BookCombo({ book, bookList, bookCode, chapter, setValue }) {
  const classes = useStyles();
  const bookDropdown = React.useRef(null);
  // const books = Object.keys(bookChapters);

  const [bookOpen, setBookOpen] = React.useState(book);
  function bookClicked(event) {
    if (bookOpen !== event.currentTarget.innerText) {
      setBookOpen(event.currentTarget.innerText);
    } else {
      setBookOpen("");
    }
  }
  // const chapters = bookChapters[bookOpen];
  const chapterList = [...new Array(50)].map((x, i) => i + 1);
  const [openCombo, setOpenCombo] = React.useState(false);
  function openMenu(event) {
    setOpenCombo(true);
  }
  function closeMenu() {
    setOpenCombo(false);
  }

  const clickChapter = event => {
    closeMenu();
    // setValue("book", text);
    // setValue("chapter", event.currentTarget.getAttribute("value"));
  };
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
      {!bookList && bookList.length === 0 ? (
        ""
      ) : (
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
              {bookList.map(item => (
                <React.Fragment key={item.bibleBookID}>
                  <ListItem
                    value={item.bibleBookFullName}
                    button
                    onClick={event => bookClicked(event)}
                    className={classes.book}
                  >
                    <ListItemText primary={item.bibleBookFullName} />
                  </ListItem>

                  <Collapse in={bookOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {chapterList.map((chapter, i) => (
                        <ListItem
                          key={item.bibleBookFullName + i}
                          value={chapter}
                          button
                          className={classes.nested}
                          onClick={clickChapter}
                        >
                          {chapter}
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </Menu>
        )}
    </>
  );
}
