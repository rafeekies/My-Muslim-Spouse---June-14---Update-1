import React from 'react';
import { FaCheck, FaTimes, FaCrown, FaSearch, FaEnvelope, FaEye, FaShieldAlt, FaUserFriends, FaHeadset } from 'react-icons/fa';

const Premium = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Get started with basic features",
      features: [
        { text: "Create a profile", included: true },
        { text: "Browse profiles", included: true },
        { text: "Limited search filters", included: true },
        { text: "Send up to 10 messages per month", included: true },
        { text: "View who liked your profile", included: false },
        { text: "Advanced search filters", included: false },
        { text: "Priority in search results", included: false },
        { text: "Unlimited messages", included: false },
        { text: "See who viewed your profile", included: false },
        { text: "Priority support", included: false }
      ],
      popular: false,
      buttonText: "Current Plan"
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "Everything you need for serious matchmaking",
      features: [
        { text: "Create a profile", included: true },
        { text: "Browse profiles", included: true },
        { text: "All search filters", included: true },
        { text: "Unlimited messages", included: true },
        { text: "View who liked your profile", included: true },
        { text: "Advanced search filters", included: true },
        { text: "Priority in search results", included: true },
        { text: "See who viewed your profile", included: true },
        { text: "Priority support", included: true },
        { text: "Profile verification badge", included: true }
      ],
      popular: true,
      buttonText: "Upgrade Now",
      discount: "Save 25% with annual plan"
    },
    {
      name: "Family",
      price: "$29.99",
      period: "per month",
      description: "For families helping in the search process",
      features: [
        { text: "All Premium features", included: true },
        { text: "Family member accounts (up to 3)", included: true },
        { text: "Collaborative profile management", included: true },
        { text: "Family chat for discussing matches", included: true },
        { text: "Wali communication channel", included: true },
        { text: "Background verification", included: true },
        { text: "Dedicated matchmaking consultant", included: true },
        { text: "Monthly matchmaking suggestions", included: true },
        { text: "Video meeting facilitation", included: true },
        { text: "Marriage contract guidance", included: true }
      ],
      popular: false,
      buttonText: "Upgrade Now",
      discount: "Save 20% with annual plan"
    }
  ];

  const benefits = [
    {
      icon: <FaSearch className="text-primary-600 text-2xl" />,
      title: "Advanced Search",
      description: "Find your perfect match with detailed search filters including religious practice, education, and family values."
    },
    {
      icon: <FaEnvelope className="text-primary-600 text-2xl" />,
      title: "Unlimited Communication",
      description: "Connect with as many potential matches as you want with unlimited messaging and chat features."
    },
    {
      icon: <FaEye className="text-primary-600 text-2xl" />,
      title: "Profile Visibility",
      description: "See who viewed and liked your profile, and enjoy increased visibility in search results."
    },
    {
      icon: <FaShieldAlt className="text-primary-600 text-2xl" />,
      title: "Enhanced Privacy",
      description: "Control who sees your information with advanced privacy settings and photo protection."
    },
    {
      icon: <FaUserFriends className="text-primary-600 text-2xl" />,
      title: "Family Involvement",
      description: "Include family members in your search with collaborative features that respect Islamic traditions."
    },
    {
      icon: <FaHeadset className="text-primary-600 text-2xl" />,
      title: "Priority Support",
      description: "Get personalized assistance from our dedicated support team whenever you need help."
    }
  ];

  const testimonials = [
    {
      quote: "The premium features helped me find my husband within two months. The advanced filters let me focus on what was truly important to me.",
      author: "Fatima S., Chicago",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As a wali for my sister, the Family plan was perfect. We could collaborate on finding the right match while maintaining Islamic values.",
      author: "Ahmed K., Houston",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FaCrown className="text-5xl mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Upgrade to Premium</h1>
            <p className="text-xl opacity-90 text-on-dark mb-8">
              Unlock powerful features to find your perfect match according to Islamic values
            </p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-on-dark font-medium">
                Try Premium free for 14 days. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Choose Your Plan</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Select the plan that best fits your needs on your journey to finding a spouse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${plan.popular ? 'border-primary-500 relative' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  
                  {plan.discount && (
                    <div className="mt-4 bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                      {plan.discount}
                    </div>
                  )}
                  
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          {feature.included ? (
                            <FaCheck className="h-5 w-5 text-green-500" />
                          ) : (
                            <FaTimes className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <p className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                          {feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button
                      className={`w-full px-4 py-3 rounded-md shadow-sm text-sm font-medium ${
                        plan.name === "Basic" 
                          ? 'bg-gray-100 text-gray-800 cursor-default'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center text-gray-600 text-sm">
            <p>All plans include a 14-day free trial. No credit card required to start.</p>
            <p className="mt-2">You can cancel your subscription at any time from your account settings.</p>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Premium Benefits</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover how our premium features can help you find your perfect match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Premium Members Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <div className="flex text-yellow-400">
                      <FaCrown />
                      <span className="text-xs ml-1 text-primary-600 font-medium">Premium Member</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I cancel my subscription at any time?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time from your account settings. Your premium features will remain active until the end of your billing period.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How does the 14-day free trial work?</h3>
                <p className="text-gray-600">You can try all premium features for 14 days without any charge. If you decide to continue, you'll be billed at the end of the trial period. If not, you can cancel anytime during the trial and won't be charged.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is my payment information secure?</h3>
                <p className="text-gray-600">Yes, we use industry-standard encryption and security measures to protect your payment information. We never store your full credit card details on our servers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join thousands of Muslims who have found their spouse through our premium features
          </p>
          <button className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg">
            Start Your 14-Day Free Trial
          </button>
          <p className="mt-4 text-sm opacity-80 text-on-dark">No credit card required to start</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
