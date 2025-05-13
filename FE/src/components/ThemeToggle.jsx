
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative flex items-center w-20 h-10 rounded-full bg-gray-300 dark:bg-gray-800 p-2 transition duration-300 "
    >
      {/* Toggle Circle */}
      <div
        className={` absolute w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>

      {/* Sun Icon */}
      <svg
        className={`absolute left-2 ml-1 w-5 h-5 text-yellow-500 transition-opacity ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
        />
      </svg>
      
      <svg
      className={`size-6 absolute right-2 w-5 h-5 mr-1 text-white transition-opacity ${
        isDarkMode ? "opacity-100" : "opacity-0"
      }`}
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>

    </button>
  );
};

export default ThemeToggle;