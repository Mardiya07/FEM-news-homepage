import React from "react";
import HeroImageMobile from "../assets/images/image-web-3-mobile.jpg";
import HeroImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import { heroText } from "../data/data";

function Hero() {
  return (
    <div>
      <div className="heroImage">
        <picture>
          <source srcSet={HeroImageDesktop} media="(min-width:1240px)" />
          <img src={HeroImageMobile} alt="Hero" />
        </picture>
      </div>
      <div className="heroText">
        <h1>{heroText.title}</h1>
        <div className="heroText-introWrapper">
          <p>{heroText.bodytext}</p>
          <a href="link">{heroText.cta}</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
