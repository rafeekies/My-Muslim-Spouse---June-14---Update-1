import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHeart, FaEye, FaCalendarAlt, FaCrown, FaEdit } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, userProfile } = useAuth();
  const [stats, setStats] = useState({
    profileViews: 0,
    messagesSent: 0,
    messagesReceived: 0,
    favorites: 0,
    matches: 0
  });
  
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch user stats and activity
    setTimeout(() => {
      setStats({
        profileViews: 42,
        messagesSent: 15,
        messagesReceived: 23,
        favorites: 8,
        matches: 3
      });
      
      setRecentActivity([
        { type: 'view', user: 'Fatima', time: '2 hours ago' },
        { type: 'message', user: 'Ahmed', time: '5 hours ago' },
        { type: 'favorite', user: 'Maryam', time: '1 day ago' },
        { type: 'match', user: 'Yusuf', time: '2 days ago' },
        { type: 'view', user: 'Aisha', time: '3 days ago' }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Subscription Status */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaCrown className="text-yellow-300 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">
                  {userProfile?.subscriptionTier === 'premium' ? 'Premium Membership' : 'Free Trial'}
                </h2>
                <p>
                  {userProfile?.subscriptionTier === 'premium' 
                    ? 'Your premium membership is active.' 
                    : `${userProfile?.trialDaysLeft || 14} days remaining in your free trial.`}
                </p>
              </div>
            </div>
            
            {userProfile?.subscriptionTier !== 'premium' && (
              <Link 
                to="/subscription" 
                className="bg-white text-primary-700 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
              >
                Upgrade to Premium
              </Link>
            )}
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaEye className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.profileViews}</h3>
            <p className="text-gray-600">Profile Views</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaEnvelope className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.messagesSent}</h3>
            <p className="text-gray-600">Messages Sent</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaEnvelope className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.messagesReceived}</h3>
            <p className="text-gray-600">Messages Received</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaHeart className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.favorites}</h3>
            <p className="text-gray-600">Favorites</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaUser className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.matches}</h3>
            <p className="text-gray-600">Matches</p>
          </div>
        </div>
        
        {/* Profile Completion and Quick Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Profile Completion */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Profile Completion</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">70% Complete</span>
                <span className="text-primary-600">7/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Complete your profile to increase your chances of finding a match.
            </p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                Basic Information
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                Profile Picture
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                Education & Career
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs">×</span>
                Family Background
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs">×</span>
                Religious Background
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs">×</span>
                Partner Preferences
              </li>
            </ul>
            
            <Link 
              to="/profile/edit" 
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md font-medium inline-flex items-center"
            >
              <FaEdit className="mr-2" />
              Complete Profile
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/browse" 
                className="bg-primary-50 hover:bg-primary-100 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <FaUser className="text-primary-600 text-2xl mb-2" />
                <span className="text-gray-800 font-medium">Browse Profiles</span>
              </Link>
              
              <Link 
                to="/messages" 
                className="bg-primary-50 hover:bg-primary-100 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <FaEnvelope className="text-primary-600 text-2xl mb-2" />
                <span className="text-gray-800 font-medium">Messages</span>
              </Link>
              
              <Link 
                to="/favorites" 
                className="bg-primary-50 hover:bg-primary-100 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <FaHeart className="text-primary-600 text-2xl mb-2" />
                <span className="text-gray-800 font-medium">Favorites</span>
              </Link>
              
              <Link 
                to="/settings" 
                className="bg-primary-50 hover:bg-primary-100 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <FaCrown className="text-primary-600 text-2xl mb-2" />
                <span className="text-gray-800 font-medium">Subscription</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          
          {recentActivity.length === 0 ? (
            <p className="text-gray-600">No recent activity to display.</p>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    {activity.type === 'view' && <FaEye className="text-primary-600" />}
                    {activity.type === 'message' && <FaEnvelope className="text-primary-600" />}
                    {activity.type === 'favorite' && <FaHeart className="text-primary-600" />}
                    {activity.type === 'match' && <FaUser className="text-primary-600" />}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-800">
                      {activity.type === 'view' && <span><strong>{activity.user}</strong> viewed your profile</span>}
                      {activity.type === 'message' && <span><strong>{activity.user}</strong> sent you a message</span>}
                      {activity.type === 'favorite' && <span><strong>{activity.user}</strong> added you to favorites</span>}
                      {activity.type === 'match' && <span>You matched with <strong>{activity.user}</strong></span>}
                    </p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                  <Link 
                    to={activity.type === 'message' ? '/messages' : `/profile/${activity.user}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    {activity.type === 'message' ? 'View Message' : 'View Profile'}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
