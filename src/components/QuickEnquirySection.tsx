import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';

export const QuickEnquirySection: React.FC = () => {
  const { courses, submitEnquiry, getWhatsAppUrl } = useData();

  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    city: '',
    courseName: courses[0]?.name || 'General Cooking Consultation',
    preferredBatch: 'Upcoming Weekend Batch',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsappNumber) return;

    submitEnquiry({
      name: formData.name,
      whatsappNumber: formData.whatsappNumber,
      city: formData.city,
      courseName: formData.courseName,
      preferredBatch: formData.preferredBatch,
      message: formData.message || 'Interested in joining upcoming batch.'
    });

    setSubmitted(true);
  };

  return (
    <section id="enquire" className="py-24 bg-[#FFF8EE] relative border-t border-[#38251D]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF3E7] rounded-3xl p-8 sm:p-12 border border-[#38251D]/10 shadow-sm text-left">
          
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESERVE & INQUIRE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38251D] mb-2">
              Start Your Cooking Journey
            </h2>
            <p className="text-sm text-[#38251D]/75">
              Fill out this short form or reach us directly on WhatsApp for upcoming batch schedules, syllabus details, and fee structures.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#FFF8EE] p-8 rounded-2xl border border-[#727B51]/30 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#727B51]/15 text-[#727B51] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#38251D]">
                Thank you, {formData.name}!
              </h3>
              <p className="text-sm text-[#38251D]/80 max-w-md mx-auto">
                Your enquiry for <span className="font-bold text-[#B94E36]">{formData.courseName}</span> has been received. Our culinary coordinator will message you on WhatsApp ({formData.whatsappNumber}) shortly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(formData.courseName, `I just submitted an enquiry on the website. Looking forward to details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebd59] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      whatsappNumber: '',
                      city: '',
                      courseName: courses[0]?.name || '',
                      preferredBatch: 'Upcoming Weekend Batch',
                      message: ''
                    });
                  }}
                  className="px-5 py-3 rounded-full border border-[#38251D]/20 text-xs font-semibold text-[#38251D]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                    Your City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Pune, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                    Interested Course / Training
                  </label>
                  <select
                    value={formData.courseName}
                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="Custom Culinary Coaching">Custom Private Studio Coaching</option>
                    <option value="Food Business Blueprint">Food Business Mentorship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                  Preferred Batch Timing
                </label>
                <input
                  type="text"
                  placeholder="e.g. Weekend Saturday 10 AM, Weekday Evening, or Flexible"
                  value={formData.preferredBatch}
                  onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#727B51] mb-1.5">
                  Message / Specific Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your culinary goals, eggless preferences, or specific techniques you wish to master..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/15 text-sm text-[#38251D] focus:outline-none focus:border-[#B94E36] transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#38251D]/60">
                  🔒 We respect your privacy. No spam or marketing calls.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-bold uppercase tracking-wider hover:bg-[#9E3E28] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
