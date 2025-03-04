import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import NewsPosts from "./NewsPosts";
import NewsRanking from "./NewsRanking";
import Footer from "./Footer";

function Homepage() {
  return (
    <main>
      <Navigation />
      <div className="desktopMode">
        <Hero />
        <NewsPosts />
      </div>
      <NewsRanking />
      <Footer></Footer>
    </main>
  );
}

export default Homepage;
