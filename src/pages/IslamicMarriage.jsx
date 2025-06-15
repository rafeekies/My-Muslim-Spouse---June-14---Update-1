import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHandshake, FaBalanceScale, FaUsers } from 'react-icons/fa';

const IslamicMarriage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Marriage in Islam</h1>
            <p className="text-xl text-on-dark">
              Understanding the principles, rights, and responsibilities of marriage in Islam.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Islamic Marriage?</h2>
              <p className="text-gray-700 mb-4">
                Marriage (Nikah) in Islam is a sacred covenant that establishes a legal relationship and spiritual bond between a man and a woman. It is considered an act of worship ('ibadah) and is strongly encouraged in Islamic teachings.
              </p>
              <p className="text-gray-700 mb-4">
                The Prophet Muhammad (peace be upon him) said: "Marriage is part of my sunnah. Whoever does not follow my sunnah is not from me." This emphasizes the importance of marriage in Islamic tradition.
              </p>
              <p className="text-gray-700">
                Islamic marriage is based on mutual love, mercy, and compassion. It provides a framework for emotional and physical fulfillment while establishing a foundation for building a family and raising children according to Islamic principles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Quranic Guidance</h3>
              <div className="border-l-4 border-primary-500 pl-4 py-2 mb-4">
                <p className="italic text-gray-700 mb-2">
                  "And among His Signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your (hearts): verily in that are Signs for those who reflect."
                </p>
                <p className="text-right font-semibold">— Quran 30:21</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "They (your wives) are your garment and you are a garment for them."
                </p>
                <p className="text-right font-semibold">— Quran 2:187</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Elements Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Essential Elements of Islamic Marriage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaHandshake className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Mutual Consent</h3>
              </div>
              <p className="text-gray-700">
                Both parties must freely consent to the marriage without coercion. The bride's explicit consent is essential for a valid nikah.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaHeart className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Mahr (Dowry)</h3>
              </div>
              <p className="text-gray-700">
                A gift from the groom to the bride, which becomes her exclusive property as a sign of respect and honor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaBalanceScale className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Nikah Contract</h3>
              </div>
              <p className="text-gray-700">
                A formal, binding contract that outlines the rights and responsibilities of both spouses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaUsers className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Witnesses</h3>
              </div>
              <p className="text-gray-700">
                The presence of witnesses during the nikah ceremony to ensure public recognition of the marriage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rights and Responsibilities Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Rights and Responsibilities</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">Husband's Responsibilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Financial Provision:</span> Providing for the wife's basic needs including food, clothing, and shelter.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Kind Treatment:</span> Treating the wife with kindness, respect, and compassion.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Protection:</span> Protecting the wife and family from harm.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Emotional Support:</span> Providing emotional and psychological support.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Religious Guidance:</span> Leading the family in religious matters and ensuring Islamic education.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">Wife's Responsibilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Obedience to Allah:</span> Following Islamic principles and encouraging the family to do the same.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Respect:</span> Showing respect to the husband and maintaining his dignity.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Home Management:</span> Managing the household affairs efficiently.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Child Rearing:</span> Nurturing and raising children with Islamic values.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Emotional Support:</span> Providing emotional support and companionship to the husband.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
            <h3 className="text-xl font-semibold mb-4">Mutual Rights and Responsibilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Love and Mercy:</span> Showing love, compassion, and mercy toward each other.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Trust and Honesty:</span> Maintaining trust and being honest with each other.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Communication:</span> Open and respectful communication to resolve conflicts.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Privacy:</span> Maintaining the privacy and confidentiality of the marital relationship.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Support:</span> Supporting each other in worldly and religious affairs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Find Your Muslim Spouse</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join our platform to find a compatible spouse who understands and values Islamic marriage principles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Register Now
            </Link>
            <Link to="/quran-references" className="border border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-medium text-lg">
              Explore Quranic References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IslamicMarriage;
