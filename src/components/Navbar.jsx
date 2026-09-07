import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];


  const scrollToSection = (section) => {
    setIsMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md fixed w-full top-0 z-50`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Umar Farid
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-500 transition"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center md:hidden gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
