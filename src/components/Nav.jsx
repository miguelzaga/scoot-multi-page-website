import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative h-16 sm:static">
        <div className="absolute z-10 flex h-16 w-full items-center justify-center bg-white">
          {isOpen ? (
            <button
              className="absolute left-8 sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              <img src={close} alt="close menu" />
            </button>
          ) : (
            <button
              className="absolute left-8 sm:hidden"
              onClick={() => setIsOpen(true)}
            >
              <img src={hamburger} alt="open menu" />
            </button>
          )}{" "}
          <Link to="/">
            <img className="mx-auto w-[75px]" src={logo} alt="scoot logo" />
          </Link>
        </div>
        <div
          className={`${isOpen ? "" : "hidden"} absolute left-0 top-0 z-0 h-screen w-screen bg-black/75 sm:static sm:block sm:h-auto sm:w-auto`}
        >
          <div className="h-full w-64 bg-darkNavy pl-8 pt-16 sm:flex sm:h-auto sm:w-auto sm:bg-inherit sm:pt-0">
            <ul className="mt-16 flex flex-col gap-6">
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
            <button className="absolute bottom-6">Get Scootin</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
