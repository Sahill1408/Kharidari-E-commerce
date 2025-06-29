import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode, setToken }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";
  const isAdminPanel = location.pathname === "/"; 

  const handleLogout = () => {
    setToken(""); // Clear the token
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img
        className="w-36 sm:w-38 md:w-40 lg:w-46 xl:w-52 
              md:max-w-xs lg:max-w-sm xl:max-w-md dark:invert"
        src={assets.logo}
        alt="Logo"
      />
      <div className="flex items-center gap-6">
        <button
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-gray-300"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
        {!isLoginPage &&
          !isAdminPanel && ( // Only show the logout button if not on login or admin panel
            <button
              onClick={handleLogout}
              className="rounded-full text-xs sm:text-sm"
            >
              <MdLogout className="w-5 h-5" />
            </button>
          )}
        <a
          href={import.meta.env.VITE_FRONTEND_URL}
          rel="noopener noreferrer"
          className="rounded-full text-xs sm:text-sm"
        >
          <FaHome className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
