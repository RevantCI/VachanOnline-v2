import React from "react";

const footerLinks = props => {
  return (
    <div className="footerLinks">
      <div className="link">{props.link1}  </div>
      <div className="link">{props.link2}  </div>
      <div className="link">{props.link3}  </div>
    </div>
  );
};

export default footerLinks;
