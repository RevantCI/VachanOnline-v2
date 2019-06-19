import React, { Component } from 'react';
import img from './images/1.jpg'
import img1 from './images/2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import LanguageBar from './LanguageBar';
const ControlledCarousel =props =>{

  let languages = ["English","हिंदी","मराठी","മലയാളം","English","Hindi","Marathi","Malayalam","English","Hindi","Marathi","Malayalam"];
    return (
<div>
      <div> 

      <LanguageBar languages={languages}/>
      </div>
      <Carousel autoPlay >
      <div>
        <img src={img} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      <div>
        <img src={img1} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      <div>
        <img src={require('./images/3.jpg')} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      
    </Carousel></div>
    )
};

export default ControlledCarousel; 
