import React from "react";
// import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles(theme => ({
  bible: {
    padding: "25px 8%",
    backgroundColor: "white",
    lineHeight: 2,

    "& p": {
      fontSize: 16,
      textAlign: "justify",
      // fontFamily: "Istok Web",
      color: "#616161"
      // fontWeight: 200
    }
  },
  margin: {
    position: "fixed",
    top: "50vh",
    left: "2%"
  },
  right: {
    position: "fixed",
    top: "50vh",
    right: "3%"
  }
}));

const Bible = () => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <div className={classes.bible}>
      <h5>The Wise Men Visit</h5>
      <p>
        2 Jesus was born in Bethlehem in Judea when Herod was king. After Jesus’
        birth wise men[a] from the east arrived in Jerusalem. 2 They asked,
        “Where is the one who was born to be the king of the Jews? We saw his
        star rising and have come to worship him.” 3 When King Herod and all
        Jerusalem heard about this, they became disturbed. 4 He called together
        all the chief priests and the experts in the Scriptures and tried to
        find out from them where the Messiah was supposed to be born. 5 They
        told him, “In Bethlehem in Judea. The prophet wrote about this: 6
        Bethlehem in the land of Judah, you are by no means least among the
        leaders of Judah. A leader will come from you. He will shepherd my
        people Israel.” 7 Then Herod secretly called the wise men and found out
        from them exactly when the star had appeared. 8 As he sent them to
        Bethlehem, he said, “Go and search carefully for the child. When you
        have found him, report to me so that I may go and worship him too.” 9
        After they had heard the king, they started out. The star they had seen
        rising led them until it stopped over the place where the child was. 10
        They were overwhelmed with joy to see the star. 11 When they entered the
        house, they saw the child with his mother Mary. So they bowed down and
        worshiped him. Then they opened their treasure chests and offered him
        gifts of gold, frankincense, and myrrh.[b] 12 God warned them in a dream
        not to go back to Herod. So they left for their country by another road.
        The Escape to Egypt 13 After they had left, an angel of the Lord
        appeared to Joseph in a dream. The angel said to him, “Get up, take the
        child and his mother, and flee to Egypt. Stay there until I tell you,
        because Herod intends to search for the child and kill him.” 14 Joseph
        got up, took the child and his mother, and left for Egypt that night. 15
        He stayed there until Herod died. What the Lord had spoken through the
        prophet came true: “I have called my son out of Egypt.” 16 When Herod
        saw that the wise men had tricked him, he became furious. He sent
        soldiers to kill all the boys two years old and younger in or near
        Bethlehem. This matched the exact time he had learned from the wise men.
        17 Then the words spoken through the prophet Jeremiah came true: 2 Jesus
        was born in Bethlehem in Judea when Herod was king. After Jesus’ birth
        wise men[a] from the east arrived in Jerusalem. 2 They asked, “Where is
        the one who was born to be the king of the Jews? We saw his star rising
        and have come to worship him.” 3 When King Herod and all Jerusalem heard
        about this, they became disturbed. 4 He called together all the chief
        priests and the experts in the Scriptures and tried to find out from
        them where the Messiah was supposed to be born. 5 They told him, “In
        Bethlehem in Judea. The prophet wrote about this: 6 Bethlehem in the
        land of Judah, you are by no means least among the leaders of Judah. A
        leader will come from you. He will shepherd my people Israel.” 7 Then
        Herod secretly called the wise men and found out from them exactly when
        the star had appeared. 8 As he sent them to Bethlehem, he said, “Go and
        search carefully for the child. When you have found him, report to me so
        that I may go and worship him too.” 9 After they had heard the king,
        they started out. The star they had seen rising led them until it
        stopped over the place where the child was. 10 They were overwhelmed
        with joy to see the star. 11 When they entered the house, they saw the
        child with his mother Mary. So they bowed down and worshiped him. Then
        they opened their treasure chests and offered him gifts of gold,
        frankincense, and myrrh.[b] 12 God warned them in a dream not to go back
        to Herod. So they left for their country by another road. The Escape to
        Egypt 13 After they had left, an angel of the Lord appeared to Joseph in
        a dream. The angel said to him, “Get up, take the child and his mother,
        and flee to Egypt. Stay there until I tell you, because Herod intends to
        search for the child and kill him.” 14 Joseph got up, took the child and
        his mother, and left for Egypt that night. 15 He stayed there until
        Herod died. What the Lord had spoken through the prophet came true: “I
        have called my son out of Egypt.” 16 When Herod saw that the wise men
        had tricked him, he became furious. He sent soldiers to kill all the
        boys two years old and younger in or near Bethlehem. This matched the
        exact time he had learned from the wise men. 17 Then the words spoken
        through the prophet Jeremiah came true:
      </p>

      <Fab
        size="small"
        color="default"
        aria-label="Add"
        className={classes.margin}
      >
        <KeyboardArrowLeft />
      </Fab>
      <Fab
        size="small"
        color="default"
        aria-label="Add"
        className={classes.right}
      >
        <KeyboardArrowRight />
      </Fab>
    </div>
  );
};

export default Bible;
