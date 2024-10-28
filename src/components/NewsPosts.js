import React from "react";
import { newsPosts } from "../data/data";

function NewsPosts() {
  return (
    <div className="newPostsContainer">
      <h2 className="newsColumn-title">New</h2>
      <div className="newsPostList">
        {newsPosts.map((post) => {
          return (
            <div className="newsPost" key={post}>
              <h3 className="newsPostTitle">{post.title}</h3>
              <p className="newsPostIntro">{post.postintro}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsPosts;
