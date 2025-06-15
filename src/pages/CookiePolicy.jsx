import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
            <p className="text-gray-600 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700">
                This Cookie Policy explains how My Muslim Spouse ("we", "us", or "our") uses cookies and similar technologies on our website. This policy should be read alongside our Privacy Policy, which explains how we use personal information.
              </p>
              <p className="text-gray-700 mt-2">
                By continuing to browse or use our website, you agree to our use of cookies as described in this Cookie Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="text-gray-700 mt-2">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
              <p className="text-gray-700">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These cookies allow us to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.
                </li>
                <li>
                  <strong>Performance/Analytics Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages visitors go to most often and if they receive error messages. They help us improve how our website works and measure the effectiveness of our advertising.
                </li>
                <li>
                  <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </li>
                <li>
                  <strong>Social Media Cookies:</strong> These cookies are set by social media services that we have added to the site to enable you to share our content with your friends and networks. They can track your browser across other sites and build a profile of your interests.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Specific Cookies We Use</h2>
              <p className="text-gray-700">
                Below is a detailed list of the cookies we use on our website:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">auth_token</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Essential</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Used to keep you logged in during a session</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Session</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">remember_user</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Functionality</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Remembers your login details for future visits</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_ga</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Analytics</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Used by Google Analytics to distinguish users</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_gid</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Analytics</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Used by Google Analytics to distinguish users</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_fbp</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Advertising</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Used by Facebook to deliver advertisements</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Cookies</h2>
              <p className="text-gray-700">
                Some cookies are placed by third parties on our website. These third parties may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Google Analytics (for website analytics)</li>
                <li>Facebook (for social sharing and advertising)</li>
                <li>Payment processors (for processing transactions)</li>
                <li>Customer service providers (for chat support)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                These third parties may use cookies, web beacons, and similar technologies to collect or receive information from our website and elsewhere on the internet and use that information to provide measurement services and target ads.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Managing Cookies</h2>
              <p className="text-gray-700">
                Most web browsers allow you to manage your cookie preferences. You can:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Delete cookies from your device</li>
                <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
                <li>Set your browser to notify you when you receive a cookie</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
              </p>
              <p className="text-gray-700 mt-2">
                To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.allaboutcookies.org</a>.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-700 mt-2">
                You are advised to review this Cookie Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@mymuslimspouse.com<br />
                Address: 123 Islamic Center Drive, Suite 456, Anytown, USA 12345
              </p>
            </section>
            
            <div className="pt-4 border-t">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
