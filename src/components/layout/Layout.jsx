import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DailyPrayerBanner from './DailyPrayerBanner';
import SubscriptionBanner from '../SubscriptionBanner';
import { useAuth } from '../../contexts/AuthContext';

const Layout = () => {
  const { userProfile } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <DailyPrayerBanner />
      <Navbar />
      <main className="flex-grow">
        {userProfile && <SubscriptionBanner />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
