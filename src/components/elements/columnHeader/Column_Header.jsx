import React, { useState } from "react";
import "./column_header.scss";

import { Link } from "react-router-dom";
const Column_Header = () => {
  const data = ["Streaming", "On TV", "For Rent", "In Theaters"];
  const [selectedItem, setSetSelectedItem] = useState(data[0]);
  //   const [linkColor, setLinkColor] = useState("white")

  const changeColor = (item) => {
    setSetSelectedItem(item);
    // setLinkColor("white")
  };

  console.log("selected", selectedItem);
  return (
    <div className="column_wrapper">
      {data.map((item, i) => (
          <Link key={i}
            to={""}
            className={selectedItem === item ? "selected menu_item" : "menu_item"}
            onClick={() => changeColor(item)}
          >
            {item}
          </Link>
      ))}
    </div>
  );
};

export default Column_Header;
