import React from 'react';
import { BookOpen, Utensils, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export const SuruchiExperience: React.FC = () => {
  const { openEnquiryModal } = useData();

  const stages = [
    {
      step: '01',
      phase: 'LEARN',
      title: 'Understand Ingredients & Techniques',
      description: 'Demystify the chemical and physical changes of food. Why does oil temperature prevent greasiness? How does flour protein dictate crumb softness? We answer every "why" before picking up a knife.',
      icon: BookOpen,
      accentColor: 'text-[#C89B55]',
      badgeBg: 'bg-[#C89B55]/15'
    },
    {
      step: '02',
      phase: 'PREPARE',
      title: 'Master Preparation & Workflow',
      description: 'Chaotic kitchens create burnt food. Learn how professional chefs organize mis-en-place, knife handling geometry, and workstation zoning so cooking feels calm, rhythmic, and enjoyable.',
      icon: Utensils,
      accentColor: 'text-[#727B51]',
      badgeBg: 'bg-[#727B51]/15'
    },
    {
      step: '03',
      phase: 'COOK',
      title: 'Practice with Real-Time Guidance',
      description: 'You are not watching an instructor from the second row; you are standing at your own station, feeling the dough resilience, tasting reductions at each stage, and adjusting flame levels alongside Suruchi.',
      icon: Flame,
      accentColor: 'text-[#B94E36]',
      badgeBg: 'bg-[#B94E36]/15'
    },
    {
      step: '04',
      phase: 'CREATE',
      title: 'Cook with Intuitive Confidence',
      description: 'The real magic happens after you leave our studio. Armed with technique and sensory memory, you can open any refrigerator, substitute missing ingredients effortlessly, and prepare dishes without panic.',
      icon: Sparkles,
      accentColor: 'text-[#38251D]',
      badgeBg: 'bg-[#38251D]/15'
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#FAF3E7] relative border-t border-b border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-4">
            <span>THE SURUCHI EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] mb-4">
            More Than Just Following Recipes
          </h2>
          <p className="text-[#38251D]/80 text-base leading-relaxed">
            A 4-stage pedagogical methodology engineered to replace anxiety with instinct.
          </p>
        </div>

        {/* 4 Pillars Grid with Step Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="bg-[#FFF8EE] rounded-3xl p-7 border border-[#38251D]/10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm relative group text-left"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#38251D]/30 group-hover:text-[#B94E36] transition-colors">
                      {stage.step}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${stage.badgeBg} flex items-center justify-center ${stage.accentColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Label */}
                  <span className="text-[11px] font-bold tracking-widest text-[#727B51] uppercase block mb-1">
                    STAGE {stage.step} • {stage.phase}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#38251D] mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#38251D]/75 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#38251D]/5 flex items-center justify-between text-[11px] font-semibold text-[#38251D]/60">
                  <span>Hands-On Milestone</span>
                  <span className="text-[#B94E36]">Active Skill</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 bg-[#38251D] text-[#FFF8EE] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Ready to feel the difference between memorizing and mastering?
            </h3>
            <p className="text-sm text-[#FFF8EE]/80">
              Join a culinary studio session designed around sensory touch, smell, and technique.
            </p>
          </div>
          <button
            onClick={() => openEnquiryModal()}
            className="px-8 py-4 rounded-full bg-[#B94E36] text-[#FFF8EE] text-sm font-semibold hover:bg-[#9E3E28] transition-all whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>Book Your Studio Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
