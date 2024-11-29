import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-16 md:h-auto">
        <nav
          className={`w-screen ${isOpen ? "fixed h-screen bg-black/50" : "relative"} `}
        >
          <button
            className="absolute left-8 top-6 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? close : hamburger}
              alt={`${isOpen ? "close" : "open"} menu`}
            />
          </button>
          <div className="flex h-16 items-center justify-center bg-white px-10 md:h-24 md:justify-start md:gap-[58px]">
            <Link to="/">
              <img
                className="min-w-[75px] md:min-w-[107px]"
                src={logo}
                alt="scoot logo"
              />
            </Link>
            <div
              className={`${isOpen ? "" : "hidden"} absolute left-0 top-16 h-[calc(100vh-64px)] w-64 bg-darkNavy md:static md:flex md:h-auto md:w-full md:bg-transparent`}
            >
              <ul className="ml-8 mt-16 flex min-w-fit flex-col gap-6 font-mono text-lg/6 font-bold text-white md:m-0 md:flex-row md:items-center md:text-body md:text-dimGrey">
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
              <button className="button fixed bottom-6 left-8 w-48 md:static md:ml-auto md:w-[180px]">
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
