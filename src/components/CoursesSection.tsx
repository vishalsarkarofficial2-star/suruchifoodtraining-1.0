import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, ChevronRight, MessageCircle, Layers, ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { COURSE_CATEGORIES } from '../data/initialData';
import { Course } from '../types';

export const CoursesSection: React.FC = () => {
  const { courses, setSelectedCourse, openEnquiryModal, getWhatsAppUrl } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter courses based on active category
  const filteredCourses = courses.filter((course) => {
    if (activeCategory === 'all') return true;
    return course.category.startsWith(activeCategory) || course.categoryCode === activeCategory;
  });

  return (
    <section id="classes" className="py-24 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3 h-3" />
              <span>SIGNATURE TRAINING PROGRAMS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              Find Your Next Cooking Experience
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#38251D]/75 text-sm sm:text-base max-w-md">
            Small-format masterclasses focused on technical precision, sensory cues, and recipes calibrated for real kitchens.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar text-left">
          {COURSE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#38251D] text-[#FFF8EE] shadow-sm'
                    : 'bg-[#FAF3E7] text-[#38251D]/80 hover:bg-[#38251D]/10 hover:text-[#38251D] border border-[#38251D]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid - Large Editorial Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#FAF3E7] rounded-3xl overflow-hidden border border-[#38251D]/10 hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Card Image Banner with Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#38251D]">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#38251D]/80 via-[#38251D]/20 to-transparent"></div>

                {/* Top Floating Category & Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FFF8EE]/90 backdrop-blur-md text-[#38251D] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#B94E36] text-[#FFF8EE] text-[11px] font-semibold tracking-wide shadow-sm">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Overlay on Image: Upcoming Batch */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFF8EE]">
                  <div className="flex items-center gap-1.5 bg-[#38251D]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#C89B55]" />
                    <span className="font-medium">{course.upcomingBatch}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#38251D]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[#C89B55] font-semibold">{course.seatsAvailable} seats left</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-[#727B51] font-semibold">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#727B51]/10">
                      {course.difficulty}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {course.trainingMode}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#38251D] mb-3 leading-snug group-hover:text-[#B94E36] transition-colors">
                    {course.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#38251D]/80 leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-5 border-t border-[#38251D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#727B51] font-semibold block">
                      Starting Investment
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-serif font-bold text-[#38251D]">
                        ₹{course.startingFee.toLocaleString()}
                      </span>
                      {course.originalFee && (
                        <span className="text-xs text-[#38251D]/50 line-through">
                          ₹{course.originalFee.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-[#38251D]/30 hover:border-[#38251D] hover:bg-[#38251D] hover:text-[#FFF8EE] text-xs font-semibold text-[#38251D] transition-all flex items-center justify-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppUrl(course.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book Class</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#38251D]/70 mb-3">
            Looking for a customized culinary batch for private groups or food entrepreneurs?
          </p>
          <button
            onClick={() => openEnquiryModal('Customized Private Group Batch')}
            className="text-xs font-bold text-[#B94E36] hover:underline uppercase tracking-wider"
          >
            Inquire about customized corporate & private studio workshops →
          </button>
        </div>

      </div>
    </section>
  );
};
