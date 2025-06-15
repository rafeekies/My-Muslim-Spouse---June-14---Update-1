import React from 'react';
import { FaQuran, FaSearch, FaBookOpen, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuranReferences = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Quranic References on Marriage & Family</h1>
          <p className="text-xl max-w-3xl mx-auto text-on-dark">
            Exploring divine guidance from the Holy Quran on marriage, family relationships, and spousal rights.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Divine Guidance for Family Life</h2>
              <p className="text-gray-700 mb-4">
                The Holy Quran, as the divine revelation from Allah (SWT), provides comprehensive guidance on all aspects of human life, including marriage and family relationships. These teachings establish the foundation for a harmonious family structure based on love, mercy, and mutual respect.
              </p>
              <p className="text-gray-700 mb-4">
                The Quranic verses on marriage and family emphasize the sacred nature of the marital bond, the rights and responsibilities of spouses, and the importance of maintaining family ties. These divine instructions serve as a timeless guide for Muslims seeking to establish and maintain healthy family relationships.
              </p>
              <p className="text-gray-700">
                On this page, we have compiled key Quranic verses related to marriage and family, organized by topic, to help you understand and apply these teachings in your life.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <FaQuran className="text-primary-600 text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Why Study Quranic Guidance?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    To understand Allah's divine wisdom regarding marriage and family
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    To establish marriages and families based on Islamic principles
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    To learn about rights and responsibilities within family relationships
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    To resolve family conflicts according to divine guidance
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <p className="text-gray-700">
                    To raise children with proper Islamic values
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quranic Verses by Topic */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Quranic Verses on Marriage & Family</h2>
          
          {/* Purpose of Marriage */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaHeart className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">Purpose of Marriage</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And among His Signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your (hearts): verily in that are Signs for those who reflect."
                </p>
                <p className="text-right font-semibold">— Surah Ar-Rum (30:21)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "It is He who created you from a single soul, and made from it its mate, that he might dwell with her (in love)."
                </p>
                <p className="text-right font-semibold">— Surah Al-A'raf (7:189)</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Insights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Marriage provides tranquility (sakeenah) for both spouses</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Allah places love (mawaddah) and mercy (rahmah) between spouses</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>The marital relationship is a sign of Allah's wisdom and power</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Spouses are created as companions for one another</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Rights and Responsibilities */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaBookOpen className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">Rights and Responsibilities</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And they (women) have rights similar to those (of men) over them in kindness, and men are a degree above them. Allah is Mighty, Wise."
                </p>
                <p className="text-right font-semibold">— Surah Al-Baqarah (2:228)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "Men are the protectors and maintainers of women, because Allah has given the one more (strength) than the other, and because they support them from their means. Therefore the righteous women are devoutly obedient, and guard in (the husband's) absence what Allah would have them guard."
                </p>
                <p className="text-right font-semibold">— Surah An-Nisa (4:34)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "O you who believe! You are forbidden to inherit women against their will. Nor should you treat them with harshness, that you may take away part of the dower you have given them, except where they have been guilty of open lewdness; on the contrary live with them on a footing of kindness and equity."
                </p>
                <p className="text-right font-semibold">— Surah An-Nisa (4:19)</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Insights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Both spouses have rights over each other</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Men have responsibilities as protectors and providers</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Women have responsibilities to guard what Allah has entrusted them with</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Spouses should live together with kindness and equity</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Harsh treatment of women is forbidden</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Parent-Child Relationship */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaSearch className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">Parent-Child Relationship</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And your Lord has decreed that you worship none but Him, and that you be kind to parents. Whether one or both of them attain old age in your life, say not to them a word of contempt, nor repel them, but address them in terms of honor."
                </p>
                <p className="text-right font-semibold">— Surah Al-Isra (17:23)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And We have enjoined on man (to be good) to his parents: in travail upon travail did his mother bear him, and in years twain was his weaning: (hear the command), 'Show gratitude to Me and to thy parents: to Me is (thy final) Goal.'"
                </p>
                <p className="text-right font-semibold">— Surah Luqman (31:14)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "O you who believe! Ward off from yourselves and your families a Fire (Hell) whose fuel is men and stones, over which are (appointed) angels stern (and) severe, who disobey not, (from executing) the Commands they receive from Allah, but do that which they are commanded."
                </p>
                <p className="text-right font-semibold">— Surah At-Tahrim (66:6)</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Insights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Being kind to parents is commanded alongside worshipping Allah</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Children should speak to parents with respect and honor</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Gratitude to parents is emphasized, especially to mothers for their sacrifice</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Parents have a responsibility to protect their families from Hellfire</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Religious education and guidance of children is a parental duty</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Family Ties */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaHeart className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">Family Ties</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "Worship Allah and join none with Him in worship, and do good to parents, kinsfolk, orphans, the poor, the neighbor who is near of kin, the neighbor who is a stranger, the companion by your side, the wayfarer (you meet), and those (slaves) whom your right hands possess."
                </p>
                <p className="text-right font-semibold">— Surah An-Nisa (4:36)</p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700 mb-2">
                  "And give to the kindred his due and to the poor and to the wayfarer. But spend not wastefully (your wealth) in the manner of a spendthrift."
                </p>
                <p className="text-right font-semibold">— Surah Al-Isra (17:26)</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Insights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Maintaining good relations with relatives is a divine command</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Kindness to relatives is mentioned alongside worship of Allah</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Financial support to relatives in need is encouraged</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <p>Family ties extend beyond the immediate family to include all relatives</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Find Your Muslim Spouse</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join our platform to find a compatible spouse who understands and values Quranic teachings on marriage and family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Register Now
            </Link>
            <Link to="/islamic-marriage" className="border border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-medium text-lg">
              Learn About Islamic Marriage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuranReferences;
