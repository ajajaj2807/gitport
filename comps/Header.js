import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">AJ</div>
      <div className="search-wrapper">
        <div className="input-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search"></input>
        </div>
        <div className="user-avatar"></div>
      </div>
    </div>
  );
}
