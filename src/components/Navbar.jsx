import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBars, FaTimes, FaSignInAlt, FaUserPlus, FaBook, FaInfoCircle, FaEnvelope, FaMosque } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };
  
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FaMosque className="text-primary-600 text-2xl mr-2" />
            <span className="text-xl font-bold text-primary-700">My Muslim Spouse</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-primary-600 flex items-center"
                onClick={toggleResources}
              >
                <span>Islamic Resources</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isResourcesOpen && (
                <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/islamic-marriage" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Islamic Marriage</Link>
                  <Link to="/family-in-islam" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Family in Islam</Link>
                  <Link to="/quran-references" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Quranic References</Link>
                  <Link to="/hadith-collection" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Hadith Collection</Link>
                  <Link to="/articles" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Articles</Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
            
            {currentUser ? (
              <>
                <Link to="/browse" className="text-gray-700 hover:text-primary-600">Browse Profiles</Link>
                <div className="relative">
                  <button 
                    className="text-gray-700 hover:text-primary-600 flex items-center"
                    onClick={toggleProfile}
                  >
                    <FaUser className="mr-1" />
                    <span>Account</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute z-50 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Dashboard</Link>
                      <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">My Profile</Link>
                      <Link to="/messages" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Messages</Link>
                      <Link to="/favorites" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Favorites</Link>
                      <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">Settings</Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center text-gray-700 hover:text-primary-600">
                  <FaSignInAlt className="mr-1" />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded">
                  <FaUserPlus className="inline mr-1" />
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
              
              <button 
                className="text-left text-gray-700 hover:text-primary-600 flex items-center justify-between"
                onClick={toggleResources}
              >
                <span>Islamic Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isResourcesOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/islamic-marriage" className="text-gray-700 hover:text-primary-600">Islamic Marriage</Link>
                  <Link to="/family-in-islam" className="text-gray-700 hover:text-primary-600">Family in Islam</Link>
                  <Link to="/quran-references" className="text-gray-700 hover:text-primary-600">Quranic References</Link>
                  <Link to="/hadith-collection" className="text-gray-700 hover:text-primary-600">Hadith Collection</Link>
                  <Link to="/articles" className="text-gray-700 hover:text-primary-600">Articles</Link>
                </div>
              )}
              
              <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
              
              {currentUser ? (
                <>
                  <Link to="/browse" className="text-gray-700 hover:text-primary-600">Browse Profiles</Link>
                  <Link to="/dashboard" className="text-gray-700 hover:text-primary-600">Dashboard</Link>
                  <Link to="/profile" className="text-gray-700 hover:text-primary-600">My Profile</Link>
                  <Link to="/messages" className="text-gray-700 hover:text-primary-600">Messages</Link>
                  <Link to="/favorites" className="text-gray-700 hover:text-primary-600">Favorites</Link>
                  <Link to="/settings" className="text-gray-700 hover:text-primary-600">Settings</Link>
                  <button 
                    onClick={handleLogout}
                    className="text-left text-gray-700 hover:text-primary-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-primary-600">Login</Link>
                  <Link to="/register" className="text-gray-700 hover:text-primary-600">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
