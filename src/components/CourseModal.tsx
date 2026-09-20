import React from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageCircle, BookOpen, Users, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export const CourseModal: React.FC = () => {
  const { selectedCourse, setSelectedCourse, openEnquiryModal, getWhatsAppUrl } = useData();

  if (!selectedCourse) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#38251D]/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-[#FFF8EE] rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-[#38251D]/15 text-left relative flex flex-col max-h-[92vh]">
        
        {/* Floating Close Button */}
        <button
          onClick={() => setSelectedCourse(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FFF8EE]/90 hover:bg-[#FFF8EE] text-[#38251D] flex items-center justify-center shadow-md transition-all border border-[#38251D]/10"
          aria-label="Close course details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          
          {/* Top Hero Banner */}
          <div className="relative h-72 sm:h-96 bg-[#38251D]">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#38251D] via-[#38251D]/40 to-transparent"></div>

            {/* Content Overlaid on Banner */}
            <div className="absolute bottom-6 left-6 right-6 text-[#FFF8EE]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#B94E36] text-xs font-semibold uppercase tracking-wider">
                  {selectedCourse.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FFF8EE]/20 backdrop-blur-md text-xs font-medium">
                  {selectedCourse.difficulty}
                </span>
                {selectedCourse.badge && (
                  <span className="px-3 py-1 rounded-full bg-[#C89B55] text-[#38251D] text-xs font-bold">
                    {selectedCourse.badge}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFF8EE] mb-2 leading-tight">
                {selectedCourse.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#FFF8EE]/90 max-w-2xl leading-relaxed">
                {selectedCourse.shortDescription}
              </p>
            </div>
          </div>

          {/* Quick Key Matrix Bar */}
          <div className="bg-[#FAF3E7] border-b border-[#38251D]/10 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[#727B51] font-semibold block uppercase text-[10px]">Upcoming Batch</span>
              <div className="flex items-center gap-1 text-[#38251D] font-bold mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#B94E36]" />
                <span>{selectedCourse.upcomingBatch}</span>
              </div>
            </div>

            <div>
              <span className="text-[#727B51] font-semibold block uppercase text-[10px]">Duration</span>
              <div className="flex items-center gap-1 text-[#38251D] font-bold mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#B94E36]" />
                <span>{selectedCourse.duration}</span>
              </div>
            </div>

            <div>
              <span className="text-[#727B51] font-semibold block uppercase text-[10px]">Training Mode</span>
              <div className="flex items-center gap-1 text-[#38251D] font-bold mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#B94E36]" />
                <span>{selectedCourse.trainingMode}</span>
              </div>
            </div>

            <div>
              <span className="text-[#727B51] font-semibold block uppercase text-[10px]">Investment & Seats</span>
              <div className="text-[#38251D] font-bold mt-0.5 flex items-baseline gap-1.5">
                <span className="text-base font-serif text-[#B94E36]">₹{selectedCourse.startingFee.toLocaleString()}</span>
                <span className="text-[10px] text-[#727B51]">({selectedCourse.seatsAvailable} spots left)</span>
              </div>
            </div>
          </div>

          {/* Main Body Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-12">
            
            {/* Detailed Introduction */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#38251D] mb-3">About This Experience</h2>
              <p className="text-sm sm:text-base text-[#38251D]/85 leading-relaxed">
                {selectedCourse.introDetailed}
              </p>
            </div>

            {/* WHAT YOU'LL LEARN */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#B94E36]" />
                <h2 className="font-serif text-2xl font-bold text-[#38251D]">What You'll Learn</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedCourse.learningOutcomes.map((outcome) => (
                  <div
                    key={outcome.number}
                    className="p-5 rounded-2xl bg-[#FAF3E7] border border-[#38251D]/10 flex gap-4 items-start"
                  >
                    <span className="font-serif text-2xl font-bold text-[#C89B55] leading-none pt-0.5">
                      {outcome.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#38251D] mb-1">{outcome.title}</h3>
                      <p className="text-xs text-[#38251D]/80 leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recipes Covered */}
            <div className="bg-[#FAF3E7] p-6 sm:p-8 rounded-3xl border border-[#38251D]/10">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#727B51]" />
                <h2 className="font-serif text-xl font-bold text-[#38251D]">Recipes & Foundations Covered</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCourse.recipesCovered.map((recipe, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#38251D]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#727B51] flex-shrink-0 mt-0.5" />
                    <span>{recipe}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Logistics & Curriculum Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Required Materials & Inclusions
                  </h4>
                  <ul className="space-y-1 text-xs text-[#38251D]/85">
                    {selectedCourse.requiredMaterials.map((mat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#B94E36] font-bold">•</span>
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Batch Schedule
                  </h4>
                  <p className="text-xs text-[#38251D]">{selectedCourse.batchSchedule}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Training Location
                  </h4>
                  <p className="text-xs text-[#38251D]">{selectedCourse.location}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Skill Level & Who Can Join
                  </h4>
                  <p className="text-xs text-[#38251D] mb-1">
                    <strong>Level:</strong> {selectedCourse.skillLevel}
                  </p>
                  <p className="text-xs text-[#38251D]">
                    <strong>Audience:</strong> {selectedCourse.whoCanJoin}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Instruction Language
                  </h4>
                  <p className="text-xs text-[#38251D]">{selectedCourse.trainingLanguage}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Certificate Details
                  </h4>
                  <div className="flex items-start gap-2 bg-[#FFF8EE] p-3 rounded-xl border border-[#38251D]/10">
                    <ShieldCheck className="w-4 h-4 text-[#727B51] flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#38251D]/80 leading-snug">
                      {selectedCourse.certificateNote}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="bg-[#FAF3E7] border-t border-[#38251D]/15 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#727B51] font-semibold block">
              Investment for Complete Hands-On Training
            </span>
            <div className="flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#38251D]">
                ₹{selectedCourse.startingFee.toLocaleString()}
              </span>
              <span className="text-xs text-[#727B51] font-medium">
                (Inclusive of ingredients, equipment use & recipe guide)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                const name = selectedCourse.name;
                setSelectedCourse(null);
                openEnquiryModal(name);
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-full border-2 border-[#38251D] text-[#38251D] text-xs font-bold hover:bg-[#38251D] hover:text-[#FFF8EE] transition-colors"
            >
              Enquire Online
            </button>

            <a
              href={getWhatsAppUrl(selectedCourse.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-7 py-3 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reserve My Seat</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
