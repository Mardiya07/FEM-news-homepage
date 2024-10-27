import React from "react";
import { newsRanking } from "../data/data";

function NewsRanking() {
  return (
    <div>
      {newsRanking.map((postItem) => {
        return (
          <div className="rankingNewsCard" key={postItem}>
            <img
              className="newsPostThumbnail"
              src={postItem.img}
              alt="ranking-news-thumbnail"
            />
            <h4 className="rankNumber"> {postItem.ranknumber}</h4>
            <h3 className="newsPostTitle">{postItem.title}</h3>
            <p className="newsPostIntro -black">{postItem.postIntro}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsRanking;
