import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import InputPage from "../pages/InputPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NoteAppHeader from "./NoteAppHeader";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { HiOutlineLanguage } from "react-icons/hi2";
import { FaRegSun, FaMoon } from "react-icons/fa6";

function NoteApp() {
  const [authed, setAuthed] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [Theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
  }, [Theme]);

  const toggleTheme = () => {
    const newTheme = Theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const data = await getUserLogged();
    setAuthed(data);
  };

  const onLogout = () => {
    setAuthed(null);
    putAccessToken("");
  };

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthed(data);
      setInitializing(false);
    });
  }, []);

  if (initializing) {
    return null;
  }

  if (authed === null) {
    return (
      <ThemeContext.Provider value={{ Theme, toggleTheme }}>
        <LocaleContext.Provider value={{ locale, toggleLocale }}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Personal Notes"}</Link>
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
                </ul>
              </nav>
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      <LocaleContext.Provider value={{ locale, toggleLocale }}>
        <div className="app-container">
          <NoteAppHeader logout={onLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/input" element={<InputPage />} />
          </Routes>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NoteApp;
