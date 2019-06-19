import React from 'react'

const LanguageBar = props => {
    return (
        <div className="languageBar"><ul>
        {Object.keys(props.languages).map(key =>(
            <li> {props.languages[key]} </li>
        ))}
        </ul>
        </div>
    )
}
export default LanguageBar;
