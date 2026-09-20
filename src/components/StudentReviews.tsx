import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/initialData';

export const StudentReviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? INITIAL_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === INITIAL_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = INITIAL_REVIEWS[activeIndex];

  return (
    <section className="py-24 bg-[#FAF3E7] relative border-t border-[#38251D]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Large Testimonial Card */}
        <div className="bg-[#FFF8EE] rounded-3xl p-8 sm:p-14 border border-[#38251D]/10 shadow-sm relative text-center flex flex-col items-center">
          
          <div className="w-12 h-12 rounded-full bg-[#C89B55]/15 flex items-center justify-center text-[#B94E36] mb-6">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#38251D] font-normal leading-relaxed max-w-3xl mb-8">
            “{current.quote}”
          </blockquote>

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-[#38251D]">
              {current.author}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#727B51] font-semibold mt-1">
              Alumni • {current.course} ({current.location})
            </span>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-[#38251D]/20 hover:border-[#38251D] text-[#38251D] flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 px-3">
              {INITIAL_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === i ? 'w-6 bg-[#B94E36]' : 'w-2 bg-[#38251D]/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-[#38251D]/20 hover:border-[#38251D] text-[#38251D] flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
