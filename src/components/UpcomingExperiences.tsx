import React from 'react';
import { Calendar, Clock, MapPin, User, ChevronRight, MessageCircle, AlertCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

export const UpcomingExperiences: React.FC = () => {
  const { workshops, openEnquiryModal, getWhatsAppUrl } = useData();

  return (
    <section id="workshops" className="py-24 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B55]/15 text-[#38251D] text-xs font-bold tracking-widest uppercase mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#B94E36]" />
              <span>LIMITED INTIMATE BATCHES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              Upcoming Cooking Experiences
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#38251D]/75 text-sm sm:text-base max-w-md">
            Single-day intensive masterclasses and weekend workshops. Maximum 6–10 participants for individual attention.
          </p>
        </div>

        {/* Workshop Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((ws) => (
            <div
              key={ws.id}
              className="bg-[#FAF3E7] rounded-3xl overflow-hidden border border-[#38251D]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Event Photo Header with Date Badge */}
                <div className="relative h-44 overflow-hidden bg-[#38251D]">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38251D]/80 via-transparent to-transparent"></div>

                  {/* High-Contrast Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFF8EE] text-[#38251D] px-3 py-2 rounded-2xl shadow-lg border border-[#38251D]/10 text-center min-w-[64px]">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#B94E36] block">
                      {ws.dayOfWeek}
                    </span>
                    <span className="font-serif text-base font-bold leading-tight block">
                      {ws.dateBadge}
                    </span>
                  </div>

                  {/* Mode Badge */}
                  <div className="absolute top-3 right-3 bg-[#38251D]/80 backdrop-blur-md text-[#FFF8EE] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    {ws.trainingMode}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-[#38251D] mb-2 leading-snug group-hover:text-[#B94E36] transition-colors">
                    {ws.title}
                  </h3>

                  <p className="text-xs text-[#38251D]/75 line-clamp-2 leading-relaxed mb-4">
                    {ws.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-[#727B51] font-medium border-t border-[#38251D]/10 pt-3">
                    <div className="flex items-center gap-1.5 text-[#38251D]/80">
                      <Clock className="w-3.5 h-3.5 text-[#B94E36]" />
                      <span>{ws.timeSlot}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#38251D]/80">
                      <User className="w-3.5 h-3.5 text-[#727B51]" />
                      <span>Conducted by {ws.instructor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Booking */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="flex items-center justify-between py-3 border-t border-[#38251D]/10">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#727B51] block">Workshop Fee</span>
                    <span className="font-serif text-xl font-bold text-[#38251D]">
                      ₹{ws.fee.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-[#727B51] block">Availability</span>
                    <span className={`text-xs font-bold ${
                      ws.seatsAvailable <= 2 ? 'text-[#B94E36]' : 'text-[#727B51]'
                    }`}>
                      {ws.seatsAvailable} Seats Left
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => openEnquiryModal(`Workshop: ${ws.title} (${ws.dateBadge})`)}
                    className="w-full py-2.5 rounded-full border border-[#38251D]/30 text-xs font-semibold text-[#38251D] hover:bg-[#38251D] hover:text-[#FFF8EE] transition-colors text-center"
                  >
                    Enquire
                  </button>
                  <a
                    href={getWhatsAppUrl(`Workshop: ${ws.title} (${ws.dateBadge})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Reserve Seat</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
