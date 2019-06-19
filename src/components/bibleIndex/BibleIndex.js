import React from 'react'
import Version from './Version';

const BibleIndex=(props) =>{
    return (
        <div className="bibleIndex">
            <Version />
            <Book />
            <Chapter />
            <ReadButton />

        </div>
    )
}
export default BibleIndex;