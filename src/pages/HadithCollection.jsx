import React, { useState } from 'react';
import { FaSearch, FaBook, FaHeart, FaBookmark, FaShare } from 'react-icons/fa';

const HadithCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Hadiths' },
    { id: 'marriage', name: 'Marriage' },
    { id: 'family', name: 'Family Relations' },
    { id: 'spouse', name: 'Spousal Rights' },
    { id: 'children', name: 'Children' },
    { id: 'parents', name: 'Parents' }
  ];
  
  const hadiths = [
    {
      id: 1,
      text: "The most perfect of believers in faith are those who are the best in conduct, and the best of you are those who are the best to their wives.",
      source: "Tirmidhi",
      category: "marriage",
      narrator: "Abu Hurairah (RA)"
    },
    {
      id: 2,
      text: "Marriage is my sunnah. Whosoever keeps away from it is not from me.",
      source: "Ibn Majah",
      category: "marriage",
      narrator: "Anas ibn Malik (RA)"
    },
    {
      id: 3,
      text: "When a man marries, he has fulfilled half of his religion, so let him fear Allah regarding the remaining half.",
      source: "Bayhaqi",
      category: "marriage",
      narrator: "Anas ibn Malik (RA)"
    },
    {
      id: 4,
      text: "The best of you is the one who is best to his family, and I am the best of you to my family.",
      source: "Tirmidhi",
      category: "family",
      narrator: "Abdullah ibn Abbas (RA)"
    },
    {
      id: 5,
      text: "Paradise lies under the feet of mothers.",
      source: "Ahmad, Nasai",
      category: "parents",
      narrator: "Abdullah ibn Abbas (RA)"
    },
    {
      id: 6,
      text: "A father gives his child nothing better than a good education.",
      source: "Tirmidhi",
      category: "children",
      narrator: "Ayyub ibn Musa (RA)"
    },
    {
      id: 7,
      text: "Whoever does not show mercy to our young ones and respect to our old ones is not one of us.",
      source: "Tirmidhi",
      category: "family",
      narrator: "Abdullah ibn Amr (RA)"
    },
    {
      id: 8,
      text: "The most beloved of deeds to Allah is prayer at its prescribed time, then kindness to parents, then Jihad in the cause of Allah.",
      source: "Bukhari, Muslim",
      category: "parents",
      narrator: "Abdullah ibn Masud (RA)"
    },
    {
      id: 9,
      text: "The best of you are those who are best to their wives, and I am the best of you to my wives.",
      source: "Ibn Majah",
      category: "spouse",
      narrator: "Abdullah ibn Amr (RA)"
    },
    {
      id: 10,
      text: "Fear Allah concerning women! Verily you have taken them on the security of Allah, and intercourse with them has been made lawful unto you by the words of Allah.",
      source: "Muslim",
      category: "spouse",
      narrator: "Jabir ibn Abdullah (RA)"
    },
    {
      id: 11,
      text: "Whoever Allah has given two daughters and he treats them kindly, they will be a reason for him to enter Paradise.",
      source: "Bukhari",
      category: "children",
      narrator: "Aisha (RA)"
    },
    {
      id: 12,
      text: "No father has given a greater gift to his children than good moral training.",
      source: "Tirmidhi",
      category: "children",
      narrator: "Sa'id ibn Al-As (RA)"
    }
  ];
  
  const filteredHadiths = hadiths.filter(hadith => {
    // Filter by category
    if (activeCategory !== 'all' && hadith.category !== activeCategory) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !hadith.text.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Hadith Collection on Marriage & Family</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Authentic sayings and teachings of Prophet Muhammad (peace be upon him) on marriage, family relations, and parenting.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search hadiths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <label className="block text-gray-700 font-medium mb-2">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        activeCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hadith Collection */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">
            {activeCategory === 'all' ? 'All Hadiths' : categories.find(c => c.id === activeCategory).name}
          </h2>
          
          {filteredHadiths.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaBook className="text-gray-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Hadiths Found</h3>
              <p className="text-gray-600">
                No hadiths match your current search criteria. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredHadiths.map(hadith => (
                <div key={hadith.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {categories.find(c => c.id === hadith.category).name}
                    </span>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-primary-600">
                        <FaBookmark />
                      </button>
                      <button className="text-gray-400 hover:text-primary-600">
                        <FaShare />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-800 text-lg italic leading-relaxed">
                      "{hadith.text}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Source:</span> {hadith.source}
                    </div>
                    <div>
                      <span className="font-medium">Narrator:</span> {hadith.narrator}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Understanding Hadith */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Understanding Hadith</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaBook className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">What is Hadith?</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Hadith refers to the record of the words, actions, and silent approvals of Prophet Muhammad (peace be upon him). These narrations were meticulously collected, verified, and compiled by scholars after the Prophet's death.
              </p>
              
              <p className="text-gray-700">
                Hadiths serve as the second most important source of Islamic law and guidance after the Holy Quran. They provide practical examples of how to implement Quranic teachings in daily life, including matters related to marriage and family.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaHeart className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Importance in Family Matters</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                The Prophet Muhammad (peace be upon him) was an exemplary husband and father. His teachings on family matters provide practical guidance on how to establish and maintain healthy family relationships based on love, respect, and compassion.
              </p>
              
              <p className="text-gray-700">
                By studying and implementing these hadiths in our lives, we can build strong, harmonious families that embody Islamic values and principles. The Prophet's example shows us how to fulfill our roles as spouses, parents, and children in a way that pleases Allah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Muslim Spouse</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our platform to find a compatible spouse who values the Prophetic teachings on marriage and family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Register Now
            </a>
            <a href="/islamic-marriage" className="border border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-medium text-lg">
              Learn About Islamic Marriage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HadithCollection;
