import React from 'react'
import { Button } from 'react-bootstrap';

 const loginBtn =props=> {
    return (
        <div className="logButton">
          <Button>{props.label}</Button>
        </div>
    )
};
export default loginBtn;