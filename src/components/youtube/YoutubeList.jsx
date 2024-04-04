import React from "react";
import { YoutubeData } from "../../data/youtube";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          author={item.author}
          title={item.title}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
