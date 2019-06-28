import React from "react";
import LanguageBar from "./LanguageBar";
import BibleIndex from "../common/BibleIndex";
import CarouselHeader from "./CarouselHeader";
import Banner from "./Banner";
import LandingFooter from "./LandingFooter";
import "./Landing.css";
import Grid from "@material-ui/core/Grid";
const Landing = () => {
  let footerData = {
    links: ["About us", "Contact us", "Feedback"],
    copyright: "copyright@2019 VachanOnline",
    subscribe: "Subscribe"
  };
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
  let versions = ["", "NIV", "KJV"];
  let books = ["", "Mathew", "Mark", "Luke", "John"];
  let chapters = ["", "1", "2", "3"];
  let label = "Read";
  let menus = ["About us", "Contact us", "Feedback", "Subscribe"];
  let aboutUs =
    "VachanOnline.com is the premier Bible study website in Indian languages. It is part of The Vachan Project to provide free access to digital scripture engagement resources. It is an initiative of Friends of Agape (FOA), USA. The content herein is not for reuse or redistribution in any other format or platform without explicit permission.";
  return (
    <Grid>
      <CarouselHeader menus={menus} aboutUs={aboutUs} />
      <LanguageBar languages={languages} />
      <Banner />
      <BibleIndex
        versions={versions}
        books={books}
        chapters={chapters}
        label={label}
      />
      <LandingFooter {...footerData} />
    </Grid>
  );
};
export default Landing;
