import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaBookOpen, FaSearch } from 'react-icons/fa';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock articles data
  const articles = [
    {
      id: 1,
      title: "The Islamic Perspective on Finding a Spouse",
      excerpt: "Explore the Quranic guidance and Prophetic traditions on seeking a compatible partner for marriage.",
      category: "Islamic Guidance",
      date: "March 15, 2023",
      author: "Sheikh Abdullah Rahman",
      image: "https://images.pexels.com/photos/8108137/pexels-photo-8108137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Preparing for Marriage: A Guide for Muslim Youth",
      excerpt: "Practical advice for young Muslims on spiritual, emotional, and financial preparation for marriage.",
      category: "Marriage Preparation",
      date: "April 2, 2023",
      author: "Dr. Aisha Khan",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "The Role of Parents in the Muslim Marriage Process",
      excerpt: "Understanding the balance between parental involvement and personal choice in Islamic marriages.",
      category: "Family",
      date: "May 10, 2023",
      author: "Imam Yusuf Ali",
      image: "https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Communication Skills for a Successful Muslim Marriage",
      excerpt: "Learn effective communication techniques that align with Islamic principles for a harmonious relationship.",
      category: "Relationship Skills",
      date: "June 18, 2023",
      author: "Ustadha Fatima Hassan",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "9 min read"
    },
    {
      id: 5,
      title: "Understanding the Concept of Mahr in Islam",
      excerpt: "A comprehensive guide to the Islamic dowry, its significance, and practical considerations.",
      category: "Islamic Guidance",
      date: "July 5, 2023",
      author: "Sheikh Muhammad Ibrahim",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Navigating Cultural Differences in Muslim Marriages",
      excerpt: "Strategies for couples from different cultural backgrounds to build a strong marriage based on shared Islamic values.",
      category: "Relationship Skills",
      date: "August 22, 2023",
      author: "Dr. Khalid Mahmood",
      image: "https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "11 min read"
    }
  ];
  
  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => 
    (activeCategory === 'All' || article.category === activeCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
     article.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Get unique categories
  const categories = ['All', ...new Set(articles.map(article => article.category))];
  
  // Featured article (first one)
  const featuredArticle = articles[0];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Islamic Marriage Articles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guidance and insights on marriage in Islam from scholars and experts
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search articles by title, content, or author"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                className="h-64 md:h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span className="mx-2">•</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {featuredArticle.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <FaUser className="mr-1" size={12} />
                <span>{featuredArticle.author}</span>
                <span className="mx-2">•</span>
                <FaCalendarAlt className="mr-1" size={12} />
                <span>{featuredArticle.date}</span>
                <span className="mx-2">•</span>
                <FaBookOpen className="mr-1" size={12} />
                <span>{featuredArticle.readTime}</span>
              </div>
              <Link 
                to={`/articles/${featuredArticle.id}`} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>
        
        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="mx-2">•</span>
                    <FaBookOpen className="mr-1" size={12} />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link to={`/articles/${article.id}`} className="hover:text-primary-600">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUser className="mr-1" size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <FaCalendarAlt className="mr-1 inline-block" size={12} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              We couldn't find any articles matching your search criteria. Please try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              View All Articles
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredArticles.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary-50 text-sm font-medium text-primary-600">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                8
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                9
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        )}
        
        {/* Subscribe Section */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8 border border-primary-100">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe to Our Articles</h3>
              <p className="text-gray-600">
                Get the latest Islamic guidance on marriage and relationships delivered to your inbox.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  className="block w-full border-gray-300 rounded-l-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Your email address"
                />
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
