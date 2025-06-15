import React, { useState, useEffect } from 'react';
import { FaMosque, FaSun, FaRegSun, FaMoon, FaRegMoon, FaRegClock } from 'react-icons/fa';

const PrayerTimesWidget = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: '05:12 AM',
    dhuhr: '12:30 PM',
    asr: '03:45 PM',
    maghrib: '06:58 PM',
    isha: '08:15 PM',
  });
  const [currentDate, setCurrentDate] = useState('');
  const [nextPrayer, setNextPrayer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Set current date
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));

    // Calculate next prayer and time remaining (simplified example)
    setNextPrayer('Maghrib');
    setTimeRemaining('2 hours 15 minutes');

    // In a real app, you would fetch prayer times based on location
    // and calculate the next prayer and time remaining
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaMosque className="mr-2 text-xl" />
            <h3 className="text-xl font-semibold">Prayer Times</h3>
          </div>
          <span className="text-sm">{currentDate}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <div className="text-center p-2 bg-primary-50 rounded-md">
            <p className="text-primary-700 font-medium">Next Prayer: {nextPrayer}</p>
            <p className="text-sm text-gray-600">Time Remaining: {timeRemaining}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          <div className="text-center p-2">
            <div className="flex justify-center mb-1">
              <FaRegSun className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Fajr</p>
            <p className="font-medium">{prayerTimes.fajr}</p>
          </div>
          
          <div className="text-center p-2">
            <div className="flex justify-center mb-1">
              <FaSun className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Dhuhr</p>
            <p className="font-medium">{prayerTimes.dhuhr}</p>
          </div>
          
          <div className="text-center p-2">
            <div className="flex justify-center mb-1">
              <FaRegSun className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Asr</p>
            <p className="font-medium">{prayerTimes.asr}</p>
          </div>
          
          <div className="text-center p-2">
            <div className="flex justify-center mb-1">
              <FaRegMoon className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Maghrib</p>
            <p className="font-medium">{prayerTimes.maghrib}</p>
          </div>
          
          <div className="text-center p-2">
            <div className="flex justify-center mb-1">
              <FaMoon className="text-primary-500" />
            </div>
            <p className="text-xs text-gray-500">Isha</p>
            <p className="font-medium">{prayerTimes.isha}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimesWidget;
