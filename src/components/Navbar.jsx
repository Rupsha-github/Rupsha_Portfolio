import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Me', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Education', href: 'education' },
    { name: 'Contact Me', href: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-yellow-200 dark:border-gray-700 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1">
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent whitespace-nowrap">
              My Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700 hover:text-yellow-600 dark:hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center p-2 gap-2 flex-none">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden w-full max-w-full px-4 sm:px-6">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-yellow-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700 hover:text-yellow-600 dark:hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;