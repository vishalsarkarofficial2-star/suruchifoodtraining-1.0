import React, { useState } from 'react';
import { ArrowDown, Check, HelpCircle, Sparkles, ChefHat, HeartHandshake } from 'lucide-react';
import { useData } from '../context/DataContext';

export const TransformationSection: React.FC = () => {
  const { openEnquiryModal } = useData();
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 0,
      stage: 'BEFORE',
      badge: 'Uncertainty & Overwhelm',
      title: '“I want to cook this dish but don’t know where to begin.”',
      quoteText: 'Endless confusing YouTube videos with contradictory measurements. Fear of burning expensive ingredients, rubbery cakes that sink in the center, and oily restaurant curries.',
      icon: HelpCircle,
      cardBg: 'bg-[#FFF8EE]',
      accent: 'text-[#B94E36]',
      border: 'border-[#B94E36]/30'
    },
    {
      id: 1,
      stage: 'TRAINING',
      badge: 'Hands-On Studio Immersion',
      title: 'Learn ingredients, measurements, preparation & technique.',
      quoteText: 'At Suruchi Food Training, you understand the science of fat-in-water emulsions, caramelization temperatures, and knife ergonomics. You practice under direct supervision in small batches.',
      icon: ChefHat,
      cardBg: 'bg-[#FAF3E7]',
      accent: 'text-[#727B51]',
      border: 'border-[#727B51]/40'
    },
    {
      id: 2,
      stage: 'AFTER',
      badge: 'Intuitive Culinary Mastery',
      title: 'Prepare the recipe independently with complete confidence.',
      quoteText: 'You walk into your kitchen without a recipe open on your phone. You recognize sensory cues—the sizzle, the gloss, the aroma release—and host dinner parties or start your food brand with pride.',
      icon: Sparkles,
      accent: 'text-[#C89B55]',
      cardBg: 'bg-[#38251D] text-[#FFF8EE]',
      border: 'border-[#C89B55]/50'
    }
  ];

  return (
    <section className="py-24 bg-[#FFF8EE] relative border-t border-[#38251D]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B55]/15 text-[#38251D] text-xs font-bold tracking-widest uppercase mb-3">
            <span>THE CULINARY EVOLUTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] mb-4">
            Before → Training → After
          </h2>
          <p className="text-sm sm:text-base text-[#38251D]/75">
            How our technique-first philosophy permanently changes how you approach the stove.
          </p>
        </div>

        {/* 3 Steps Transformation Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={s.stage} className="flex flex-col relative">
                
                {/* Step Card */}
                <div
                  className={`rounded-3xl p-8 border ${s.border} ${s.cardBg} flex-1 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 text-left`}
                >
                  <div>
                    {/* Stage Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest ${s.accent}`}>
                        {s.stage}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center ${s.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-black/5 mb-4">
                      {s.badge}
                    </span>

                    <h3 className="font-serif text-xl font-bold mb-4 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                      {s.quoteText}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-current/10 flex items-center gap-2 text-xs font-medium opacity-90">
                    <Check className="w-4 h-4 text-[#727B51]" />
                    <span>
                      {idx === 0 ? 'Starting Point' : idx === 1 ? 'Sensory Learning' : 'Lifelong Instinct'}
                    </span>
                  </div>
                </div>

                {/* Arrow indicator between cards on mobile/desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#FFF8EE] border border-[#38251D]/20 items-center justify-center text-[#38251D] shadow-sm">
                    <span className="text-xs font-bold">→</span>
                  </div>
                )}
                {!isLast && (
                  <div className="flex md:hidden justify-center my-3 text-[#38251D]/50">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom invitation */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openEnquiryModal('Transformation Journey')}
            className="px-8 py-3.5 rounded-full bg-[#38251D] text-[#FFF8EE] text-xs font-bold uppercase tracking-wider hover:bg-[#B94E36] transition-colors shadow-sm"
          >
            Start Your Culinary Transformation Today
          </button>
        </div>

      </div>
    </section>
  );
};
