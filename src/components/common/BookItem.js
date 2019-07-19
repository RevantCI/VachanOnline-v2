import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
const useStyles = makeStyles(theme => ({
  nested: {
    marginRight: theme.spacing(1),
    display: "inline-block",
    width: 50,
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  book: {
    borderBottom: "1px solid #cecece26"
  }
}));
export default function BookItem({
  text,
  chapters,
  bookOpen,
  bookClicked,
  setValue,
  closeMenu
}) {
  const classes = useStyles();
  const clickChapter = event => {
    closeMenu();
    setValue("book", bookOpen);
    setValue("chapter", event.currentTarget.getAttribute("value"));
  };
  return (
    <>
      <ListItem
        value={text}
        button
        onClick={event => bookClicked(event)}
        className={classes.book}
      >
        <ListItemText primary={text} />
      </ListItem>
      <Collapse key={text} in={bookOpen === text} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {chapters.map((chapter, i) => (
            <ListItem
              key={text + i}
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
    </>
  );
}
