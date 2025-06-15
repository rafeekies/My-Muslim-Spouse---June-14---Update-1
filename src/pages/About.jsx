import React from 'react';
import { FaHeart, FaUsers, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">About My Muslim Spouse</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A matrimonial service designed with Islamic values at its core, helping Muslims find compatible spouses while adhering to Islamic principles.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At My Muslim Spouse, our mission is to provide a safe, respectful, and Islamic-oriented platform for Muslims worldwide to find their life partners. We understand the importance of marriage in Islam and the challenges Muslims face in finding suitable spouses in today's world.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to upholding Islamic values throughout the matchmaking process, ensuring that Muslims can find compatible partners while adhering to religious principles and cultural sensitivities.
              </p>
              <p className="text-gray-700">
                Our platform is designed to facilitate meaningful connections that lead to successful Islamic marriages, with the ultimate goal of helping Muslims build strong, loving families based on mutual respect, shared faith, and common values.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaHeart className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Islamic Principles</h4>
                    <p className="text-gray-600">All our services adhere to Islamic teachings and values</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Privacy & Security</h4>
                    <p className="text-gray-600">Protecting our users' information and providing a safe environment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaUsers className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community</h4>
                    <p className="text-gray-600">Building a supportive community of like-minded Muslims</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaHandshake className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Integrity</h4>
                    <p className="text-gray-600">Honesty and transparency in all our operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              My Muslim Spouse was founded in 2018 by a group of Muslim professionals who recognized the challenges faced by Muslims in finding suitable marriage partners while adhering to Islamic principles in the modern world.
            </p>
            <p className="text-gray-700 mb-4">
              Having experienced these challenges firsthand, our founders were determined to create a platform that would bridge the gap between traditional matchmaking and modern technology, all while maintaining Islamic values at its core.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small community has now grown into one of the most trusted Islamic matrimonial services, with thousands of successful marriages worldwide. Our team consists of dedicated Muslims from diverse backgrounds, all committed to our mission of facilitating halal marriages.
            </p>
            <p className="text-gray-700">
              Today, we continue to innovate and improve our platform, guided by user feedback and Islamic principles, to provide the best possible service to Muslims seeking marriage.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="bg-primary-100 w-full h-full flex items-center justify-center">
                  <span className="text-primary-600 text-4xl font-bold">A</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Ahmed Rahman</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="bg-primary-100 w-full h-full flex items-center justify-center">
                  <span className="text-primary-600 text-4xl font-bold">F</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Fatima Khan</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="bg-primary-100 w-full h-full flex items-center justify-center">
                  <span className="text-primary-600 text-4xl font-bold">Y</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Yusuf Ali</h3>
              <p className="text-gray-600">Head of Technology</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="bg-primary-100 w-full h-full flex items-center justify-center">
                  <span className="text-primary-600 text-4xl font-bold">A</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Aisha Patel</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a growing community of Muslims seeking marriage based on Islamic values.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Register Now
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-medium text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
