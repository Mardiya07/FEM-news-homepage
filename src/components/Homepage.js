import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import NewsPosts from "./NewsPosts";
import NewsRanking from "./NewsRanking";

function Homepage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NewsPosts />
      <NewsRanking />
    </main>
  );
}

export default Homepage;
