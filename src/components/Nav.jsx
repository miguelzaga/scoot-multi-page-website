import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="relative z-0 flex h-16 items-center justify-center bg-white">
        {isMenuOpen ? (
          <button
            className="absolute left-8"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={close} alt="close menu" />
          </button>
        ) : (
          <button
            className="absolute left-8"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={hamburger} alt="open menu" />
          </button>
        )}
        <Link to="/">
          <img className="w-[75px]" src={logo} alt="scoot logo" />
        </Link>
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen">
          <div
            className={`${isMenuOpen ? "" : "hidden"} h-full w-64 bg-darkNavy pt-16`}
          >
            <ul>
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
