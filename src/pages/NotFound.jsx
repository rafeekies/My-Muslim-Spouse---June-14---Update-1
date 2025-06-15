import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaSearch, FaQuestionCircle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto">
          <FaExclamationTriangle className="text-primary-500 text-6xl mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/" className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium flex items-center justify-center">
              <FaHome className="mr-2" />
              Return to Home
            </Link>
            <Link to="/contact" className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md font-medium flex items-center justify-center">
              <FaQuestionCircle className="mr-2" />
              Contact Support
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Looking for something specific?</h3>
            <p className="text-gray-600 mb-4">
              You might find what you're looking for in one of these popular sections:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <Link to="/islamic-marriage" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                Islamic Marriage
              </Link>
              <Link to="/family-in-islam" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                Family in Islam
              </Link>
              <Link to="/quran-references" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                Quranic References
              </Link>
              <Link to="/faqs" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                FAQs
              </Link>
              <Link to="/browse" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                Browse Profiles
              </Link>
              <Link to="/register" className="text-primary-600 hover:text-primary-700 flex items-center">
                <FaSearch className="mr-2 text-xs" />
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
