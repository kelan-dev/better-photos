import logo from "../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <form className="search" action="#">
        <input
          className="search__input"
          type="text"
          placeholder="Search photos..."
        />
        <button className="search__submit">
          <FaSearch className="search__icon" />
        </button>
      </form>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FaCompass className="nav__icon" />
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FaFireAlt className="nav__icon" />
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FaUser className="nav__icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
