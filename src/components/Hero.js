import React from "react";
import HeroImageMobile from "../assets/images/image-web-3-mobile.jpg";
import HeroImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import { heroText } from "../data/data";

function Hero() {
  return (
    <div className="heroSection">
      <div className="heroImage">
        <picture>
          <source srcSet={HeroImageDesktop} media="(min-width:1024px)" />
          <img src={HeroImageMobile} alt="Hero" />
        </picture>
      </div>
      <div className="heroText">
        <h1 className="heroTitle">{heroText.title}</h1>
        <div className="heroText-Wrapper">
          <p className="heroText-overview">{heroText.overview}</p>
          <button className="ctaButton" type="button">
            {heroText.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
