import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const DailyPrayerBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prayerTime, setPrayerTime] = useState('');
  const [hadith, setHadith] = useState('');

  useEffect(() => {
    // Set a sample prayer time (in a real app, this would come from an API)
    const now = new Date();
    const hours = now.getHours();
    let nextPrayer = '';
    
    if (hours < 5) nextPrayer = 'Fajr: 5:30 AM';
    else if (hours < 12) nextPrayer = 'Dhuhr: 12:30 PM';
    else if (hours < 15) nextPrayer = 'Asr: 3:30 PM';
    else if (hours < 18) nextPrayer = 'Maghrib: 6:30 PM';
    else nextPrayer = 'Isha: 8:30 PM';
    
    setPrayerTime(nextPrayer);
    
    // Set a sample hadith about marriage
    const hadiths = [
      '"When a man marries, he has fulfilled half of his religion." - Prophet Muhammad (PBUH)',
      '"The best of you are those who are best to their wives." - Prophet Muhammad (PBUH)',
      '"There is nothing better for two who love each other than marriage." - Prophet Muhammad (PBUH)',
      '"Marriage is my sunnah. Whoever keeps away from it is not from me." - Prophet Muhammad (PBUH)'
    ];
    
    setHadith(hadiths[Math.floor(Math.random() * hadiths.length)]);
    
    // Check if banner was dismissed in the last 24 hours
    const lastDismissed = localStorage.getItem('prayerBannerDismissed');
    if (lastDismissed) {
      const dismissedTime = new Date(parseInt(lastDismissed));
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      if (dismissedTime > twentyFourHoursAgo) {
        setIsVisible(false);
      }
    }
  }, []);
  
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('prayerBannerDismissed', Date.now().toString());
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-primary-600 text-white py-2 px-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          <span className="font-medium text-white text-shadow-sm">Today's {prayerTime} | </span>
          <span className="italic text-white text-shadow-sm">{hadith}</span>
        </div>
        <button 
          onClick={handleDismiss} 
          className="text-white hover:text-gray-200 ml-4"
          aria-label="Dismiss prayer banner"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default DailyPrayerBanner;
