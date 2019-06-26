import React from "react";
import img from "./images/1.jpg";
import img1 from "./images/2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LanguageBar from "./LanguageBar";
import BibleIndex from "../common/BibleIndex";
import CarouselHeader from "./CarouselHeader";
const ControlledCarousel = props => {
  let languages = [
    "অসমীয়া ",
    "বাঙালি",
    "ગુજરાતી",
    "हिंदी",
    "ಕನ್ನಡ",
    "മലയാളം",
    "मराठी",
    "ଓଡିଆ",
    "ਪੰਜਾਬੀ",
    "தமிழ்",
    "తెలుగు",
    "اردو"
  ];
  let versions = ["NIV", "KJV"];
  let books = ["Mathew", "Mark", "Luke", "John"];
  let chapters = ["1", "2", "3"];
  let label = "Read";

  return (
    <div>
      <CarouselHeader />
      <div>
        <LanguageBar languages={languages} />
      </div>
      <Carousel
        emulateTouch
        useKeyboardArrows
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        autoPlay
      >
        <div>
          <img src={img} alt="" />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
        <div>
          <img src={img1} alt="" />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
        <div>
          <img src={require("./images/3.jpg")} alt="" />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
      </Carousel>
      <BibleIndex
        versions={versions}
        books={books}
        chapters={chapters}
        label={label}
      />
    </div>
  );
};

export default ControlledCarousel;
