import React from "react";
import FooterLinks from "./FooterLinks";
import { Row, Col , Button} from "react-bootstrap";

const footer = props => {
  return (
    <div className="landingFooter">
      <Row className="fullWidth"> 
      <Col md={4}><FooterLinks {...props.links} /></Col>
      <Col md={5}><div>{props.copyright}</div></Col>
      <Col md={3}><Button variant="light">{props.subscribe}</Button></Col>
      </Row>
    </div>
  );
};

export default footer;
