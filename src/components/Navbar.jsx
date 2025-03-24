import React from "react";

const Navbar = () => {
  const menuItems = [
    { text: "À propos", href: "/about" },
    { text: "Compétences", href: "/skills" },
    { text: "Projets", href: "/projects" },
    { text: "BTS SIO / Tableau E4", href: "/bts-sio" },
    { text: "Veille technologique" , href: "/veille"},
    { text: "Contact", href: "/contact" },
  ];

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

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50"
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
