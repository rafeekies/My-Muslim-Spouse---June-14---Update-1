import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700">
                At My Muslim Spouse, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="text-gray-700 mt-2">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-700">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> This includes information that can identify you as an individual, such as your name, email address, telephone number, date of birth, gender, location, and profile pictures.
                </li>
                <li>
                  <strong>Profile Information:</strong> Information you provide in your matrimonial profile, including but not limited to your religious practices, education, occupation, family background, interests, and preferences regarding a potential spouse.
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, chat logs, and other communications between you and other users on our platform, as well as communications between you and our customer service team.
                </li>
                <li>
                  <strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, products, and services, including your browsing patterns, search queries, page views, and features you interact with.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Collect Your Information</h2>
              <p className="text-gray-700">
                We collect information through:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Direct interactions when you create an account, fill out your profile, or communicate with other users</li>
                <li>Automated technologies or interactions, including cookies and similar tracking technologies</li>
                <li>Third parties or publicly available sources, such as identity verification services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How We Use Your Information</h2>
              <p className="text-gray-700">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>To create and manage your account</li>
                <li>To provide and maintain our services</li>
                <li>To match you with potential spouses based on your preferences and criteria</li>
                <li>To facilitate communication between users</li>
                <li>To verify your identity and prevent fraud</li>
                <li>To improve our website, products, and services</li>
                <li>To provide customer support</li>
                <li>To send you notifications, updates, and marketing communications (if you have opted in)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Disclosure of Your Information</h2>
              <p className="text-gray-700">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Other users of our platform in accordance with your privacy settings</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisers including lawyers, bankers, auditors, and insurers</li>
                <li>Government bodies and law enforcement agencies, in compliance with applicable laws</li>
                <li>Potential buyers in the event of a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-gray-700 mt-2">
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
              <p className="text-gray-700">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular backups</li>
                <li>Staff training on data protection</li>
              </ul>
              <p className="text-gray-700 mt-2">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Data Protection Rights</h2>
              <p className="text-gray-700">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate personal data</li>
                <li>The right to erasure (the "right to be forgotten")</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
              <p className="text-gray-700 mt-2">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p className="text-gray-700">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal data from a child under 18 without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
