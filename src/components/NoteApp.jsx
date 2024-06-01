import React, { useState, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

function NoteApp() {
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

  return (
    <div className="app-container">
      <ThemeContext.Provider value={{ Theme, toggleTheme }}>
        <LocaleContext.Provider value={{ locale, toggleLocale }}>
          <NoteAppHeader />
          <NoteAppBody />
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default NoteApp;
