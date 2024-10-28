import React from "react";
import { newsRanking } from "../data/data";

function NewsRanking() {
  return (
    <div className="rankingNewsContainer">
      {newsRanking.map((postItem) => {
        return (
          <div className="rankingNewsCard" key={postItem}>
            <img
              className="newsPostThumbnail"
              src={postItem.img}
              alt="ranking-news-thumbnail"
            />
            <div className="rankingText">
              <h4 className="rankNumber"> {postItem.ranknumber}</h4>
              <h3 className="newsPostTitle">{postItem.title}</h3>
              <p className="newsPostIntro , dark">{postItem.postIntro}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsRanking;
