import React, { useState } from 'react';
import { ChefHat, BookOpen, Heart, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { useData } from '../context/DataContext';

export const TrainerSection: React.FC = () => {
  const { trainer, openEnquiryModal } = useData();
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFF8EE] relative border-t border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Professional Photograph */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative framing element */}
              <div className="absolute -inset-3 rounded-3xl bg-[#727B51]/15 -rotate-2"></div>
              <div className="absolute -inset-3 rounded-3xl bg-[#C89B55]/15 rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFF8EE] bg-[#38251D]">
                <img
                  src={trainer.portraitUrl}
                  alt={`${trainer.name} - Head Culinary Trainer`}
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                
                {/* Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#38251D]/90 backdrop-blur-md text-[#FFF8EE] text-left border border-[#FFF8EE]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-lg font-bold text-[#FFF8EE]">{trainer.name}</span>
                    <span className="text-[10px] uppercase tracking-wider bg-[#B94E36] text-[#FFF8EE] px-2 py-0.5 rounded-full font-semibold">
                      Educator
                    </span>
                  </div>
                  <p className="text-xs text-[#FFF8EE]/80">{trainer.title}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Bio & Structured Fields */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Heading */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEET YOUR TRAINER</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] leading-[1.2] mb-6">
              “Cooking is easier when you understand the technique behind the recipe.”
            </h2>

            {/* Authentic Trainer Introduction */}
            <p className="text-base sm:text-lg text-[#38251D]/85 leading-relaxed mb-8">
              At Suruchi Food Training, learning is never about mechanically copying steps. We deconstruct culinary chemistry—from how oven heat circulates to how salt draws moisture—so you can cook freely and consistently with your own hands.
            </p>

            {/* Structured Authentic Fields */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-[#FAF3E7] p-6 rounded-2xl border border-[#38251D]/10">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                  Trainer Name
                </span>
                <p className="text-base font-semibold text-[#38251D]">{trainer.name}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                  Teaching Experience
                </span>
                <p className="text-sm font-medium text-[#38251D]">{trainer.experience}</p>
              </div>

              <div className="sm:col-span-2 border-t border-[#38251D]/10 pt-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                  Specialization
                </span>
                <p className="text-sm font-medium text-[#38251D]">{trainer.specialization}</p>
              </div>

              <div className="sm:col-span-2 border-t border-[#38251D]/10 pt-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                  Training Philosophy
                </span>
                <p className="text-sm italic text-[#38251D]/90 leading-relaxed">
                  "{trainer.trainingPhilosophy}"
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsBioModalOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#38251D] text-[#FFF8EE] text-sm font-semibold hover:bg-[#B94E36] transition-colors shadow-sm flex items-center gap-2 group"
              >
                <span>Know My Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openEnquiryModal('Consultation with Trainer')}
                className="px-6 py-3.5 rounded-full bg-transparent border border-[#38251D]/30 text-[#38251D] text-sm font-semibold hover:border-[#38251D] hover:bg-[#38251D]/5 transition-colors"
              >
                Ask a Question Directly
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Story Modal */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38251D]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF8EE] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#38251D]/15 max-h-[90vh] overflow-y-auto text-left relative">
            
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#38251D]/5 hover:bg-[#38251D]/10 text-[#38251D] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#B94E36]/10 text-[#B94E36] flex items-center justify-center">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#727B51] font-bold">Culinary Journey</span>
                <h3 className="font-serif text-2xl font-bold text-[#38251D]">The Story of {trainer.name}</h3>
              </div>
            </div>

            <div className="space-y-4 text-[#38251D]/85 text-base leading-relaxed mb-6 whitespace-pre-line border-t border-b border-[#38251D]/10 py-5">
              {trainer.bioStory}
            </div>

            <div className="bg-[#FAF3E7] p-4 rounded-xl mb-6">
              <h4 className="font-serif text-sm font-bold text-[#38251D] mb-2">Our Teaching Commitment:</h4>
              <ul className="space-y-1.5 text-xs text-[#38251D]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#727B51] flex-shrink-0" />
                  <span>Small batches so each participant works on their own station.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#727B51] flex-shrink-0" />
                  <span>Honest recipes tested and calibrated for domestic home kitchens.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#727B51] flex-shrink-0" />
                  <span>Lifelong alumni support via WhatsApp for post-class recipe queries.</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-5 py-2.5 rounded-full border border-[#38251D]/20 text-xs font-semibold text-[#38251D]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsBioModalOpen(false);
                  openEnquiryModal();
                }}
                className="px-6 py-2.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-semibold hover:bg-[#9E3E28]"
              >
                Book Class with Suruchi
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
