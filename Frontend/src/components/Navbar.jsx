import React, { useState, useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [adminUrl, setAdminUrl] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    setAdminUrl(import.meta.env.VITE_ADMIN_URL || "");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAdminClick = () => {
    setProfileDropdownVisible(false);

    if (adminUrl) {
      window.open(`https://kharidari-admin.vercel.app/`, "_blank");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
      return newDarkMode;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    toast.success("Logged out successfully!");
    navigate("/login");
    setProfileDropdownVisible(false);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-8 font-medium max-w-7xl mx-auto">
      <Link to="/" className="flex-shrink-0">
        <img
          src={assets.logo_kha}
          className="w-36 sm:w-44 md:w-48 lg:w-56 dark:invert"
          alt="Logo"
          width="224"
          height="62"
        />
      </Link>

      <ul className="hidden lg:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
          <NavLink
            key={item}
            to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-black dark:hover:text-white transition-colors ${
                isActive
                  ? "text-black font-bold dark:text-white dark:font-bold"
                  : ""
              }`
            }
          >
            <p>{item}</p>
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-2 md:gap-6">
        <button
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer dark:invert hover:opacity-75 transition-opacity"
          alt="Search"
        />

        <div className="relative" ref={dropdownRef}>
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer dark:invert hover:opacity-75 transition-opacity"
            alt="Profile"
            onClick={() => setProfileDropdownVisible((prev) => !prev)} // Toggle on click
          />
          {profileDropdownVisible && (
            <div className="absolute right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded shadow-lg dark:bg-[#222] dark:text-gray-300">
                {token && (
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Welcome!
                  </p>
                )}
                {token ? (
                  <>
                    <p
                      className="cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                      onClick={handleAdminClick}
                    >
                      Admin
                    </p>
                    <p
                      className="cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                      onClick={() => {
                        navigate("/orders");
                        setProfileDropdownVisible(false); // Close dropdown
                      }}
                    >
                      Orders
                    </p>
                    <p
                      className="cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="cursor-pointer hover:text-black dark:hover:text-white transition-colors text-center"
                      onClick={() => {
                        navigate("/login");
                        setProfileDropdownVisible(false); // Close dropdown
                      }}
                    >
                      Login
                    </p>
                    {/* Admin link below Login for non-logged in users */}
                    <p
                      className="cursor-pointer hover:text-black dark:hover:text-white transition-colors text-center"
                      onClick={handleAdminClick}
                    >
                      Admin
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <Link
          to="/cart"
          className="hidden sm:flex items-center relative cursor-pointer"
        >
          <img
            src={assets.cart_icon}
            className="w-5 dark:invert hover:opacity-75 transition-opacity"
            alt="Cart"
          />
          <span className="absolute -bottom-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {getCartCount()}
          </span>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer lg:hidden dark:invert hover:opacity-75 transition-opacity"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setVisible(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#222] transition-transform duration-300 ease-in-out z-50 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600 dark:text-gray-300 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 invert dark:invert-0"
              alt="Back"
            />
            <p>Back</p>
          </div>
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setVisible(false)}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="py-3 px-6 border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
            >
              {item}
            </NavLink>
          ))}
          <Link
            to="/cart"
            className="py-3 px-6 border-b dark:border-gray-600 flex items-center hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.cart_icon}
              className="w-5 mr-2 dark:invert"
              alt="Cart"
            />
            <span>Cart ({getCartCount()})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
