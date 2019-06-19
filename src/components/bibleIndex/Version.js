import React from "react";

const Version = ({versions}) => {
  return (
      <div>
    <select>
      {Object.keys(versions).map(key => (
        <option value={key}> {versions[key]} </option>
      ))}
    </select>
</div>
  );
};
export default Version;
