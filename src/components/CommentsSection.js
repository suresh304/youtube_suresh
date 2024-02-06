import React from "react";
import { COMMENT_DATA } from "../utils/constants";
import Comment from "./Comment";

export const CommentsSection = () => {
  return (
    <div className="mx-8">
        <h1 className="font-bold">Comments</h1>
      {COMMENT_DATA.map((cmnt,id)=><Comment {...cmnt}/>)}
     
    </div>
  );
};
