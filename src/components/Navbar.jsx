"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "À propos", href: "/about" },
    { text: "Compétences", href: "/skills" },
    { text: "Projets", href: "/projects" },
    { text: "BTS SIO / Tableau E5", href: "/bts-sio" },
    { text: "Veille technologique", href: "/veille" },
    { text: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="images/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">
              Portfolio
            </span>
          </a>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8`}
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block md:inline-block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
