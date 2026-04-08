"use client"
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar({show,setShow}) {
  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

const menuClick = () =>{
  setShow(!show)
}  

  return (
    <div className="navBar">
      {/* Left - Logo */}
      <div className="nav-left">
        <span className="logo"></span>
      </div>

      {/* Center - Menu */}
      <div className="nav-center">
        {navItems.map((item, index) => (
          <span key={index} className="nav-item">
            {item}
          </span>
        ))}
      </div>

      {/* Right - Icons */}
      <div className="nav-right">
        <FiSearch className="icon" />
        <FiShoppingBag className="icon" />
        <  RxHamburgerMenu className="menuIcon" onClick={menuClick} />
      </div>
    </div>
  );
}

export default NavBar;
