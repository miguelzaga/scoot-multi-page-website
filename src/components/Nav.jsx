import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-16">
        <nav
          className={`w-screen ${isOpen ? "bg-black/50 fixed h-screen" : "relative h-16"}`}
        >
          <button
            className="absolute left-8 top-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? close : hamburger}
              alt={`${isOpen ? "close" : "open"} menu`}
            />
          </button>
          <div className="flex h-16 items-center justify-center bg-white">
            <Link to="/">
              <img className="w-[75px]" src={logo} alt="scoot logo" />
            </Link>
            <div
              className={`${isOpen ? "" : "hidden"} absolute left-0 top-16 h-[calc(100vh-64px)] w-64 bg-darkNavy`}
            >
              <ul className="ml-8 mt-16 flex flex-col gap-6 font-mono text-lg/6 font-bold text-white">
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
              <button className="button fixed bottom-6 left-8 w-48">
                Get Scootin
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
