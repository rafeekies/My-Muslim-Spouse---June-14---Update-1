import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaCreditCard, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Refund Policy</h1>
            <p className="text-xl text-on-dark">
              Understanding our subscription refund terms and conditions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Refund Policy</h2>
            <p className="text-gray-700 mb-6">
              At My Muslim Spouse, we strive to provide the highest quality service to help Muslims find compatible spouses according to Islamic principles. We understand that circumstances may change, and we have established the following refund policy to ensure fairness and transparency.
            </p>

            <div className="space-y-8 mt-8">
              {/* 14-Day Free Trial */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaCalendarAlt className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">14-Day Free Trial</h3>
                  <p className="text-gray-700">
                    All new subscriptions begin with a 14-day free trial. During this period, you can explore our platform and its features without any charge. If you decide to cancel during the trial period, you will not be charged.
                  </p>
                </div>
              </div>

              {/* Subscription Refunds */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaMoneyBillWave className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Subscription Refunds</h3>
                  <p className="text-gray-700 mb-3">
                    If you are not satisfied with our service after the free trial period has ended and you have been charged, you may be eligible for a refund under the following conditions:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Refund requests must be submitted within 7 days of the initial charge after the free trial.</li>
                    <li>First-time subscribers may receive a full refund if requested within this 7-day window.</li>
                    <li>Recurring subscription charges are generally non-refundable once the 7-day window has passed.</li>
                    <li>Technical issues that severely impact service usage may qualify for partial or full refunds at our discretion.</li>
                  </ul>
                </div>
              </div>

              {/* How to Request a Refund */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaCreditCard className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">How to Request a Refund</h3>
                  <p className="text-gray-700 mb-3">
                    To request a refund, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                    <li>Log in to your account and go to the "Settings" page.</li>
                    <li>Select "Billing" from the menu options.</li>
                    <li>Click on "Request Refund" and complete the form explaining your reason for the refund request.</li>
                    <li>Alternatively, you can contact our support team directly at support@mymuslimspouse.com.</li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    Our team will review your request and respond within 2-3 business days. If approved, refunds will be processed to the original payment method and may take 5-10 business days to appear on your statement.
                  </p>
                </div>
              </div>

              {/* Special Circumstances */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaQuestionCircle className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Special Circumstances</h3>
                  <p className="text-gray-700 mb-3">
                    We understand that special circumstances may arise. The following situations may be eligible for consideration outside our standard refund policy:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Serious illness or medical emergency (documentation may be required)</li>
                    <li>Service unavailability due to technical issues on our end</li>
                    <li>Accidental subscription renewal (if reported within 3 days of charge)</li>
                    <li>Other exceptional circumstances evaluated on a case-by-case basis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
            <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p>Refunds do not include any processing fees charged by payment providers.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p>Promotional or discounted subscriptions may have different refund terms as specified at the time of purchase.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p>We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p>Abuse of our refund policy may result in the termination of your account.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-700 mb-8">
            If you have any questions about our refund policy or need assistance with a refund request, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium">
              Contact Support
            </Link>
            <Link to="/faqs" className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md font-medium">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
