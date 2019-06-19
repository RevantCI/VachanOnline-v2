import React, { Component } from 'react'
import ControlledCarousel from './ControlledCarousel';
import CarouselHeader from './CarouselHeader';
import LandingAboutUs from "./LandingAboutUs";
import LandingFooter from "./LandingFooter";
import './Landing.css';
const Landing =()=>{
    
    let aboutUs = "VachanOnline.com is the premier Bible study website in Indian languages. It is part of The Vachan Project to provide free access to digital scripture engagement resources. It is an initiative of Friends of Agape (FOA), USA.";
    let footerData = {
      links: { link1: "About us", link2: "Contact us", link3: "Feedback" },
      copyright: "copyright@2019 VachanOnline",
      subscribe: "Subscribe"
    };


   
        return (
            <div className="landing"> 
                 <CarouselHeader />
                 <ControlledCarousel />
                 <LandingAboutUs aboutUs={aboutUs} />
                 <LandingFooter {...footerData} />
            </div>
        )
    }
export default Landing;