import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Askademia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign In
              </Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link
              to="/features"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>            <div className="mt-4 space-y-2">
              <Link to="/login" className="block w-full text-left py-2 text-blue-600 hover:text-blue-700 font-semibold">
                Sign In
              </Link>
              <Link to="/register" className="block w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
