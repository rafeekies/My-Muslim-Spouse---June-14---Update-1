import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const IslamicQuoteWidget = () => {
  const [quote, setQuote] = useState({
    text: "The best among you are those who have the best manners and character.",
    source: "Prophet Muhammad (peace be upon him)",
    reference: "Sahih al-Bukhari"
  });

  const quotes = [
    {
      text: "The best among you are those who have the best manners and character.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih al-Bukhari"
    },
    {
      text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih al-Bukhari"
    },
    {
      text: "Speak good or remain silent.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih Muslim"
    },
    {
      text: "Marriage is half of faith.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sunan al-Bayhaqi"
    }
  ];

  useEffect(() => {
    // In a real app, you might fetch quotes from an API
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="bg-primary-600 text-white p-4">
        <h3 className="text-xl font-semibold">Islamic Wisdom</h3>
      </div>
      
      <div className="p-6 flex flex-col justify-center h-[calc(100%-4rem)]">
        <div className="text-center">
          <FaQuoteLeft className="inline-block text-primary-300 mb-2" />
          <p className="text-lg font-medium text-gray-700 mb-4">{quote.text}</p>
          <FaQuoteRight className="inline-block text-primary-300 mb-2" />
          
          <div className="mt-4">
            <p className="text-primary-600 font-medium">{quote.source}</p>
            <p className="text-sm text-gray-500">{quote.reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicQuoteWidget;
