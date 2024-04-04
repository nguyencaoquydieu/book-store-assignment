import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img className="youtube-avatar" src={props.avatar} alt="" />
        <div className="youtube-info">
          <h4 className="youtube-author">{props.author || "-"}</h4>
          <h3 className="youtube-title">{props.title || "-"}</h3>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
