import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaHeart, FaRegHeart, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const BrowseProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    ageMin: 18,
    ageMax: 60,
    gender: 'all',
    location: '',
    religiousLevel: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Simulate API call to fetch profiles
    setTimeout(() => {
      const mockProfiles = [
        {
          id: 1,
          name: 'Ahmed',
          age: 28,
          location: 'New York, USA',
          gender: 'male',
          religiousLevel: 'practicing',
          occupation: 'Software Engineer',
          about: 'Assalamu alaikum! I am a practicing Muslim looking for someone who shares my values and faith.',
          profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          id: 2,
          name: 'Fatima',
          age: 26,
          location: 'London, UK',
          gender: 'female',
          religiousLevel: 'very practicing',
          occupation: 'Doctor',
          about: 'Assalamu alaikum! I am a dedicated Muslimah who loves to help others through my work as a doctor.',
          profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
          id: 3,
          name: 'Mohammed',
          age: 30,
          location: 'Toronto, Canada',
          gender: 'male',
          religiousLevel: 'practicing',
          occupation: 'Teacher',
          about: 'Assalamu alaikum! I am passionate about education and sharing knowledge with others.',
          profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
          id: 4,
          name: 'Aisha',
          age: 25,
          location: 'Chicago, USA',
          gender: 'female',
          religiousLevel: 'moderately practicing',
          occupation: 'Graphic Designer',
          about: 'Assalamu alaikum! I am a creative person who enjoys art and design while maintaining my Islamic values.',
          profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
          id: 5,
          name: 'Yusuf',
          age: 32,
          location: 'Dubai, UAE',
          gender: 'male',
          religiousLevel: 'very practicing',
          occupation: 'Business Analyst',
          about: 'Assalamu alaikum! I am looking for a spouse who is committed to Islamic principles and family values.',
          profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
          id: 6,
          name: 'Maryam',
          age: 27,
          location: 'Sydney, Australia',
          gender: 'female',
          religiousLevel: 'practicing',
          occupation: 'Pharmacist',
          about: 'Assalamu alaikum! I am a dedicated professional who balances career with Islamic values.',
          profileImage: 'https://randomuser.me/api/portraits/women/3.jpg'
        }
      ];
      
      setProfiles(mockProfiles);
      setLoading(false);
    }, 1000);
  }, []);
  
  const toggleFavorite = (profileId) => {
    if (favorites.includes(profileId)) {
      setFavorites(favorites.filter(id => id !== profileId));
    } else {
      setFavorites([...favorites, profileId]);
    }
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  const applyFilters = () => {
    // In a real app, this would trigger an API call with the filters
    console.log('Applying filters:', filters);
    // For demo, we'll just close the filter panel
    setShowFilters(false);
  };
  
  const filteredProfiles = profiles.filter(profile => {
    // Apply age filter
    if (profile.age < filters.ageMin || profile.age > filters.ageMax) {
      return false;
    }
    
    // Apply gender filter
    if (filters.gender !== 'all' && profile.gender !== filters.gender) {
      return false;
    }
    
    // Apply location filter (if provided)
    if (filters.location && !profile.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Apply religious level filter
    if (filters.religiousLevel !== 'all' && profile.religiousLevel !== filters.religiousLevel) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Browse Profiles</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, location, occupation..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 flex items-center justify-center"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Filter Profiles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Age Range</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="ageMin"
                      value={filters.ageMin}
                      onChange={handleFilterChange}
                      min="18"
                      max="100"
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="ageMax"
                      value={filters.ageMax}
                      onChange={handleFilterChange}
                      min="18"
                      max="100"
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender</label>
                  <select
                    name="gender"
                    value={filters.gender}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    placeholder="City, Country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Religious Level</label>
                  <select
                    name="religiousLevel"
                    value={filters.religiousLevel}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All</option>
                    <option value="very practicing">Very Practicing</option>
                    <option value="practicing">Practicing</option>
                    <option value="moderately practicing">Moderately Practicing</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 text-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={applyFilters}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Profiles Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : filteredProfiles.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaUserCircle className="text-gray-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Profiles Found</h3>
            <p className="text-gray-600">
              No profiles match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map(profile => (
              <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(profile.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                  >
                    {favorites.includes(profile.id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-gray-500" />
                    )}
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{profile.name}, {profile.age}</h3>
                      <p className="text-gray-600">{profile.location}</p>
                    </div>
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {profile.religiousLevel}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Occupation:</span> {profile.occupation}
                  </p>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {profile.about}
                  </p>
                  
                  <div className="flex justify-between">
                    <a
                      href={`/profile/${profile.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View Profile
                    </a>
                    <button className="bg-primary-600 text-white px-3 py-1 rounded-md hover:bg-primary-700 flex items-center">
                      <FaEnvelope className="mr-1" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProfiles;
