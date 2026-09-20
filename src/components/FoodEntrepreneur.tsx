import React from 'react';
import { Briefcase, TrendingUp, Package, Scale, Calculator, UtensilsCrossed, ShieldCheck, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export const FoodEntrepreneur: React.FC = () => {
  const { openEnquiryModal, setSelectedCourse, courses } = useData();

  const businessTopics = [
    {
      title: 'Recipe Standardization',
      desc: 'Formulating metric gram recipe cards so batches taste identical every time, regardless of who cooks.',
      icon: Scale
    },
    {
      title: 'Food Costing & Yields',
      desc: 'Calculating raw ingredient yield loss, cost-per-portion, and protecting 60%+ healthy profit margins.',
      icon: Calculator
    },
    {
      title: 'Commercial Packaging',
      desc: 'Selecting grease-proof, temperature-stable eco packaging that withstands 45-minute bike delivery transits.',
      icon: Package
    },
    {
      title: 'Kitchen Workflow & Prep',
      desc: 'Assembly line stations for home kitchens and cloud kitchens to dispatch 30+ orders without chaos.',
      icon: UtensilsCrossed
    },
    {
      title: 'Pricing & Menu Strategy',
      desc: 'Decoupling yourself from cheap price wars with signature hero dishes and high-margin add-ons.',
      icon: TrendingUp
    },
    {
      title: 'FSSAI & Hygiene Norms',
      desc: 'Statutory compliance, temperature logs, allergen disclosure, and best-practice commercial sanitation.',
      icon: ShieldCheck
    }
  ];

  const handleExploreBusiness = () => {
    // Find the business course or open enquiry
    const bizCourse = courses.find((c) => c.categoryCode === 'business');
    if (bizCourse) {
      setSelectedCourse(bizCourse);
    } else {
      openEnquiryModal('Food Business Training');
    }
  };

  return (
    <section className="py-24 bg-[#38251D] text-[#FFF8EE] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B94E36]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C89B55]/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-bold tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>COMMERCIAL CULINARY PATHWAY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            From Kitchen Skills to Food Business
          </h2>

          <p className="text-base sm:text-lg text-[#FFF8EE]/80 leading-relaxed font-normal">
            “Learn the practical foundations needed to turn your cooking skills into something bigger.”
          </p>
        </div>

        {/* 6 Business Foundations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                className="bg-[#FFF8EE]/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-[#FFF8EE]/10 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C89B55]/20 text-[#C89B55] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-[#FFF8EE]">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF8EE]/70 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-left">
          <p className="text-xs sm:text-sm text-[#FFF8EE]/80 max-w-xl">
            Whether you want to launch a weekend home bakery, a regional catering service, or an artisanal dessert brand, we give you realistic operational playbooks.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExploreBusiness}
              className="px-8 py-4 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-bold uppercase tracking-wider hover:bg-[#9E3E28] transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore Business Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
