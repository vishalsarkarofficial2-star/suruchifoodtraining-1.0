import React, { useState } from 'react';
import { Sparkles, Heart, Quote, ArrowRight, UserCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export const StudentKitchen: React.FC = () => {
  const { studentStories, openEnquiryModal } = useData();
  const [showAllStories, setShowAllStories] = useState(false);

  const displayedStories = showAllStories ? studentStories : studentStories.slice(0, 3);

  return (
    <section id="students" className="py-24 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>REAL KITCHEN MILESTONES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              From Our Students' Kitchens
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#38251D]/75 text-sm sm:text-base max-w-md">
            Nothing makes us prouder than seeing students replicate complex dishes independently in their own home and commercial kitchens.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#FAF3E7] rounded-3xl overflow-hidden border border-[#38251D]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Dish Photo Made by Student */}
                <div className="relative h-56 overflow-hidden bg-[#38251D]">
                  <img
                    src={story.dishPhoto}
                    alt={story.dishName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38251D]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-[#C89B55] block">
                      Dish Prepared By Student
                    </span>
                    <p className="font-serif text-base font-bold text-[#FFF8EE] leading-tight">
                      {story.dishName}
                    </p>
                  </div>
                </div>

                {/* Body Review */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={story.studentPhoto}
                      alt={story.studentName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#FFF8EE] shadow-sm"
                    />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#38251D]">
                        {story.studentName}
                      </h3>
                      <p className="text-xs text-[#727B51] font-medium">{story.studentRole}</p>
                    </div>
                  </div>

                  <div className="mb-3 px-3 py-1 rounded-lg bg-[#FFF8EE] border border-[#38251D]/10 inline-block text-[11px] font-semibold text-[#B94E36]">
                    Course: {story.trainingAttended}
                  </div>

                  <div className="relative">
                    <Quote className="w-5 h-5 text-[#C89B55]/30 mb-1" />
                    <p className="text-xs sm:text-sm text-[#38251D]/80 leading-relaxed italic">
                      "{story.review}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 text-[11px] text-[#38251D]/50 border-t border-[#38251D]/10 flex items-center justify-between">
                <span>Verified Workshop Alum</span>
                <span>{story.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Toggle */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAllStories(!showAllStories)}
            className="px-6 py-3 rounded-full border border-[#38251D]/20 hover:border-[#38251D] hover:bg-[#38251D] hover:text-[#FFF8EE] text-xs font-semibold text-[#38251D] transition-colors"
          >
            {showAllStories ? 'Show Fewer Stories' : 'See More Student Stories'}
          </button>
          
          <button
            onClick={() => openEnquiryModal('Student Experience Query')}
            className="px-6 py-3 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-xs font-semibold transition-colors shadow-sm"
          >
            Join Our Next Batch
          </button>
        </div>

      </div>
    </section>
  );
};
