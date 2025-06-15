import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Duas for Finding a Righteous Spouse",
      excerpt: "Discover powerful duas from the Quran and Sunnah that can help you in your journey to find a compatible spouse.",
      category: "Islamic Guidance",
      date: "April 10, 2023",
      author: "Imam Abdullah",
      image: "https://images.pexels.com/photos/8108137/pexels-photo-8108137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Dua", "Marriage", "Quran"]
    },
    {
      id: 2,
      title: "The Importance of Character in Choosing a Spouse",
      excerpt: "Learn why the Prophet Muhammad (PBUH) emphasized good character as the most important quality to look for in a potential spouse.",
      category: "Marriage Advice",
      date: "May 22, 2023",
      author: "Dr. Aisha Rahman",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Character", "Islamic Values", "Spouse Selection"]
    },
    {
      id: 3,
      title: "Navigating Cultural Differences in Muslim Marriages",
      excerpt: "Practical advice for couples from different cultural backgrounds on how to build a harmonious marriage based on shared Islamic values.",
      category: "Relationships",
      date: "June 15, 2023",
      author: "Ustadh Yusuf Ali",
      image: "https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Culture", "Harmony", "Communication"]
    },
    {
      id: 4,
      title: "Financial Planning for Muslim Couples",
      excerpt: "Islamic guidelines on managing finances as a couple, including discussions on mahr, joint accounts, and halal investments.",
      category: "Financial Guidance",
      date: "July 8, 2023",
      author: "Shaykh Muhammad Ibrahim",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Finance", "Halal Investing", "Mahr"]
    },
    {
      id: 5,
      title: "Building a Strong Foundation: The First Year of Marriage",
      excerpt: "Tips and advice for newlyweds on navigating the crucial first year of marriage and establishing healthy patterns for the future.",
      category: "Newlyweds",
      date: "August 20, 2023",
      author: "Ustadha Fatima Hassan",
      image: "https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Newlyweds", "Communication", "Relationship Building"]
    },
    {
      id: 6,
      title: "The Role of Parents in the Marriage Process",
      excerpt: "Understanding the balance between parental involvement and personal choice in the Islamic marriage process.",
      category: "Family",
      date: "September 5, 2023",
      author: "Dr. Khalid Mahmood",
      image: "https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Family", "Parents", "Marriage Process"]
    }
  ];
  
  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Categories for sidebar
  const categories = [
    { name: "Islamic Guidance", count: 1 },
    { name: "Marriage Advice", count: 1 },
    { name: "Relationships", count: 1 },
    { name: "Financial Guidance", count: 1 },
    { name: "Newlyweds", count: 1 },
    { name: "Family", count: 1 }
  ];
  
  // Featured post
  const featuredPost = blogPosts[0];
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Muslim Spouse Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, advice, and Islamic guidance on marriage, relationships, and family life
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span className="mx-2">•</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <FaUser className="mr-1" size={12} />
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <FaCalendarAlt className="mr-1" size={12} />
                <span>{featuredPost.date}</span>
              </div>
              <Link 
                to={`/blog/${featuredPost.id}`} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Read Full Article
                <FaArrowRight className="ml-2" size={12} />
              </Link>
            </div>
          </div>
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
              placeholder="Search articles by title, category, author, or tags"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSearchTerm(category.name)}
                      className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    <FaTag className="inline mr-1" size={10} />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" size={12} />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary-600">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaUser className="mr-1" size={12} />
                          <span>{post.author}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  We couldn't find any articles matching your search criteria. Please try a different search term.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8 border border-primary-100">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">
                Get the latest articles, advice, and resources delivered straight to your inbox.
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

export default Blog;
