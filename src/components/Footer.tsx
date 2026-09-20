import React from 'react';
import { Instagram, MessageCircle, Heart, Lock, ArrowUp } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Footer: React.FC = () => {
  const { contact, openAdminModal, openEnquiryModal, getWhatsAppUrl } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#38251D] text-[#FFF8EE] pt-20 pb-12 relative overflow-hidden text-left border-t border-[#FFF8EE]/10">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B94E36]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#B94E36] flex items-center justify-center text-[#FFF8EE] font-serif font-bold text-xl shadow-md">
                S
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#FFF8EE] block leading-none">
                  Suruchi Food Training
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#C89B55] font-semibold block mt-1">
                  Professional Culinary Academy & Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF8EE]/70 leading-relaxed max-w-sm pt-2">
              Transforming curious home cooks into confident culinary creators. Hands-on, technique-first cooking and baking training in intimate studio batches.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B94E36] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Experiences */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#C89B55] uppercase tracking-wider">
              Experiences
            </h4>
            <ul className="space-y-2 text-[#FFF8EE]/75">
              <li>
                <a href="#courses" className="hover:text-[#FFF8EE] transition-colors">
                  All Masterclasses
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#FFF8EE] transition-colors">
                  Upcoming Workshops
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FFF8EE] transition-colors">
                  The Suruchi Method
                </a>
              </li>
              <li>
                <button onClick={() => openEnquiryModal('Private Coaching')} className="hover:text-[#FFF8EE] transition-colors text-left">
                  Private Studio Coaching
                </button>
              </li>
              <li>
                <button onClick={() => openEnquiryModal('Food Business Blueprint')} className="hover:text-[#FFF8EE] transition-colors text-left">
                  Food Entrepreneurship
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Explore */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#C89B55] uppercase tracking-wider">
              Studio & Stories
            </h4>
            <ul className="space-y-2 text-[#FFF8EE]/75">
              <li>
                <a href="#trainer" className="hover:text-[#FFF8EE] transition-colors">
                  About Chef Suruchi
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFF8EE] transition-colors">
                  Made in Our Kitchen
                </a>
              </li>
              <li>
                <a href="#students" className="hover:text-[#FFF8EE] transition-colors">
                  Student Creations
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#FFF8EE] transition-colors">
                  The Recipe Journal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFF8EE] transition-colors">
                  Visit Our Kitchen
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Hours & Inquiries */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#C89B55] uppercase tracking-wider">
              Kitchen Hours
            </h4>
            <p className="text-[#FFF8EE]/70 leading-relaxed">
              {contact.classHours}
            </p>
            <p className="text-[11px] text-[#C89B55]">
              Location: {contact.address}, {contact.city}
            </p>
            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal()}
                className="w-full py-2.5 rounded-full bg-[#B94E36] text-white text-xs font-semibold hover:bg-[#9E3E28] transition-colors"
              >
                Enquire for Next Batch
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8EE]/60">
          <p>
            © {new Date().getFullYear()} Suruchi Food Training. All rights reserved. Culinary academy for authentic mastery.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={openAdminModal}
              className="hover:text-[#FFF8EE] flex items-center gap-1 transition-colors text-[11px]"
            >
              <Lock className="w-3 h-3 text-[#C89B55]" />
              <span>Studio CMS Admin</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
