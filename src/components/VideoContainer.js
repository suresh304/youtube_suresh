import React, { useEffect, useMemo, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { MOCK_VIDEOSDATA } from "./mockData";

const VideoContainer = ({ calledFrom, searchQuery }) => {
  const [videos, setVideos] = useState();

  const getHomeVideos = async () => {
    // const data = await fetch(YOUTUBE_API);
    // const json = await data.json();
    // console.log(json,"home videos");
    // setVideos(json.items);
    // return json.items
    setVideos(MOCK_VIDEOSDATA);
  };
  const getSearchedVideos = async (searchQuery) => {
    // const data = await fetch(YOUTUBE_SEARCH_API.replace("YOURKEYWORD",searchQuery))
    // const json = await data.json()
    // setVideos(json.items);

    // console.log(json,"searched videos")
    // return json.items

    setVideos(MOCK_VIDEOSDATA);
  };
  const memoizedData = useMemo(() => videos, [videos]);

  const getVideos = () => {
    return calledFrom === "searchRes"
      ? getSearchedVideos(searchQuery)
      : getHomeVideos();
  };

  useEffect(() => {
    getVideos();
  }, [searchQuery]);
  if (!memoizedData) return;
  return (
    <div
      className={
        calledFrom !== "searchRes"
          ? "flex flex-wrap px-20"
          : " w-[80%] flex flex-col justify-center mx-auto"
      }
    >
      {memoizedData.map((video, i) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} calledFrom={calledFrom} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
