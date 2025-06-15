import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaComments, FaUserFriends, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-on-dark-heading">Find Your Muslim Life Partner</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join thousands of Muslims who have found their spouse through our Islamic matrimonial service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Register Now
            </Link>
            <Link to="/about" className="border border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-medium text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Muslim Spouse?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Islamic Values</h3>
              <p className="text-gray-600">
                Our platform is built on Islamic principles, ensuring a halal way to find your spouse.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserFriends className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
              <p className="text-gray-600">
                All profiles are manually verified to ensure authenticity and seriousness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy Focused</h3>
              <p className="text-gray-600">
                Your privacy is our priority. Control who sees your profile and information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and create your detailed profile with your preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Matches</h3>
              <p className="text-gray-600">
                Explore potential matches based on your criteria and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Express interest and connect with potential matches through our platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Meet</h3>
              <p className="text-gray-600">
                Take the next step and meet with the approval of your families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ahmed & Fatima</h4>
                  <p className="text-gray-500 text-sm">Married for 2 years</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Alhamdulillah, we found each other through My Muslim Spouse. The platform made it easy to connect while respecting Islamic values."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mohammed & Aisha</h4>
                  <p className="text-gray-500 text-sm">Married for 1 year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We were both looking for someone who shared our religious values. My Muslim Spouse helped us find exactly what we were looking for."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">Y</span>
                </div>
                <div>
                  <h4 className="font-semibold">Yusuf & Maryam</h4>
                  <p className="text-gray-500 text-sm">Married for 3 years</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The verification process gave us confidence that we were talking to genuine people. We're so grateful to have found each other here."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/success-stories" className="text-primary-600 hover:text-primary-700 font-medium">
              Read More Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Ready to Find Your Muslim Spouse?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join our community of Muslims seeking marriage based on Islamic values.
          </p>
          <Link to="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg inline-block">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
