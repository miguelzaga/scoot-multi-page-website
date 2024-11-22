import { Link } from "react-router-dom";
import appStore from "/src/assets/icons/app-store.svg";
import googlePlay from "/src/assets/icons/google-play.svg";
import facebook from "/src/assets/icons/facebook.svg";
import instagram from "/src/assets/icons/instagram.svg";
import twitter from "/src/assets/icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="bg-darkNavy px-8 py-22">
        <h2 className="mb-10 text-center font-mono text-[2rem]/none font-bold tracking-[-1.43px] text-white">
          Sign up and Scoot off today
        </h2>
        <div className="flex h-10 justify-center gap-3">
          <img className="" src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#333A44] pb-22 pt-16">
        <svg
          className="mb-10 w-[107px] fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="108"
          height="29"
        >
          <path
            fill="inherit"
            d="M9.12 28.56c2.613 0 4.64-.587 6.08-1.76 1.44-1.173 2.16-2.747 2.16-4.72v-.24c0-1.787-.64-3.18-1.92-4.18-1.28-1-2.933-1.607-4.96-1.82-1.76-.187-2.973-.42-3.64-.7-.667-.28-1-.74-1-1.38 0-.453.213-.833.64-1.14.427-.307 1.067-.46 1.92-.46.933 0 1.693.207 2.28.62.587.413 1 .98 1.24 1.7l4.56-1.84a8.834 8.834 0 00-.92-1.74c-.4-.6-.92-1.147-1.56-1.64-.64-.493-1.42-.893-2.34-1.2-.92-.307-2.007-.46-3.26-.46-.96 0-1.893.133-2.8.4a7.473 7.473 0 00-2.4 1.18 6.193 6.193 0 00-1.68 1.9c-.427.747-.64 1.613-.64 2.6v.24c0 1.893.66 3.327 1.98 4.3 1.32.973 3.1 1.553 5.34 1.74.827.08 1.513.187 2.06.32.547.133.98.3 1.3.5.32.2.54.413.66.64.12.227.18.473.18.74 0 .453-.233.873-.7 1.26-.467.387-1.327.58-2.58.58-1.413 0-2.46-.32-3.14-.96-.68-.64-1.127-1.387-1.34-2.24L0 22.32c.133.693.393 1.407.78 2.14.387.733.94 1.4 1.66 2 .72.6 1.627 1.1 2.72 1.5 1.093.4 2.413.6 3.96.6zm22.454 0c2.827 0 5.087-.72 6.78-2.16 1.694-1.44 2.767-3.333 3.22-5.68l-4.96-1.24c-.24 1.307-.766 2.347-1.58 3.12-.813.773-1.993 1.16-3.54 1.16-.72 0-1.4-.113-2.04-.34a4.704 4.704 0 01-1.68-1.02c-.48-.453-.86-1.02-1.14-1.7-.28-.68-.42-1.46-.42-2.34v-.24c0-.88.14-1.673.42-2.38.28-.707.66-1.307 1.14-1.8a5.005 5.005 0 011.68-1.14 5.25 5.25 0 012.04-.4c1.547 0 2.747.427 3.6 1.28.854.853 1.36 1.867 1.52 3.04l4.96-1.28c-.453-2.347-1.54-4.24-3.26-5.68-1.72-1.44-3.966-2.16-6.74-2.16-1.44 0-2.793.24-4.06.72a9.726 9.726 0 00-3.32 2.08c-.946.907-1.686 2-2.22 3.28-.533 1.28-.8 2.72-.8 4.32v.48c0 1.6.267 3.027.8 4.28.534 1.253 1.267 2.307 2.2 3.16.934.853 2.034 1.507 3.3 1.96 1.267.453 2.634.68 4.1.68zm22.455 0c1.36 0 2.66-.227 3.9-.68a9.997 9.997 0 003.3-1.98c.96-.867 1.72-1.933 2.28-3.2.56-1.267.84-2.727.84-4.38v-.48c0-1.627-.28-3.073-.84-4.34-.56-1.267-1.32-2.34-2.28-3.22a9.827 9.827 0 00-3.3-2c-1.24-.453-2.54-.68-3.9-.68-1.36 0-2.66.227-3.9.68a9.827 9.827 0 00-3.3 2c-.96.88-1.72 1.953-2.28 3.22-.56 1.267-.84 2.713-.84 4.34v.48c0 1.653.28 3.113.84 4.38.56 1.267 1.32 2.333 2.28 3.2a9.997 9.997 0 003.3 1.98c1.24.453 2.54.68 3.9.68zm0-4.8c-.72 0-1.4-.12-2.04-.36-.64-.24-1.2-.587-1.68-1.04a4.911 4.911 0 01-1.14-1.66c-.28-.653-.42-1.393-.42-2.22v-.8c0-.827.14-1.567.42-2.22.28-.653.66-1.207 1.14-1.66.48-.453 1.04-.8 1.68-1.04.64-.24 1.32-.36 2.04-.36s1.4.12 2.04.36c.64.24 1.2.587 1.68 1.04.48.453.86 1.007 1.14 1.66.28.653.42 1.393.42 2.22v.8c0 .827-.14 1.567-.42 2.22a4.911 4.911 0 01-1.14 1.66c-.48.453-1.04.8-1.68 1.04-.64.24-1.32.36-2.04.36zm22.694 4.8c1.36 0 2.66-.227 3.9-.68a9.997 9.997 0 003.3-1.98c.96-.867 1.72-1.933 2.28-3.2.56-1.267.84-2.727.84-4.38v-.48c0-1.627-.28-3.073-.84-4.34-.56-1.267-1.32-2.34-2.28-3.22a9.827 9.827 0 00-3.3-2c-1.24-.453-2.54-.68-3.9-.68-1.36 0-2.66.227-3.9.68a9.827 9.827 0 00-3.3 2c-.96.88-1.72 1.953-2.28 3.22-.56 1.267-.84 2.713-.84 4.34v.48c0 1.653.28 3.113.84 4.38.56 1.267 1.32 2.333 2.28 3.2a9.997 9.997 0 003.3 1.98c1.24.453 2.54.68 3.9.68zm0-4.8c-.72 0-1.4-.12-2.04-.36-.64-.24-1.2-.587-1.68-1.04a4.911 4.911 0 01-1.14-1.66c-.28-.653-.42-1.393-.42-2.22v-.8c0-.827.14-1.567.42-2.22.28-.653.66-1.207 1.14-1.66.48-.453 1.04-.8 1.68-1.04.64-.24 1.32-.36 2.04-.36s1.4.12 2.04.36c.64.24 1.2.587 1.68 1.04.48.453.86 1.007 1.14 1.66.28.653.42 1.393.42 2.22v.8c0 .827-.14 1.567-.42 2.22a4.911 4.911 0 01-1.14 1.66c-.48.453-1.04.8-1.68 1.04-.64.24-1.32.36-2.04.36zM107.097 28v-4.8h-5.36c-.72 0-1.08-.4-1.08-1.2v-9.04h7.16v-4.8h-7.16V0h-5.04v8.16h-5.88v4.8h5.88v11.92c0 .907.287 1.653.86 2.24.573.587 1.313.88 2.22.88h8.4z"
          />
        </svg>
        <ul className="mb-[85px] flex flex-col gap-4 text-center font-mono font-bold text-dimGrey">
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
        <ul className="flex gap-6">
          <li>
            <img className="" src={facebook}></img>
          </li>
          <li>
            <img className="" src={instagram}></img>
          </li>
          <li>
            <img className="" src={twitter}></img>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
