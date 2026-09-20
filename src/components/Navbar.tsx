import React, { useState, useEffect } from 'react';
import { Instagram, Phone, MessageCircle, Menu, X, Shield, ChevronRight, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';

export const Navbar: React.FC = () => {
  const { contact, openEnquiryModal, setIsAdminOpen, isAdminAuthenticated } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Philosophy', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Student Stories', href: '#students' },
    { label: 'Recipe Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#38251D] text-[#FFF8EE] text-xs py-1.5 px-4 text-center border-b border-[#38251D]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#FFF8EE]/80">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C89B55] animate-pulse"></span>
            <span>Intimate batches with personal culinary guidance</span>
          </div>
          <p className="text-center mx-auto sm:mx-0 font-medium tracking-wide">
            New Hands-On Masterclasses Open for Enrollment • Limited 8 Seats Per Batch
          </p>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#FFF8EE]/90 hover:text-[#C89B55] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{contact.instagramHandle}</span>
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1 text-[#FFF8EE]/60 hover:text-[#FFF8EE] transition-colors"
              title="Admin Portal"
            >
              <Shield className="w-3 h-3" />
              <span>{isAdminAuthenticated ? 'Admin Panel' : 'Studio Login'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF8EE]/95 backdrop-blur-md shadow-sm border-b border-[#38251D]/10 py-3'
            : 'bg-[#FFF8EE] py-4 border-b border-[#38251D]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group text-left">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#38251D] group-hover:text-[#B94E36] transition-colors">
                SURUCHI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B94E36]"></span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#727B51]">
              Food Training & Culinary Studio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#38251D]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B94E36] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B94E36] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                'Hi Suruchi Food Training, I would like to know about upcoming cooking classes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#38251D] hover:bg-[#B94E36]/10 hover:text-[#B94E36] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => openEnquiryModal()}
              className="px-5 py-2.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-sm font-semibold tracking-wide hover:bg-[#9E3E28] active:scale-[0.98] transition-all shadow-sm hover:shadow flex items-center gap-1.5"
            >
              <span>BOOK A CLASS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openEnquiryModal()}
              className="px-3 py-1.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-semibold"
            >
              Book Class
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#38251D] hover:text-[#B94E36]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF8EE] border-b border-[#38251D]/15 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#38251D] hover:text-[#B94E36] py-1 border-b border-[#38251D]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#727B51] font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: {contact.instagramHandle}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="flex items-center gap-2 text-sm text-[#38251D]/70 hover:text-[#38251D]"
                >
                  <Shield className="w-4 h-4" />
                  <span>{isAdminAuthenticated ? 'Admin Dashboard' : 'Studio Admin'}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiryModal();
                  }}
                  className="w-full py-3 rounded-full bg-[#B94E36] text-[#FFF8EE] text-center font-semibold text-sm mt-1"
                >
                  Book Your Training
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
