import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, enquiryPrefilledCourse, courses, submitEnquiry, getWhatsAppUrl } = useData();

  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    city: '',
    courseName: '',
    preferredBatch: 'Upcoming Weekend Batch',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isEnquiryModalOpen) {
      setFormData((prev) => ({
        ...prev,
        courseName: enquiryPrefilledCourse || courses[0]?.name || 'General Inquiry'
      }));
      setSubmitted(false);
    }
  }, [isEnquiryModalOpen, enquiryPrefilledCourse, courses]);

  if (!isEnquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsappNumber) return;

    submitEnquiry({
      name: formData.name,
      whatsappNumber: formData.whatsappNumber,
      city: formData.city,
      courseName: formData.courseName,
      preferredBatch: formData.preferredBatch,
      message: formData.message || 'Interested in class registration.'
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#38251D]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FFF8EE] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#38251D]/20 text-left relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#38251D]/5 hover:bg-[#38251D]/10 text-[#38251D] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#727B51]/15 text-[#727B51] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#38251D]">
              Enquiry Sent Successfully
            </h3>
            <p className="text-xs sm:text-sm text-[#38251D]/80">
              We have noted your interest for <span className="font-bold text-[#B94E36]">{formData.courseName}</span>. Our team will contact you on WhatsApp ({formData.whatsappNumber}) shortly.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl(formData.courseName)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>
              <button
                onClick={closeEnquiryModal}
                className="w-full py-2.5 rounded-full border border-[#38251D]/20 text-xs font-semibold text-[#38251D]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>SURUCHI CULINARY STUDIO</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#38251D]">
                Book Your Class Seat
              </h2>
              <p className="text-xs text-[#38251D]/75 mt-1">
                Fill this quick reservation request or proceed directly via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                  Selected Course / Workshop
                </label>
                <select
                  value={formData.courseName}
                  onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="General Consultation">General Consultation / Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                    Preferred Batch
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Weekend"
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#727B51] mb-1">
                  Questions / Dietary notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Eggless preference, beginner query, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/15 text-xs text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                />
              </div>

              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-bold uppercase tracking-wider hover:bg-[#9E3E28] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Enquiry to Studio</span>
                </button>

                <div className="text-center">
                  <span className="text-[10px] text-[#38251D]/50 uppercase tracking-wider">— OR —</span>
                </div>

                <a
                  href={getWhatsAppUrl(formData.courseName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#25D366] text-[#128C7E] text-xs font-bold hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve Instantly on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
