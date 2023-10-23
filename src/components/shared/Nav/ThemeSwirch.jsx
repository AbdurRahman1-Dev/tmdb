"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeSwirch = () => {
  const [theme, setTheme] = useState("");

  const handleDarkTheme = () => {
    const themes = localStorage.getItem("theme");
    if (!themes || themes == "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  };

  const handleLightTheme = () => {
    const themes = localStorage.getItem("theme");
    if (!themes || themes == "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    const themes = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", themes);
    setTheme(themes);
  }, [theme]);

  return (
    <div>
      {theme == "light" ? (
        <button
          className="text-2xl visited:rotate-[360deg] transition duration-300"
          onClick={handleDarkTheme}
        >
          <FaMoon className="text-gray-200" />
        </button>
      ) : (
        <button
          className="text-2xl focus:rotate-[360deg] transition duration-300"
          onClick={handleLightTheme}
        >
          <FaSun className="text-gray-200" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwirch;
