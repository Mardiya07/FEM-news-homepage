import React from "react";
import { newsPosts } from "../data/data";

function NewsPosts() {
  return (
    <div className="newPostsContainer">
      <h2 className="newsColumn-title">News</h2>
      <div className="NewsPostList">
        {newsPosts.map((post) => {
          return (
            <div className="newsPost" key={post}>
              <h3 className="newsPostTitle -white">{post.title}</h3>
              <p>{post.postintro}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsPosts;
