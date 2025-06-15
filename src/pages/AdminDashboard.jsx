import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, query, where, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { FaUsers, FaUserShield, FaMoneyBillWave, FaChartLine, FaSearch } from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSubscriptions: 0,
    freeTrialUsers: 0,
    revenueEstimate: 0
  });
  const { currentUser, userProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    if (!userProfile) {
      return;
    }
    
    if (userProfile.role !== 'admin') {
      navigate('/dashboard');
      return;
    }

    const fetchUsers = async () => {
      try {
        const usersQuery = query(
          collection(db, 'users'),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(usersQuery);
        const usersData = [];
        let activeSubscriptions = 0;
        let freeTrialUsers = 0;
        let revenueEstimate = 0;
        
        querySnapshot.forEach((doc) => {
          const userData = { id: doc.id, ...doc.data() };
          usersData.push(userData);
          
          // Calculate stats
          if (userData.subscription?.active) {
            activeSubscriptions++;
            if (userData.subscription.plan === 'free-trial') {
              freeTrialUsers++;
            } else if (userData.subscription.plan === 'premium') {
              revenueEstimate += 9.99; // Assuming $9.99 per premium user
            } else if (userData.subscription.plan === 'platinum') {
              revenueEstimate += 19.99; // Assuming $19.99 per platinum user
            }
          }
        });
        
        setUsers(usersData);
        setFilteredUsers(usersData);
        setStats({
          totalUsers: usersData.length,
          activeSubscriptions,
          freeTrialUsers,
          revenueEstimate: revenueEstimate.toFixed(2)
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser, userProfile, navigate]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateUserSubscription = async (userId, newPlan) => {
    try {
      const userRef = doc(db, "users", userId);
      
      // Set subscription details based on plan
      let endDate = new Date();
      if (newPlan === 'free-trial') {
        endDate.setDate(endDate.getDate() + 14); // 14-day trial
      } else {
        endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription
      }
      
      await updateDoc(userRef, {
        'subscription.plan': newPlan,
        'subscription.startDate': new Date().toISOString(),
        'subscription.endDate': endDate.toISOString(),
        'subscription.active': true
      });
      
      // Update local state
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            subscription: {
              ...user.subscription,
              plan: newPlan,
              startDate: new Date().toISOString(),
              endDate: endDate.toISOString(),
              active: true
            }
          };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      
      // Recalculate stats
      let activeSubscriptions = 0;
      let freeTrialUsers = 0;
      let revenueEstimate = 0;
      
      updatedUsers.forEach(user => {
        if (user.subscription?.active) {
          activeSubscriptions++;
          if (user.subscription.plan === 'free-trial') {
            freeTrialUsers++;
          } else if (user.subscription.plan === 'premium') {
            revenueEstimate += 9.99;
          } else if (user.subscription.plan === 'platinum') {
            revenueEstimate += 19.99;
          }
        }
      });
      
      setStats({
        totalUsers: updatedUsers.length,
        activeSubscriptions,
        freeTrialUsers,
        revenueEstimate: revenueEstimate.toFixed(2)
      });
      
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users and subscriptions</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FaUsers className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FaUserShield className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Subscriptions</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeSubscriptions}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FaChartLine className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Free Trial Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.freeTrialUsers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FaMoneyBillWave className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">${stats.revenueEstimate}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search users by name or email"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        
        {/* Users Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => {
                  // Calculate subscription status
                  let status = "Inactive";
                  let statusColor = "bg-gray-100 text-gray-800";
                  
                  if (user.subscription?.active) {
                    const endDate = new Date(user.subscription.endDate);
                    const now = new Date();
                    
                    if (endDate > now) {
                      if (user.subscription.plan === 'free-trial') {
                        status = "Trial";
                        statusColor = "bg-blue-100 text-blue-800";
                      } else {
                        status = "Active";
                        statusColor = "bg-green-100 text-green-800";
                      }
                    } else {
                      status = "Expired";
                      statusColor = "bg-red-100 text-red-800";
                    }
                  }
                  
                  return (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 font-medium">
                              {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              Joined: {new Date(user.createdAt?.seconds * 1000).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {user.subscription?.plan ? (
                            <span className="capitalize">{user.subscription.plan.replace('-', ' ')}</span>
                          ) : (
                            "No plan"
                          )}
                        </div>
                        {user.subscription?.endDate && (
                          <div className="text-sm text-gray-500">
                            Expires: {new Date(user.subscription.endDate).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                          {status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <select 
                            className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            onChange={(e) => updateUserSubscription(user.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Change Plan</option>
                            <option value="free-trial">Free Trial</option>
                            <option value="premium">Premium</option>
                            <option value="platinum">Platinum</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
