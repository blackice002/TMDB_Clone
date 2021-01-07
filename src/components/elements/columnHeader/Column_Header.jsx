import React, { useState } from "react";
import "./column_header.scss";

import { Link } from "react-router-dom";
const Column_Header = (props) => {
  const data = [
    {mediaName: "Popular", mediaValue: "popular"},
    {mediaName: "In Theaters", mediaValue: "now_playing"},
    {mediaName:"Top Rated", mediaValue: "top_rated"},
  ];
  const [selectedItem, setSetSelectedItem] = useState({
    mediaName: "Popular", mediaValue: "popular"
  });
  //   const [linkColor, setLinkColor] = useState("white")

  const changeColor = (item) => {
    setSetSelectedItem(item);
    props.queryStateChange(item.mediaValue);
    // setLinkColor("white")
  };

  //   console.log("itemSelected-value", selectedItem.mediaValue);
  return (
    <div className="column_wrapper">
      {data.map((item) => (
        <Link
          key={item.mediaName}
          to={""}
          className={
            selectedItem.mediaName === item.mediaName
              ? "selected menu_item"
              : "menu_item"
          }
          onClick={() => changeColor(item)}
        >
          {item.mediaName}
        </Link>
      ))}
    </div>
  );
};

export default Column_Header;
