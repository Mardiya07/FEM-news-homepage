import React, { useState } from "react";
import { navlinks } from "../data/data";
import IconMenu from "../assets/images/icon-menu.svg";
import IconClose from "../assets/images/icon-menu-close.svg";
import Logo from "../assets/images/logo.svg";

function Navigation() {
  const [isOpen, setIsopen] = useState(false);
  const handleMenu = function () {
    return setIsopen(!isOpen);
  };
  // const handleMenuClose = function () {
  //   return setIsopen(false);
  // };
  return (
    <nav className="navigation">
      <img src={Logo} alt="logo" className="logo" />
      <img
        src={IconMenu}
        alt="menu icon"
        onClick={handleMenu}
        className={isOpen ? "icon hideMenu" : "icon"}
      />
      <div className={isOpen ? "navlistwrap" : "navlistwrap, hideMenu"}>
        <img
          src={IconClose}
          alt="icon close"
          onClick={handleMenu}
          className="icon close"
        />
        <div className="navlist">
          {navlinks.map((navlink) => {
            return (
              <div className="navlistItem">
                <a href={navlink.url}>{navlink.navlinkname}</a>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
