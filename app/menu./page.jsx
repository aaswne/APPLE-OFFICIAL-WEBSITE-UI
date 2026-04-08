import React from "react";
import "./menu.css";

function Page() {
  return (
    <div className="menu">
      <div className="menuHeader">
        <span className="close">×</span>
      </div>

      <ul className="menuList">
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Vision</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Page;