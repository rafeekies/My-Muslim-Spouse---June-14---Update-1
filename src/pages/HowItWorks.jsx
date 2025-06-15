import React from 'react';
import { FaSearch, FaComments, FaUserCheck, FaHeart, FaRing } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description: "Sign up and create a detailed profile that highlights your values, interests, and what you're looking for in a spouse.",
      icon: <FaUserCheck className="text-4xl text-primary-600 mb-4" />
    },
    {
      id: 2,
      title: "Browse Compatible Matches",
      description: "Our Islamic-values based algorithm suggests profiles that match your preferences and requirements.",
      icon: <FaSearch className="text-4xl text-primary-600 mb-4" />
    },
    {
      id: 3,
      title: "Connect Respectfully",
      description: "Initiate conversations through our messaging system that maintains Islamic etiquette and privacy.",
      icon: <FaComments className="text-4xl text-primary-600 mb-4" />
    },
    {
      id: 4,
      title: "Involve Family",
      description: "When ready, involve family members in the process as recommended in Islamic tradition.",
      icon: <FaHeart className="text-4xl text-primary-600 mb-4" />
    },
    {
      id: 5,
      title: "Begin Your Journey Together",
      description: "Take the next steps toward marriage with confidence, knowing you've found a compatible match.",
      icon: <FaRing className="text-4xl text-primary-600 mb-4" />
    }
  ];

  const features = [
    {
      title: "Privacy Controls",
      description: "Control who sees your profile and information with our advanced privacy settings."
    },
    {
      title: "Verified Profiles",
      description: "All profiles undergo verification to ensure authenticity and seriousness."
    },
    {
      title: "Islamic Guidelines",
      description: "Our platform is designed to follow Islamic principles throughout the matchmaking process."
    },
    {
      title: "Family Involvement",
      description: "Special features to include family members in the process when appropriate."
    },
    {
      title: "Compatibility Matching",
      description: "Our algorithm considers religious values, life goals, and personal preferences."
    },
    {
      title: "Community Support",
      description: "Access to resources, articles, and community support throughout your journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">How My Muslim Spouse Works</h1>
            <p className="text-xl opacity-90 text-on-dark">
              Finding your spouse through a halal, respectful, and effective process
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The Journey to Finding Your Spouse</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our process is designed to be respectful, private, and aligned with Islamic values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-md p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </div>
                {step.icon}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Designed with Islamic values and your privacy in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-lg p-8 border-l-4 border-primary-600 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Our Commitment</h3>
            <p className="text-gray-700 italic text-lg">
              "At My Muslim Spouse, we're committed to creating a safe, respectful environment where Muslims can find compatible partners for marriage according to Islamic principles. Our platform is designed to honor traditional values while utilizing modern technology to facilitate meaningful connections."
            </p>
            <div className="mt-4 font-semibold text-gray-900">
              - The My Muslim Spouse Team
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join thousands of Muslims who have found their spouse through our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg">
              Create Your Profile
            </a>
            <a href="/success-stories" className="btn border-2 border-white text-white hover:bg-primary-600 px-8 py-3 rounded-md font-semibold text-lg">
              Read Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
