import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaCheck, FaTimes, FaCrown, FaGem, FaRegClock } from 'react-icons/fa';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { currentUser, userProfile, updateUserSubscription } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'free-trial',
      name: 'Free Trial',
      price: '$0',
      duration: '14 days',
      icon: <FaRegClock className="h-8 w-8 text-blue-500" />,
      color: 'blue',
      features: [
        { text: 'Basic profile creation', included: true },
        { text: 'Browse up to 10 profiles per day', included: true },
        { text: 'Send up to 5 messages per day', included: true },
        { text: 'Limited search filters', included: true },
        { text: 'No advanced matching', included: false },
        { text: 'No profile highlighting', included: false },
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      duration: 'per month',
      icon: <FaCrown className="h-8 w-8 text-yellow-500" />,
      color: 'yellow',
      features: [
        { text: 'Full profile creation', included: true },
        { text: 'Unlimited profile browsing', included: true },
        { text: 'Send unlimited messages', included: true },
        { text: 'Advanced search filters', included: true },
        { text: 'Smart matching algorithm', included: true },
        { text: 'No profile highlighting', included: false },
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '$19.99',
      duration: 'per month',
      icon: <FaGem className="h-8 w-8 text-purple-500" />,
      color: 'purple',
      features: [
        { text: 'Full profile creation', included: true },
        { text: 'Unlimited profile browsing', included: true },
        { text: 'Send unlimited messages', included: true },
        { text: 'Advanced search filters', included: true },
        { text: 'Smart matching algorithm', included: true },
        { text: 'Profile highlighting', included: true },
      ]
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    
    try {
      setLoading(true);
      setError('');
      
      // In a real app, you would integrate with a payment processor here
      // For this demo, we'll just update the subscription in Firestore
      
      // Set subscription details based on plan
      let endDate = new Date();
      if (selectedPlan === 'free-trial') {
        endDate.setDate(endDate.getDate() + 14); // 14-day trial
      } else {
        endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription
      }
      
      const subscriptionData = {
        plan: selectedPlan,
        startDate: new Date().toISOString(),
        endDate: endDate.toISOString(),
        active: true
      };
      
      const success = await updateUserSubscription(currentUser.uid, subscriptionData);
      
      if (success) {
        setSuccess(`You have successfully subscribed to the ${plans.find(p => p.id === selectedPlan).name} plan!`);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError('There was a problem updating your subscription. Please try again.');
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setError('Failed to process your subscription. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Check if user is on free trial and calculate days remaining
  const isOnFreeTrial = userProfile?.subscription?.plan === 'free-trial';
  let daysRemaining = 0;
  
  if (isOnFreeTrial && userProfile?.subscription?.endDate) {
    const endDate = new Date(userProfile.subscription.endDate);
    const now = new Date();
    const diffTime = endDate - now;
    daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Subscription Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect match with our tailored subscription plans designed for Muslim singles
          </p>
          
          {isOnFreeTrial && daysRemaining > 0 && (
            <div className="mt-4 inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              You are currently on the Free Trial plan with {daysRemaining} days remaining
            </div>
          )}
        </div>
        
        {error && (
          <div className="max-w-md mx-auto mb-8 bg-red-50 text-red-700 p-4 rounded-md">
            {error}
          </div>
        )}
        
        {success && (
          <div className="max-w-md mx-auto mb-8 bg-green-50 text-green-700 p-4 rounded-md">
            {success}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 ${
                selectedPlan === plan.id ? `ring-4 ring-${plan.color}-400 scale-105` : 'hover:scale-105'
              }`}
            >
              <div className={`bg-${plan.color}-50 p-6 text-center`}>
                <div className="inline-block p-3 rounded-full bg-white mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">{plan.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <FaCheck className={`h-5 w-5 text-${plan.color}-500 flex-shrink-0 mr-2`} />
                      ) : (
                        <FaTimes className="h-5 w-5 text-gray-400 flex-shrink-0 mr-2" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-md font-medium text-white ${
                      selectedPlan === plan.id 
                        ? `bg-${plan.color}-600 hover:bg-${plan.color}-700` 
                        : 'bg-gray-600 hover:bg-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${plan.color}-500 transition-colors duration-200`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedPlan && (
          <div className="text-center">
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Subscribe Now'}
            </button>
          </div>
        )}
        
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription FAQs</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">How does the free trial work?</h4>
              <p className="text-gray-600 mt-1">
                Our 14-day free trial gives you access to basic features so you can explore our platform. 
                No credit card required to start your trial.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Can I cancel my subscription?</h4>
              <p className="text-gray-600 mt-1">
                Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">How do I upgrade my plan?</h4>
              <p className="text-gray-600 mt-1">
                You can upgrade your plan at any time by visiting this page and selecting a new plan. 
                The new benefits will be available immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
