import React, { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="header"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i
          className={`fa-solid fa-person-walking-luggage ${
            isHovered ? "fa-bounce" : ""
          }`}
        ></i>
        <h1 className="header-title">far away</h1>
        <i
          className={`fa-solid fa-person-walking-luggage ${
            isHovered ? "fa-bounce" : ""
          }`}
        ></i>
      </div>
    </>
  );
}
