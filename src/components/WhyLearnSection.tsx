import React from 'react';
import { ChefHat, CheckCircle, Sparkles, BookOpen, Compass, HeartHandshake } from 'lucide-react';

export const WhyLearnSection: React.FC = () => {
  const reasons = [
    {
      title: 'Hands-On Learning',
      desc: 'You stand at your own workstation with ingredients and tools, executing each technique directly with sensory feedback.',
      icon: ChefHat,
    },
    {
      title: 'Easy-to-Follow Methods',
      desc: 'Complex kitchen procedures are broken down into logical, repeatable micro-steps that stick with you forever.',
      icon: CheckCircle,
    },
    {
      title: 'Practical Recipes',
      desc: 'Formulas engineered for standard home ovens, regular grocery stores, and domestic stoves—not inaccessible industrial gear.',
      icon: BookOpen,
    },
    {
      title: 'Technique-Focused Training',
      desc: 'We emphasize emulsification, temperature management, and flavor balancing rather than mere ingredient lists.',
      icon: Sparkles,
    },
    {
      title: 'Beginner-Friendly Learning',
      desc: 'Zero culinary intimidation. Whether you have never chopped an onion or want to refine pastry skills, you are met where you are.',
      icon: Compass,
    },
    {
      title: 'Personal Guidance',
      desc: 'Capped batch sizes (max 6–8 participants) ensure individual feedback, troubleshooting, and continuous alumni support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-[#FFF8EE] relative border-t border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-bold tracking-widest uppercase mb-3">
            <span>THE SURUCHI STANDARD</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] mb-4">
            Why Learn with Suruchi
          </h2>
          <p className="text-sm sm:text-base text-[#38251D]/75">
            A boutique culinary experience rooted in patience, science, and authentic hospitality.
          </p>
        </div>

        {/* 6 Minimal Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF3E7] rounded-3xl p-8 border border-[#38251D]/10 flex flex-col justify-between text-left hover:border-[#38251D]/30 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/10 flex items-center justify-center text-[#B94E36] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#38251D] mb-3">
                    {r.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#38251D]/75 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#38251D]/5 flex items-center gap-2 text-[11px] font-semibold text-[#727B51]">
                  <span>Studio Core Value</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
