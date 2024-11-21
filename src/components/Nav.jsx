import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
// import close from "../assets/icons/close.svg";
// import { useState } from "react";

function Nav() {
  return (
    <>
      <nav className="relative h-16">
        <button className="absolute left-8 top-6">
          <img src={hamburger} alt="open menu" />
        </button>
        <div className="flex justify-center pt-[22px]">
          <Link to="/">
            <img className="w-[75px]" src={logo} alt="scoot logo" />
          </Link>
          <div className="hidden">
            <ul className="">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/locations">Location</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
            <button className="">Get Scootin</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
