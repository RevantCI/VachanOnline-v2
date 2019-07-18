import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    display: "inline-block",
    width: 50,
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
}));
export default function BookCombo({ text, key, chapters, book, bookClicked }) {
  const classes = useStyles();
  return (
    <>
      <ListItem
        key={key}
        value={text}
        button
        onClick={event => bookClicked(event)}
      >
        <ListItemText primary={text} />
      </ListItem>
      <Collapse in={book === text} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {chapters.map((chapter, i) => (
            <ListItem key={i} value={chapter} button className={classes.nested}>
              {chapter}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
