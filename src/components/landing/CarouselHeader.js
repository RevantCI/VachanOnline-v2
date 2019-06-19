import React, { Component } from 'react';
import {Row , Col, Container} from 'react-bootstrap';
import SearchBox from '../common/SearchBox';
import LoginBtn from './LoginBtn';
import LanguageBar from './LanguageBar';

const CarouselHeader  =props=> {
  let languages = ["English","Hindi","Marathi","Malayalam"];
    return (
        <div className="header">
        <Row>
          <Col md={4} ><div className="logo">Vachanonline</div></Col>
          <Col md={6} >
            <SearchBox placeholder="Search..."/> 
          </Col>
          <Col md={2}>
            <LoginBtn label="Login"/>
          </Col>
        </Row>
      </div>
    )
};
export default CarouselHeader;