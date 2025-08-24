"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaHome, 
  FaBoxOpen, 
  FaBalanceScale, 
  FaComments, 
  FaInfoCircle, 
  FaPhoneAlt,
  FaTimes,
  FaBars,
  FaSun,
  FaMoon
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle and persistence
  useEffect(() => {
    // Check if dark mode is preferred by user or stored in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('darkMode') !== 'false');
    
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  // Close mobile menu on route change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome className="text-lg" /> },
    { name: "Products", href: "/products", icon: <FaBoxOpen className="text-lg" /> },
    { name: "Compare", href: "/compare", icon: <FaBalanceScale className="text-lg" /> },
    { name: "Testimonials", href: "/testimonials", icon: <FaComments className="text-lg" /> },
    { name: "About", href: "/about", icon: <FaInfoCircle className="text-lg" /> },
    { name: "Contact", href: "/contact", icon: <FaPhoneAlt className="text-lg" /> },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-sky-100 dark:bg-gray-900 shadow-lg backdrop-blur-md bg-opacity-95 py-2" 
        : "bg-sky-100 dark:bg-gray-900 py-4"
    }`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="text-2xl sm:text-3xl font-extrabold tracking-widest text-blue-800 dark:text-blue-400 select-none flex items-center"
        >
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Oxygen Times
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-blue-800 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium text-sm uppercase tracking-wide">
            {navItems.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300 text-blue-700 dark:text-blue-400">
                  {icon}
                </span>
                <span>{name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full p-2 transition-all duration-300 ml-2"
          >
            {menuOpen ? (
              <FaTimes className="h-6 w-6 text-blue-800 dark:text-blue-400" />
            ) : (
              <FaBars className="h-6 w-6 text-blue-800 dark:text-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-50" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-sky-100 dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-between items-center p-6 border-b border-blue-300 dark:border-gray-700">
            <Link 
              href="/" 
              className="text-xl font-extrabold tracking-widest text-blue-800 dark:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Oxygen Times
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-blue-800 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <FaTimes className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              </button>
            </div>
          </div>
          
          <ul className="flex flex-col p-6 gap-2 font-medium text-base uppercase tracking-wide">
            {navItems.map(({ name, href, icon }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="flex items-center gap-4 py-4 px-4 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/30 rounded-lg transition-all duration-300 group"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}