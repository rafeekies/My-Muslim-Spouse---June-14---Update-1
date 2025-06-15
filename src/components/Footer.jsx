import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <FaMosque className="text-primary-400 text-2xl mr-2" />
              <span className="text-xl font-bold text-white">My Muslim Spouse</span>
            </Link>
            <p className="text-gray-300 mb-4 font-medium">
              A trusted Islamic matrimonial platform helping Muslims find their life partners while adhering to Islamic principles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 font-medium">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-primary-400 font-medium">How It Works</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-primary-400 font-medium">Success Stories</Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-primary-400 font-medium">Articles</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 font-medium">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Islamic Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Islamic Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/islamic-marriage" className="text-gray-300 hover:text-primary-400 font-medium">Islamic Marriage</Link>
              </li>
              <li>
                <Link to="/family-in-islam" className="text-gray-300 hover:text-primary-400 font-medium">Family in Islam</Link>
              </li>
              <li>
                <Link to="/quran-references" className="text-gray-300 hover:text-primary-400 font-medium">Quranic References</Link>
              </li>
              <li>
                <Link to="/hadith-collection" className="text-gray-300 hover:text-primary-400 font-medium">Hadith Collection</Link>
              </li>
              <li>
                <Link to="/marriage-faqs" className="text-gray-300 hover:text-primary-400 font-medium">Marriage FAQs</Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-primary-400 font-medium">Help Center</Link>
              </li>
              <li>
                <Link to="/safety-tips" className="text-gray-300 hover:text-primary-400 font-medium">Safety Tips</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-primary-400 font-medium">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-primary-400 font-medium">Terms of Service</Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-primary-400 font-medium">Subscription Plans</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300 font-medium">© {currentYear} My Muslim Spouse. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-300 font-medium">
            Designed and developed with Islamic values in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
