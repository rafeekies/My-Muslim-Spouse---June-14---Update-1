import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaHeart } from 'react-icons/fa';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      couple: "Ahmed & Fatima",
      location: "United States",
      image: "https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "We connected on My Muslim Spouse in early 2022. After several months of communication and involving our families, we realized we shared the same values and life goals. We got married in December 2022, and it's been a beautiful journey since then. The platform's focus on Islamic values made all the difference in our search.",
      date: "Married: December 2022"
    },
    {
      id: 2,
      couple: "Omar & Aisha",
      location: "United Kingdom",
      image: "https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "Finding a spouse who understood both my religious values and professional ambitions was challenging until I joined My Muslim Spouse. Omar and I matched based on our shared interests in Islamic finance and community service. After six months of getting to know each other with our families involved, we knew Allah had brought us together for a reason.",
      date: "Married: July 2023"
    },
    {
      id: 3,
      couple: "Yusuf & Maryam",
      location: "Canada",
      image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "As a revert to Islam, I was worried about finding someone who would understand my journey. My Muslim Spouse connected me with Yusuf, whose kindness and patience helped me grow in my faith. His family welcomed me with open arms, and we've built a life centered around our shared devotion to Allah.",
      date: "Married: March 2023"
    },
    {
      id: 4,
      couple: "Ibrahim & Zainab",
      location: "Australia",
      image: "https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "After a divorce, I was hesitant to search for marriage again. The privacy controls on My Muslim Spouse gave me the confidence to create a profile. Ibrahim and I connected over our love for Islamic art and our experiences as single parents. Our blended family is now thriving alhamdulillah.",
      date: "Married: September 2022"
    },
    {
      id: 5,
      couple: "Khalid & Noor",
      location: "United Arab Emirates",
      image: "https://images.pexels.com/photos/3760820/pexels-photo-3760820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "Living in a country with a large Muslim population, I still struggled to find someone who shared my specific values and vision for family life. My Muslim Spouse's detailed compatibility matching introduced me to Noor, who lived just 20 minutes away but whom I might never have met otherwise!",
      date: "Married: November 2023"
    }
  ];

  const testimonials = [
    {
      text: "The verification process gave me peace of mind that I was talking to genuine people seeking marriage.",
      author: "Samira, 28"
    },
    {
      text: "I appreciated how the platform encouraged family involvement from the beginning.",
      author: "Tariq, 32"
    },
    {
      text: "As a busy professional, the compatibility matching saved me so much time in finding suitable matches.",
      author: "Layla, 30"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-on-dark-heading">Success Stories</h1>
            <p className="text-xl opacity-90 text-on-dark">
              Real couples who found their perfect match through My Muslim Spouse
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-gray-600">Successful Marriages</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-gray-600">Match Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">120+</div>
              <div className="text-gray-600">Countries Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Success Stories</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Read how these couples found their perfect match through My Muslim Spouse
            </p>
          </div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <div key={story.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={story.image} 
                      alt={story.couple} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-md relative">
                    <FaHeart className="absolute -top-4 -left-4 text-primary-500 text-3xl bg-white p-1 rounded-full" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.couple}</h3>
                    <p className="text-primary-600 mb-4">{story.location} • {story.date}</p>
                    <div className="relative">
                      <FaQuoteLeft className="absolute -left-2 -top-2 text-primary-200 opacity-50 text-lg" />
                      <p className="text-gray-700 italic pl-6 pr-6">{story.story}</p>
                      <FaQuoteRight className="absolute -right-2 bottom-0 text-primary-200 opacity-50 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Members Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-500 mb-4">
                  <FaQuoteLeft size={24} />
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="text-right font-medium text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-on-dark-heading">Your Success Story Begins Here</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-on-dark">
            Join thousands of Muslims who have found their spouse through our platform
          </p>
          <a href="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
