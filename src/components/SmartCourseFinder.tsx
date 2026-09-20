import React, { useState } from 'react';
import { Compass, CheckCircle2, Sparkles, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Course } from '../types';

export const SmartCourseFinder: React.FC = () => {
  const { courses, setSelectedCourse, getWhatsAppUrl } = useData();

  const [topic, setTopic] = useState<string>('everyday');
  const [level, setLevel] = useState<string>('Beginner');
  const [mode, setMode] = useState<string>('Either');
  const [hasSearched, setHasSearched] = useState(false);
  const [recommended, setRecommended] = useState<Course[]>([]);

  const topicOptions = [
    { label: 'Everyday Cooking', value: 'everyday' },
    { label: 'Cakes & Baking', value: 'baking' },
    { label: 'Snacks & Quick Bites', value: 'snacks' },
    { label: 'Restaurant Style Food', value: 'restaurant' },
    { label: 'Traditional & Regional', value: 'regional' },
    { label: 'Desserts & Sweets', value: 'desserts' },
    { label: 'Food Business', value: 'business' },
  ];

  const levelOptions = ['Beginner Friendly', 'Intermediate', 'All Skill Levels'];
  const modeOptions = ['Offline Studio', 'Online Live', 'Either'];

  const handleFindCourse = () => {
    // Score/filter based on selection
    const matches = courses.filter((c) => {
      const topicMatch = c.categoryCode === topic || c.category.toLowerCase().includes(topic);
      const modeMatch =
        mode === 'Either' ||
        c.trainingMode.toLowerCase().includes(mode.toLowerCase()) ||
        c.trainingMode.includes('Hybrid');
      return topicMatch;
    });

    // If exact matches found, use them, otherwise return most relevant
    if (matches.length > 0) {
      setRecommended(matches);
    } else {
      setRecommended(courses.slice(0, 2));
    }
    setHasSearched(true);
  };

  const handleReset = () => {
    setHasSearched(false);
    setRecommended([]);
  };

  return (
    <section className="py-20 bg-[#FAF3E7] relative border-t border-b border-[#38251D]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B55]/20 text-[#38251D] text-xs font-bold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#B94E36]" />
            <span>INTERACTIVE COURSE ADVISOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38251D] mb-3">
            Not Sure Which Class Is Right for You?
          </h2>
          <p className="text-sm sm:text-base text-[#38251D]/75">
            Answer three quick questions to discover your ideal culinary learning pathway.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-[#FFF8EE] rounded-3xl p-6 sm:p-10 border border-[#38251D]/10 shadow-sm text-left">
          
          {!hasSearched ? (
            <div className="space-y-8">
              
              {/* Question 1: Topic */}
              <div>
                <label className="font-serif text-base sm:text-lg font-bold text-[#38251D] block mb-3">
                  1. What do you want to learn?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {topicOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTopic(opt.value)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-left border transition-all ${
                        topic === opt.value
                          ? 'bg-[#38251D] text-[#FFF8EE] border-[#38251D] shadow-sm'
                          : 'bg-[#FAF3E7] text-[#38251D]/80 border-[#38251D]/10 hover:border-[#38251D]/30'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Experience Level */}
              <div>
                <label className="font-serif text-base sm:text-lg font-bold text-[#38251D] block mb-3">
                  2. What is your current kitchen experience level?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {levelOptions.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setLevel(lvl)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-center border transition-all ${
                        level === lvl
                          ? 'bg-[#38251D] text-[#FFF8EE] border-[#38251D] shadow-sm'
                          : 'bg-[#FAF3E7] text-[#38251D]/80 border-[#38251D]/10 hover:border-[#38251D]/30'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Training Format */}
              <div>
                <label className="font-serif text-base sm:text-lg font-bold text-[#38251D] block mb-3">
                  3. Preferred training format?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {modeOptions.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-center border transition-all ${
                        mode === m
                          ? 'bg-[#38251D] text-[#FFF8EE] border-[#38251D] shadow-sm'
                          : 'bg-[#FAF3E7] text-[#38251D]/80 border-[#38251D]/10 hover:border-[#38251D]/30'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#38251D]/10 flex justify-center">
                <button
                  type="button"
                  onClick={handleFindCourse}
                  className="px-10 py-4 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Find My Course</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#38251D]/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#727B51] font-bold block">
                    Curated Results
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#38251D]">
                    We Recommend These Experiences For You
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-[#38251D]/70 hover:text-[#B94E36] font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommended.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#FAF3E7] rounded-2xl overflow-hidden border border-[#38251D]/15 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 bg-[#38251D]">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#B94E36] text-[#FFF8EE] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Top Match
                        </div>
                      </div>

                      <div className="p-5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                          {course.category}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[#38251D] mb-2 leading-snug">
                          {course.name}
                        </h4>
                        <p className="text-xs text-[#38251D]/80 line-clamp-2 mb-3">
                          {course.shortDescription}
                        </p>
                        <div className="text-xs font-semibold text-[#727B51]">
                          <span>{course.duration}</span> • <span>{course.trainingMode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center justify-between border-t border-[#38251D]/10 mt-2">
                      <span className="font-serif text-lg font-bold text-[#38251D]">
                        ₹{course.startingFee.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedCourse(course)}
                          className="px-3 py-1.5 rounded-full border border-[#38251D]/30 text-xs font-semibold text-[#38251D] hover:bg-[#38251D] hover:text-[#FFF8EE]"
                        >
                          View Details
                        </button>
                        <a
                          href={getWhatsAppUrl(course.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-semibold flex items-center gap-1 shadow-sm"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>Reserve</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
