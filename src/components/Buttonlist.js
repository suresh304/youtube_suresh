import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const buttons = [
    "gaming",
    "mantras",
    "tech",
    "Dramedy",
    "Thrillers",
    "NEET",
    "Cricket",
    "Recently Uploaded",
    "All",
    "Live",
    "Music",
    "Sports",
    "Popular",
    "Lo-fi",
    "Stocks","All",
    "Live",
    "Music",
    "Sports",
    "Popular",
    "Lo-fi",
    "Stocks",
  ];
  return (
    <div className="flex flex-wrap">
      {buttons.sort().map((btn, i) => (
        <Button className = "" name={btn} />
      ))}
    </div>
  );
};

export default Buttonlist;
