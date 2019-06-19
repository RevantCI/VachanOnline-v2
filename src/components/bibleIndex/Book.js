import React from 'react'

 const Book =({books}) => {
    return (
        <div>
            
    <select>
      {Object.keys(books).map(key => (
        <option value={key}> {books[key]} </option>
      ))}
    </select>
        </div>
    )
}
export default Book;