import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, ChefHat, Award, Users, BookOpen } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Hero: React.FC = () => {
  const { openEnquiryModal, getWhatsAppUrl } = useData();

  const handleScrollToClasses = () => {
    const el = document.getElementById('classes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTrainer = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FFF8EE] pt-8 pb-16">
      {/* Background ambient lighting and subtle organic accents */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C89B55]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#B94E36]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-semibold tracking-wider uppercase mb-6 border border-[#727B51]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#727B51]"></span>
              <span>SURUCHI FOOD TRAINING</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#38251D] font-bold tracking-tight leading-[1.15] mb-6">
              Learn the Art of Cooking,{' '}
              <span className="italic font-normal text-[#B94E36] block sm:inline">
                One Recipe at a Time.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#38251D]/80 leading-relaxed max-w-2xl mb-8 font-normal">
              Practical cooking experiences designed to help you learn techniques, understand recipes and create delicious food with confidence.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleScrollToClasses}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B94E36] text-[#FFF8EE] font-semibold text-base tracking-wide hover:bg-[#9E3E28] active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Explore Classes</span>
              </button>

              <button
                onClick={() => openEnquiryModal()}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-transparent border-2 border-[#38251D] text-[#38251D] font-semibold text-base hover:bg-[#38251D] hover:text-[#FFF8EE] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Your Training</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#727B51] hover:text-[#555D3A] py-2 px-3 transition-colors ml-auto sm:ml-0"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                </div>
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#38251D]/15 w-full max-w-lg">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#38251D]">100%</span>
                <span className="text-xs text-[#38251D]/70 font-medium">Hands-On Practice</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#B94E36]">8 Max</span>
                <span className="text-xs text-[#38251D]/70 font-medium">Seats Per Batch</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#727B51]">Technique</span>
                <span className="text-xs text-[#38251D]/70 font-medium">Over Blind Memory</span>
              </div>
            </div>

          </div>

          {/* Right Column: Culinary Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF8EE] group">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85"
                  alt="Trainer in teaching kitchen preparing fresh ingredients"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38251D]/70 via-transparent to-transparent"></div>

                {/* Overlaid caption badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FFF8EE]/95 backdrop-blur-md border border-[#38251D]/10 text-left shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#B94E36]"></span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#B94E36]">Live Culinary Studio</span>
                  </div>
                  <p className="text-xs text-[#38251D] font-medium leading-snug">
                    "Step into an organized kitchen where every measurement, flame level, and aroma is demystified."
                  </p>
                </div>
              </div>

              {/* Floating Floating Pill: Baking & Regional Specialization */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FFF8EE] border border-[#38251D]/10 shadow-lg px-4 py-2.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C89B55]/20 flex items-center justify-center text-[#C89B55]">
                  <ChefHat className="w-5 h-5 text-[#B94E36]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#38251D]">Culinary Science</p>
                  <p className="text-[10px] text-[#727B51]">Small-batch masterclasses</p>
                </div>
              </div>

              {/* Floating Pill: Instagram Community */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 bg-[#38251D] text-[#FFF8EE] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#FFF8EE]/20">
                <div className="w-8 h-8 rounded-full bg-[#B94E36] flex items-center justify-center text-[#FFF8EE]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold">@suruchifoodtraining</p>
                  <p className="text-[10px] text-[#FFF8EE]/70">Join our kitchen family</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Subtle Scrolling Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <button
            onClick={handleScrollToTrainer}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#38251D]/70 hover:text-[#B94E36] transition-colors py-2 px-4 rounded-full hover:bg-[#38251D]/5"
          >
            <span>Discover Our Kitchen</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
