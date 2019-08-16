import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { getChapters } from "../common/utillity";
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
    backgroundColor: "#ffffff",
    textTransform: "capitalize"
  },
  transparentRoot: {
    backgroundColor: "#ffffff70"
  },
  paper: {
    position: "relative",
    maxHeight: 580,
    width: 940,
    backgroundColor: "#eeefff",
    color: "#2a2a2a"
  },
  transparentPaper: {
    backgroundColor: "#eeefff90"
  },
  book: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    paddingBottom: 1,
    display: "inline-block",
    width: 160,
    transition: "width 600ms ease-out, height 600ms ease-out",
    textAlign: "center",
    padding: "0px 0px"
  },
  active: {
    backgroundColor: "#7b94da"
  },
  openBook: {
    border: "1px solid #2a2a2a"
  },
  chapter: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0),
    display: "inline-block",
    width: 50,
    backgroundColor: "#ffffff90",
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
}));
export default function BookCombo({
  book,
  bookList,
  bookCode,
  chapterList,
  chapter,
  sourceId,
  setValue,
  transparent = false
}) {
  const classes = useStyles();
  const bookDropdown = React.useRef(null);
  // const books = Object.keys(bookChapters);

  const [bookOpen, setBookOpen] = React.useState(book);
  const [bookOpened, setBookOpened] = React.useState("");
  function bookClicked(event) {
    if (bookOpen !== event.currentTarget.innerText) {
      let index = parseInt(event.currentTarget.getAttribute("data-count"));
      let row = parseInt((index + 4) / 5);
      let lastRow = parseInt((bookList.length + 4) / 5);
      setBookOpen(lastRow === row ? bookList.length : row * 5);
      setBookOpened(event.currentTarget.getAttribute("value"));
      setValue("chapterList", []);
      getChapters(
        setValue,
        sourceId,
        event.currentTarget.getAttribute("data-bookcode")
      );
    } else {
      setBookOpen("");
    }
  }
  const [openCombo, setOpenCombo] = React.useState(false);
  function openMenu(event) {
    setOpenCombo(true);
  }
  function closeMenu() {
    setOpenCombo(false);
  }

  const clickChapter = event => {
    closeMenu();
    let reference = event.currentTarget
      .getAttribute("data-reference")
      .split(" ");
    setValue("chapter", reference.pop());
    setValue("book", reference.join(" "));
    setValue(
      "bookCode",
      event.currentTarget.getAttribute("data-bookcode").toLowerCase()
    );
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
            paper: transparent
              ? `${classes.paper} ${classes.transparentPaper}`
              : classes.paper
          }}
        >
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={
              transparent
                ? `${classes.root} ${classes.transparentRoot}`
                : classes.root
            }
          >
            {bookList.map((item, i) => {
              let open =
                bookOpened === item.bibleBookFullName ? classes.openBook : "";
              var bookActive =
                bookCode === item.abbreviation ? classes.active : "";
              return (
                <React.Fragment key={item.bibleBookID}>
                  <ListItem
                    value={item.bibleBookFullName}
                    data-bookcode={item.abbreviation}
                    data-sourceid={item.sourceId}
                    data-count={i + 1}
                    button
                    onClick={event => bookClicked(event)}
                    className={`${classes.book} ${open} ${bookActive}`}
                  >
                    <ListItemText primary={item.bibleBookFullName} />
                  </ListItem>
                  {bookOpen === i + 1 ? (
                    <Collapse
                      in={chapterList && chapterList.length !== 0}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {chapterList.map((item, i) => {
                          var chapterActive =
                            item.chapter.reference === book + " " + chapter
                              ? classes.active
                              : "";
                          return (
                            <ListItem
                              value={item.chapter.number}
                              key={item.chapter.chapterId}
                              data-reference={item.chapter.reference}
                              data-bookcode={item.bibleBookCode}
                              button
                              className={`${chapterActive} ${classes.chapter}`}
                              onClick={clickChapter}
                            >
                              {item.chapter.number}
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </Menu>
      )}
    </>
  );
}
