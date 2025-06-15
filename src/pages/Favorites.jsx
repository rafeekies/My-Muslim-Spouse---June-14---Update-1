import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaEnvelope, FaComment, FaEllipsisH } from 'react-icons/fa';

const Favorites = () => {
  // Mock data for favorites
  const favorites = [
    {
      id: 1,
      name: 'Aisha Rahman',
      age: 28,
      location: 'Chicago, IL',
      occupation: 'Doctor',
      education: 'Medical School',
      religiousBackground: 'Sunni, practicing',
      lastActive: '2 hours ago',
      compatibilityScore: 92,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isMutualMatch: true
    },
    {
      id: 2,
      name: 'Fatima Khan',
      age: 26,
      location: 'New York, NY',
      occupation: 'Software Engineer',
      education: 'Master\'s in Computer Science',
      religiousBackground: 'Sunni, practicing',
      lastActive: '1 day ago',
      compatibilityScore: 88,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isMutualMatch: false
    },
    {
      id: 3,
      name: 'Maryam Ali',
      age: 30,
      location: 'Houston, TX',
      occupation: 'Teacher',
      education: 'Bachelor\'s in Education',
      religiousBackground: 'Sunni, moderately practicing',
      lastActive: '3 days ago',
      compatibilityScore: 85,
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isMutualMatch: true
    },
    {
      id: 4,
      name: 'Zainab Hassan',
      age: 27,
      location: 'Los Angeles, CA',
      occupation: 'Marketing Manager',
      education: 'MBA',
      religiousBackground: 'Sunni, practicing',
      lastActive: 'Just now',
      compatibilityScore: 90,
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      isMutualMatch: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Filter
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Sort by
              </button>
            </div>
          </div>
          
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map((profile) => (
                <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex">
                    <div className="w-1/3">
                      <div className="relative h-full">
                        <img 
                          src={profile.image} 
                          alt={profile.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-primary-600 hover:bg-primary-50">
                            <FaHeart />
                          </button>
                        </div>
                        {profile.isMutualMatch && (
                          <div className="absolute bottom-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                            Mutual Match
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900">{profile.name}, {profile.age}</h2>
                          <p className="text-gray-600 text-sm">{profile.location}</p>
                        </div>
                        <div className="flex items-center bg-primary-50 px-2 py-1 rounded-full">
                          <span className="text-primary-700 text-sm font-medium">{profile.compatibilityScore}% Match</span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-gray-700 text-sm"><span className="font-medium">Occupation:</span> {profile.occupation}</p>
                        <p className="text-gray-700 text-sm"><span className="font-medium">Education:</span> {profile.education}</p>
                        <p className="text-gray-700 text-sm"><span className="font-medium">Religious Background:</span> {profile.religiousBackground}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-gray-500 text-xs">Active {profile.lastActive}</p>
                        <div className="flex space-x-2">
                          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                            <FaEnvelope size={14} />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                            <FaComment size={14} />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                            <FaEllipsisH size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center">
                <FaRegHeart className="text-primary-600 text-2xl" />
              </div>
              <h2 className="mt-4 text-xl font-medium text-gray-900">No favorites yet</h2>
              <p className="mt-2 text-gray-600">
                When you find profiles you're interested in, add them to your favorites for easy access.
              </p>
              <Link 
                to="/browse" 
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Browse Profiles
              </Link>
            </div>
          )}
          
          {favorites.length > 0 && (
            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary-50 text-sm font-medium text-primary-600 hover:bg-primary-50">
                  2
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  8
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  9
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
