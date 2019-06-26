import React from "react";

const BibleIndex = ({ versions, books, chapters, label }) => {
  return (
    <div className="container">
      <div className="bibleIndex">
        <h4>Read Bible</h4>
        <select>
          {Object.keys(versions).map(key => (
            <option value={key}> {versions[key]} </option>
          ))}
        </select>
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
