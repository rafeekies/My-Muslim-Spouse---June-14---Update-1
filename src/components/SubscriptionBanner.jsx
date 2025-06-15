import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaCrown } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const SubscriptionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { userProfile } = useAuth();
  
  // If user already has a subscription, don't show the banner
  if (userProfile?.subscription?.status === 'active') {
    return null;
  }
  
  const handleDismiss = () => {
    setIsVisible(false);
    // Store in session storage so it stays dismissed only for this session
    sessionStorage.setItem('subscriptionBannerDismissed', 'true');
  };
  
  // Check if banner was dismissed in this session
  if (sessionStorage.getItem('subscriptionBannerDismissed') === 'true' || !isVisible) {
    return null;
  }
  
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <FaCrown className="text-white mr-2 text-xl" />
          <span className="font-medium text-on-dark-heading">Upgrade to Premium for unlimited matches!</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-on-dark">14-day free trial available</span>
          <Link 
            to="/subscription" 
            className="bg-white text-yellow-600 hover:bg-gray-100 px-4 py-1 rounded-md font-medium text-sm"
          >
            Upgrade Now
          </Link>
          <button 
            onClick={handleDismiss} 
            className="text-white hover:text-gray-200 ml-4"
            aria-label="Dismiss subscription banner"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
