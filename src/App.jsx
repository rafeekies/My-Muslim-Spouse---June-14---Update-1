import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import IslamicMarriage from './pages/IslamicMarriage';
import FamilyInIslam from './pages/FamilyInIslam';
import QuranReferences from './pages/QuranReferences';
import HadithCollection from './pages/HadithCollection';
import FAQs from './pages/FAQs';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import DailyPrayerBanner from './components/layout/DailyPrayerBanner';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <DailyPrayerBanner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/islamic-marriage" element={<IslamicMarriage />} />
          <Route path="/family-in-islam" element={<FamilyInIslam />} />
          <Route path="/quran-references" element={<QuranReferences />} />
          <Route path="/hadith-collection" element={<HadithCollection />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
