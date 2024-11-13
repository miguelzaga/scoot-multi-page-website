import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
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
      </nav>
    </>
  );
}

export default Nav;
