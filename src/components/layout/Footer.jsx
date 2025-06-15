import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaMosque } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <FaMosque className="text-primary-400 text-2xl mr-2" />
              <span className="text-xl font-bold text-white">My Muslim Spouse</span>
            </Link>
            <p className="text-gray-300 mb-4 font-medium">
              A halal matrimonial platform designed to help Muslims find their perfect match according to Islamic principles.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 font-medium">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 font-medium">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-primary-400 font-medium">How It Works</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-primary-400 font-medium">Success Stories</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-primary-400 font-medium">Articles</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400 font-medium">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 font-medium">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/islamic-marriage" className="text-gray-300 hover:text-primary-400 font-medium">Islamic Marriage</Link></li>
              <li><Link to="/family-in-islam" className="text-gray-300 hover:text-primary-400 font-medium">Family in Islam</Link></li>
              <li><Link to="/quran-references" className="text-gray-300 hover:text-primary-400 font-medium">Quranic References</Link></li>
              <li><Link to="/hadith-collection" className="text-gray-300 hover:text-primary-400 font-medium">Hadith Collection</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-primary-400 font-medium">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-primary-400 font-medium">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-primary-400 font-medium">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-primary-400 font-medium">Cookie Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-primary-400 font-medium">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300 font-medium">
            &copy; {currentYear} My Muslim Spouse. All rights reserved.
          </p>
          <p className="text-gray-300 mt-2 flex items-center justify-center font-medium">
            Made with <FaHeart className="text-red-500 mx-1" /> for the Muslim Ummah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
