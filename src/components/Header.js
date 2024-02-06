import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";
import { Link, Navigate, json, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(searchQuery);


  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    console.log("api call--" + searchQuery);

    dispatch(cacheSearch({ [searchQuery]: json[1] }));
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  return (
    <div className=" sticky grid grid-flow-col shadow-md p-2">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleHandler()}
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
          alt="hamburger menu icon"
          className="w-12 h-10 cursor-pointer"
        />
        <img
          src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
          alt="logo"
          className="w-40 h-14"
        />
      </div>
      <div className="col-span-10 mx-16 my-auto">
        <input
          type="text"
          className=" w-96 h-8  border border-gray-400 rounded-l-full p-1"
          placeholder="search here"
          value={inputValue}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setInputValue(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <Link to={inputValue?"search_results/:"+inputValue:"/"}>
        <button className="h-8 border border-gray-400 px-2 rounded-r-full">
          search
        </button>
        </Link>
        <ul className="absolute bg-slate-100 w-[24rem]  rounded-md shadow-lg ">
          {showSuggestions &&
            suggestions.map((sug, i) => (
              <li
                className="p-2 hover:bg-slate-300"
                onMouseOver={() => setInputValue(sug)}
              >
                {sug}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-span-1">
        <img
          alt="userIcon"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default Header;
