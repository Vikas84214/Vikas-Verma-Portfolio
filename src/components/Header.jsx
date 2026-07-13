import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

  // Helper function to check active path for dynamic rendering
  const isActive = (item) => {
    const formatItem = item.toLowerCase() === "home" ? "" : item.toLowerCase();
    return location.pathname === `/${formatItem}`;
  };

  return (
    <>
      {/* 
        1. NAVBAR BORDER & BACKGROUND:
        Changed 'border-gray-200/40' to your custom solid colored bottom border classes here.
        Added global root-level custom bg triggers to sync your layout backgrounds correctly.
      */}
      <header className="sticky top-0 z-50 bg-blue-100/80 dark:bg-boxdark dark:bg-slate-950 backdrop-blur-md border-b-2 border-black-500 dark:border-cyan-400 shadow-sm transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Dynamic Interactive Logo Block */}
          <Link 
            to="/" 
            className="relative group text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 dark:from-emerald-400 dark:via-blue-400 dark:to-blue-400 tracking-tight"
          >
            Vikas Verma
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                    isActive(item) 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {item}
                </Link>
                {/* Dynamic Bottom Accent Line Highlight */}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ${
                  isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </li>
            ))}

            {/* Theme State Switcher Trigger */}
            <li>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme Mode"
                className="text-xl p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm group"
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-400 group-hover:rotate-45 transition-transform duration-500" />
                ) : (
                  <FaMoon className="text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Control Interface Layout */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme Mode"
              className="text-lg p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
            </button>
            
            <button
              className="text-xl p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 shadow-sm cursor-pointer"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Animated Slide Dropdown Matrix */}
        <div 
          className={`absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-800/80 shadow-xl transition-all duration-300 md:hidden overflow-hidden ${
            menuOpen ? "max-h-[450px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-2 p-6">
            {navItems.map((item, i) => (
              <li 
                key={item}
                className="transform transition-all duration-300" 
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={`block text-base font-bold uppercase tracking-wide px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive(item)
                      ? "bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-l-4 border-purple-500"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* 
        2. ANIMATED SIDEBAR WATERMARK:
        Fixed structural anchor that floats on the left side of your monitor screen.
        It contains a smooth, subtle breathing pulse animation effect.
      */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 items-center justify-center select-none pointer-events-none origin-left -rotate-90 mix-blend-difference">
        <div className="text-xs font-black tracking-[0.3em] uppercase text-gray-400/40 dark:text-gray-600/50 animate-pulse transition-all duration-700">
          Vikas-Verma-Portfolio
        </div>
      </div>
    </>
  );
};

export default Header;