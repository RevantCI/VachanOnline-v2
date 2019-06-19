import React from "react";
import Version from "./Version";
import Book from "./Book";
import Chapter from "./Chapter";
import ReadButton from "./ReadButton";

const BibleIndex = ({ versions, books, chapters, label }) => {
  return (
    <div className="container">
      <div className="bibleIndex">
          <h4>Read Bible</h4>
        <Version versions={versions} />
        <Book books={books} />
        <Chapter chapters={chapters} />
        <ReadButton label={label} />
      </div>
    </div>
  );
};
export default BibleIndex;
