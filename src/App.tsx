import React from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrainerSection } from './components/TrainerSection';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { SuruchiExperience } from './components/SuruchiExperience';
import { UpcomingExperiences } from './components/UpcomingExperiences';
import { FoodShowcase } from './components/FoodShowcase';
import { StudentKitchen } from './components/StudentKitchen';
import { TransformationSection } from './components/TransformationSection';
import { CookingReels } from './components/CookingReels';
import { RecipeJournal } from './components/RecipeJournal';
import { FoodEntrepreneur } from './components/FoodEntrepreneur';
import { WhyLearnSection } from './components/WhyLearnSection';
import { StudentReviews } from './components/StudentReviews';
import { InstagramFeed } from './components/InstagramFeed';
import { SmartCourseFinder } from './components/SmartCourseFinder';
import { QuickEnquirySection } from './components/QuickEnquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { AdminModal } from './components/AdminModal';
import { MessageCircle } from 'lucide-react';

const MainContent: React.FC = () => {
  const { getWhatsAppUrl } = useData();

  return (
    <div className="min-h-screen bg-[#FFF8EE] text-[#38251D] font-sans selection:bg-[#B94E36] selection:text-[#FFF8EE] relative">
      
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Trainer Personal Trust & Bio */}
        <TrainerSection />

        {/* The Suruchi Method (Storytelling: Learn, Prepare, Cook, Create) */}
        <SuruchiExperience />

        {/* Masterclasses & Courses */}
        <CoursesSection />

        {/* Event-Style Upcoming Experiences & Workshops */}
        <UpcomingExperiences />

        {/* Interactive Course Matcher */}
        <SmartCourseFinder />

        {/* Made in Our Kitchen (Pinterest/Editorial Masonry Gallery) */}
        <FoodShowcase />

        {/* Real Student Kitchen Milestones & Dishes */}
        <StudentKitchen />

        {/* Transformation: Before → Learn → Create */}
        <TransformationSection />

        {/* Inside Our Kitchen (Reels & Short Videos) */}
        <CookingReels />

        {/* Food Entrepreneurship & Commercial Culinary Pathway */}
        <FoodEntrepreneur />

        {/* The Recipe Journal (Magazine Style Notes & Articles) */}
        <RecipeJournal />

        {/* 6 Minimal Icon Cards: Why Learn With Suruchi */}
        <WhyLearnSection />

        {/* Large Editorial Student Reviews */}
        <StudentReviews />

        {/* Instagram Social Proof Grid */}
        <InstagramFeed />

        {/* Quick Enquiry & Reservation Section */}
        <QuickEnquirySection />

        {/* Come Cook With Us (Contact & Studio Map) */}
        <ContactSection />
      </main>

      {/* Editorial Footer with Admin Link */}
      <Footer />

      {/* Course Experience View Modal */}
      <CourseModal />

      {/* Instant Enquiry & Seat Reservation Modal */}
      <EnquiryModal />

      {/* Studio Content Management & Admin Modal */}
      <AdminModal />

      {/* Floating Instant WhatsApp Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
          aria-label="Direct WhatsApp Enquiry"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
            WhatsApp Studio
          </span>
        </a>
      </aside>

    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <MainContent />
    </DataProvider>
  );
}
