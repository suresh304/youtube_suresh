import React from "react";
import { useParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const SearchedResDiv = () => {
  const params = useParams();
  if (!params) return;
  return (
    <div>
      <VideoContainer
        calledFrom={"searchRes"}
        searchQuery={params.searchQuery}
      />
    </div>
  );
};

export default SearchedResDiv;
