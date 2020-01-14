import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import { getChapters } from "../common/utillity";
//import { bibleChapters } from "../../store/bibleData";
const useStyles = makeStyles(theme => ({
  button: {
    fontSize: "1rem",
    margin: 9,
    padding: "6px 0 6px 19px",
    textTransform: "none",
    backgroundColor: "#fff",
    border: "1px solid #fff",
    [theme.breakpoints.only("xs")]: {
      width: "60%"
    }
  },
  icon: {
    left: 15,
    position: "relative"
  },
  root: {
    width: "100%",
    maxWidth: 680,
    backgroundColor: "#eaeaea",
    textTransform: "capitalize",
    maxHeight: "calc(100vh - 150px)"
  },
  paper: {
    position: "relative",
    maxHeight: "calc(100vh - 150px)",
    width: 380,
    backgroundColor: "#eaeaea",
    color: "#2a2a2a"
  },
  book: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    paddingBottom: 1,
    display: "inline-block",
    width: 140,
    transition: "width 500ms ease-out, height 500ms ease-out",
    textAlign: "center",
    padding: "0px 0px",
    fontSize: "11px",
    border: "1px solid #d2d2d2c9"
  },
  openBook: {
    border: "1px solid #ccc",
    backgroundColor: "#3f7ad2",
    color: "#fff",
    "&:hover": {
      border: "1px solid #ccc",
      backgroundColor: "#3f7ad2",
      color: "#fff"
    }
  },
  chapter: {
    marginRight: 7,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0),
    display: "inline-block",
    width: 50,
    border: "1px solid #ccc",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  openChapter: {
    border: "1px solid #ccc",
    backgroundColor: "#3f7ad2",
    color: "#fff",
    "&:hover": {
      border: "1px solid #ccc",
      backgroundColor: "#3f7ad2",
      color: "#fff"
    }
  },
  bookName: {
    whiteSpace: "nowrap",
    width: 100,
    overflow: "hidden",
    textOverflow: "ellipsis"
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
  minimal,
  landingPage
}) {
  //classes for styling
  const classes = useStyles();
  const theme = useTheme();
  //if mobile then true, used to change layout
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  //book combo button ref
  const bookDropdown = React.useRef(null);
  //last book count in book drop down to show list of chapters in
  const [bookOpen, setBookOpen] = React.useState(1);
  //book to highlight on clicking
  const [bookOpened, setBookOpened] = React.useState(book);
  //chapter List
  const [selectedChapterList, setSelectedChapterList] = React.useState(
    chapterList
  );
  //selected book first by default
  const [selectedBookIndex, setSelectedBookIndex] = React.useState(1);
  const bookCombo = React.useRef();
  const chapterCombo = React.useRef();
  React.useEffect(() => {
    setSelectedChapterList(chapterList);
  }, [chapterList]);
  React.useEffect(() => {
    setBookOpened(book);
  }, [book]);
  //function to set book once its clicked and open the chapter list for it
  function bookClicked(event) {
    let index = parseInt(event.currentTarget.getAttribute("data-count"));
    //To fix book combo scrolling set scroll manually
    if (chapterCombo.current !== undefined && bookOpen > index) {
      let element = bookCombo.current.parentElement.parentElement;
      element.scrollTop -= chapterCombo.current.offsetHeight;
    }
    //if opened book clicked, close it else open it
    if (bookOpen !== index) {
      setBookOpen(index);
      setBookOpened(event.currentTarget.getAttribute("value"));
      setValue("chapterList", []);
      // getChapters(
      //   setValue,
      //   sourceId,
      //   event.currentTarget.getAttribute("data-bookcode"),
      //   false,
      //   setSelectedChapterList
      // );
    } else {
      setBookOpen("");
    }
  }
  const [openCombo, setOpenCombo] = React.useState(false);
  function openMenu(event) {
    setOpenCombo(true);
    //getChapters(setValue, sourceId, bookCode);
  }
  function closeMenu() {
    setBookOpened(book);
    setSelectedChapterList(chapterList);
    setOpenCombo(false);
    setBookOpen(selectedBookIndex);
  }
  const clickChapter = event => {
    setSelectedBookIndex(bookOpen);
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
        style={landingPage && mobile ? { marginLeft: "20%" } : {}}
        classes={{ root: classes.button }}
      >
        {minimal === true ? (
          <div className={classes.bookName}>{book}</div>
        ) : (
          book
        )}{" "}
        {chapter}
        <i className={classesI}>keyboard_arrow_downn</i>
      </Button>
      {/* If no book list dont render menu */}
      {bookList === undefined || bookList.length === 0 ? (
        ""
      ) : (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
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
          classes={{ paper: classes.paper }}
        >
          {/*List of books*/}
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            ref={bookCombo}
          >
            {bookList.map((item, i) => {
              let open =
                bookOpened === item.bibleBookFullName ? classes.openBook : "";
              return (
                <React.Fragment key={item.bibleBookID}>
                  <ListItem
                    value={item.bibleBookFullName}
                    data-bookcode={item.abbreviation}
                    data-sourceid={item.sourceId}
                    data-count={i + 1}
                    button
                    onClick={event => bookClicked(event)}
                    className={`${classes.book} ${open}`}
                  >
                    <ListItemText primary={item.bibleBookFullName} />
                  </ListItem>
                  {(bookOpen % 2 ? bookOpen + 1 : bookOpen) === i + 1 &&
                  selectedChapterList ? (
                    <Collapse
                      in={
                        selectedChapterList && selectedChapterList.length !== 0
                      }
                      timeout="auto"
                      unmountOnExit
                    >
                      {console.log("bookopen:" + bookOpen)}
                      {/*List of chapters*/}
                      <List component="div" disablePadding ref={chapterCombo}>
                        {selectedChapterList.map((item, i) => {
                          var chapterActive =
                            item.chapter.reference === book + " " + chapter
                              ? classes.openChapter
                              : "";
                          return (
                            <ListItem
                              value={item.chapter.number}
                              key={item.chapter.chapterId}
                              data-reference={item.chapter.reference}
                              data-bookcode={item.bibleBookCode}
                              button
                              className={`${classes.chapter} ${chapterActive}`}
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
