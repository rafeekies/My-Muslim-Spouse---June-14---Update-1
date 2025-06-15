import React from 'react';
import { FaHome, FaHeart, FaUsers, FaQuran, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FamilyInIslam = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Family in Islam</h1>
            <p className="text-xl text-on-dark">
              Understanding the importance and values of family in Islamic teachings.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Foundation of Society</h2>
              <p className="text-gray-700 mb-4">
                In Islam, the family is considered the fundamental unit of society. It is the nucleus from which communities and civilizations grow. The strength of a society is directly related to the strength of its families.
              </p>
              <p className="text-gray-700 mb-4">
                Islamic teachings place great emphasis on family bonds, mutual respect, and the fulfillment of rights and responsibilities within the family structure. The family unit is seen as a divine blessing and a means for spiritual growth and emotional well-being.
              </p>
              <p className="text-gray-700">
                The Prophet Muhammad (peace be upon him) exemplified the ideal family man, showing kindness, compassion, and justice in his roles as a husband and father. His example serves as a guide for Muslims in building strong, loving families based on Islamic principles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <FaHome className="text-primary-600 text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Quranic Guidance</h3>
              <div className="border-l-4 border-primary-500 pl-4 py-2 mb-4">
                <p className="italic text-gray-700 mb-2">
                  "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
                </p>
                <p className="text-right font-semibold">— Quran 30:21</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And they (your wives) are a garment for you and you are a garment for them."
                </p>
                <p className="text-right font-semibold">— Quran 2:187</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Aspects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Aspects of Family in Islam</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marriage</h3>
              <p className="text-gray-700">
                The foundation of family in Islam begins with marriage, which is considered a sacred covenant and an act of worship. It establishes a legal relationship and spiritual bond between a man and a woman.
              </p>
              <Link to="/islamic-marriage" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spousal Rights</h3>
              <p className="text-gray-700">
                Islam outlines clear rights and responsibilities for both husbands and wives, emphasizing mutual respect, compassion, and cooperation in building a harmonious household.
              </p>
              <Link to="/spousal-rights" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChild className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parenting</h3>
              <p className="text-gray-700">
                Parents have a sacred duty to raise their children with love, provide for their physical and emotional needs, and instill in them Islamic values and good character.
              </p>
              <Link to="/islamic-parenting" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaQuran className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Extended Family</h3>
              <p className="text-gray-700">
                Islam places great importance on maintaining ties with extended family members, honoring parents and elders, and showing kindness to relatives.
              </p>
              <Link to="/family-ties" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hadith Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Prophetic Guidance on Family</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">On Marriage</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "When a man marries, he has fulfilled half of his religion, so let him fear Allah regarding the remaining half."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "The best of you are those who are best to their wives, and I am the best of you to my wives."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">On Parenting</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "No father has given a greater gift to his children than good moral training."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "Honor your children and perfect their manners."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">On Respecting Parents</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "Paradise lies at the feet of your mother."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "The pleasure of the Lord lies in the pleasure of the parent. The anger of the Lord lies in the anger of the parent."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">On Family Ties</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "Whoever wishes to have his provision expanded and his age extended, should maintain good relations with his family."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="italic text-gray-700 mb-2">
                    "The person who perfectly maintains the ties of kinship is not the one who does it because he gets recompensed by his relatives (for being kind and good to them), but the one who truly maintains the bonds of kinship is the one who persists in doing so even though the latter has severed the ties of kinship with him."
                  </p>
                  <p className="text-right font-semibold">— Prophet Muhammad (PBUH)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Start Your Family Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Find a spouse who shares your Islamic values and vision for building a strong family.
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

export default FamilyInIslam;
