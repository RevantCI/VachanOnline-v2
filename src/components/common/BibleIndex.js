import React from "react";
import Version from "./Version";

const BibleIndex = ({ versions, books, chapters, label }) => {
  return (
    <div className="container">
      <div className="bibleIndex">
        <h4>Read Bible</h4>
        <div>
          <Version versions={versions} />
        </div>
        <select>
          {Object.keys(books).map(key => (
            <option value={key}> {books[key]} </option>
          ))}
        </select>
        <select>
          {Object.keys(chapters).map(key => (
            <option value={key}> {chapters[key]} </option>
          ))}
        </select>
        <button>{label}</button>
      </div>
    </div>
  );
};
export default BibleIndex;
