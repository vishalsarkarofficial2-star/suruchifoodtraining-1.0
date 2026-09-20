import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Instagram, Clock, Navigation, ArrowUpRight, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';

export const ContactSection: React.FC = () => {
  const { contact, openEnquiryModal, getWhatsAppUrl } = useData();

  return (
    <section id="contact" className="py-24 bg-[#FAF3E7] relative border-t border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#B94E36]" />
            <span>VISIT OUR TEACHING KITCHEN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] mb-4">
            Come Cook With Us
          </h2>
          <p className="text-sm sm:text-base text-[#38251D]/75">
            Step into our equipped culinary studio. Feel free to reach out for studio visits, batch availability, or personalized consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-[#FFF8EE] rounded-3xl p-6 sm:p-7 border border-[#38251D]/10 text-left shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B94E36]/10 text-[#B94E36] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                    Training Centre Address
                  </span>
                  <p className="font-serif text-lg font-bold text-[#38251D] mb-1">
                    {contact.address}
                  </p>
                  <p className="text-xs text-[#38251D]/70 mb-3">{contact.city}</p>
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B94E36] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Timings & WhatsApp Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#FFF8EE] rounded-3xl p-6 border border-[#38251D]/10 text-left shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-[#C89B55]/20 text-[#38251D] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-[#B94E36]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                  Class & Studio Hours
                </span>
                <p className="text-xs text-[#38251D] font-medium leading-relaxed">
                  {contact.classHours}
                </p>
              </div>

              <div className="bg-[#FFF8EE] rounded-3xl p-6 border border-[#38251D]/10 text-left shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#727B51] block mb-1">
                    Instant WhatsApp
                  </span>
                  <p className="text-xs font-bold text-[#38251D]">{contact.whatsappDisplay}</p>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-bold text-[#128C7E] hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Us Directly →</span>
                </a>
              </div>

            </div>

            {/* Email & Phone Card */}
            <div className="bg-[#FFF8EE] rounded-3xl p-6 border border-[#38251D]/10 text-left shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#727B51]/15 text-[#727B51] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#727B51] block">
                    Email Inquiries
                  </span>
                  <a href={`mailto:${contact.email}`} className="text-xs font-semibold text-[#38251D] hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#38251D]/10 text-[#38251D] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#727B51] block">
                    Call Studio
                  </span>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-xs font-semibold text-[#38251D] hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview Card */}
          <div className="lg:col-span-6 bg-[#FFF8EE] rounded-3xl p-6 sm:p-8 border border-[#38251D]/10 text-left flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#38251D]">
                    Studio Location & Map
                  </span>
                </div>
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#B94E36] flex items-center gap-1 hover:underline"
                >
                  <span>Open Full Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled Map Graphic & Placeholder Visual */}
              <div className="relative rounded-2xl overflow-hidden h-64 bg-[#38251D] border border-[#38251D]/10 mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                  alt="Culinary studio district map view"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#38251D]/40"></div>

                {/* Pin on Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#FFF8EE] px-4 py-2.5 rounded-2xl shadow-2xl border border-[#38251D]/20 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#B94E36] text-white flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-serif text-xs font-bold text-[#38251D]">Suruchi Food Training</p>
                      <p className="text-[10px] text-[#727B51]">Teaching Studio & Lab</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#38251D]/80">
                <p>
                  <strong>Parking:</strong> Dedicated visitor parking spaces available at the venue.
                </p>
                <p>
                  <strong>Metro / Transit:</strong> 5-minute walk from Central Station / Metro Line.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#38251D]/10 mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 rounded-full bg-[#38251D] text-[#FFF8EE] text-xs font-semibold text-center hover:bg-[#B94E36] transition-colors"
              >
                Get Directions
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold text-center hover:bg-[#1ebd59] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
