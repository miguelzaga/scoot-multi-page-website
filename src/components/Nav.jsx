import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
function Nav() {
  return (
    <>
      <nav className="relative flex h-16 items-center justify-center">
        <button
          className="absolute left-8"
          onClick={() => console.log("open menu")}
        >
          <img src={hamburger} alt="open menu" />
        </button>
        <Link to="/">
          <img className="w-[75px]" src={logo} alt="scoot logo" />
        </Link>
        <ul className="hidden">
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
      </nav>
    </>
  );
}

export default Nav;
