import React from 'react'
const Chapter=({chapters})=> {
   
    return (
        <div>
               <select>
      {Object.keys(chapters).map(key => (
        <option value={key}> {chapters[key]} </option>
      ))}
    </select>
        </div>
    )
}

export default  Chapter;