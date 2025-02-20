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
          className={`w-full ${isOpen ? "fixed h-screen bg-black/50" : "relative"} z-10 md:px-10`}
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
          <div className="mx-auto flex h-16 max-w-desktop items-center justify-center bg-white md:h-24 md:justify-start md:gap-[58px]">
            <Link onClick={() => setIsOpen(false)} to="/">
              <img
                className="max-w-[75px] md:max-w-[107px]"
                src={logo}
                alt="scoot logo"
              />
            </Link>
            <div
              className={`${isOpen ? "" : "hidden"} absolute left-0 top-16 h-[calc(100vh-64px)] w-64 bg-darkNavy md:static md:flex md:h-auto md:w-full md:bg-transparent`}
            >
              <ul className="ml-8 mt-16 flex min-w-fit flex-col gap-6 font-mono text-lg/6 font-bold text-white md:m-0 md:flex-row md:items-center md:text-body md:text-dimGrey lg:gap-8">
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/locations">
                    Location
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/careers">
                    Careers
                  </Link>
                </li>
              </ul>
              <button className="button fixed bottom-6 left-8 w-48 md:static md:ml-auto md:w-[180px] lg:mr-1">
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
