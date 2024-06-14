import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineLanguage } from "react-icons/hi2";
import { FaRegSun, FaMoon } from "react-icons/fa6";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import PropTypes from "prop-types";

function NoteAppHeader({ logout }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { Theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>
        <Link to="/">{locale === "id" ? "Catatan Pribadi" : "Personal Note"}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <button onClick={toggleTheme} className="button-logout">
              {Theme === "light" ? <FaRegSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <button onClick={toggleLocale} className="button-logout">
              <HiOutlineLanguage />
            </button>
          </li>
          <li>
            <Link to="/">
              <button onClick={logout} className="button-logout">
                {name} <FiLogOut />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

NoteAppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NoteAppHeader;
