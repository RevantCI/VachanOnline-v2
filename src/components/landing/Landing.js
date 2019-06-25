import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import LandingAboutUs from "./LandingAboutUs";
import LandingFooter from "./LandingFooter";
import "./Landing.css";
import Grid from "@material-ui/core/Grid";
const Landing = () => {
  let aboutUs =
    "VachanOnline.com is the premier Bible study website in Indian languages. It is part of The Vachan Project to provide free access to digital scripture engagement resources. It is an initiative of Friends of Agape (FOA), USA.";
  let footerData = {
    links: ["About us", "Contact us", "Feedback"],
    copyright: "copyright@2019 VachanOnline",
    subscribe: "Subscribe"
  };

  return (
    <Grid>
      <ControlledCarousel />
      <LandingAboutUs aboutUs={aboutUs} />
      <LandingFooter {...footerData} />
    </Grid>
  );
};
export default Landing;
