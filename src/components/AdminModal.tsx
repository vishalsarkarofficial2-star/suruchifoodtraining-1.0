import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Plus, Trash2, Edit3, Save, Calendar, BookOpen, Camera, Users, Settings, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Course, Workshop, GalleryItem, RecipeArticle } from '../types';

export const AdminModal: React.FC = () => {
  const {
    isAdminModalOpen,
    closeAdminModal,
    courses,
    updateCourse,
    addCourse,
    deleteCourse,
    workshops,
    updateWorkshop,
    addWorkshop,
    deleteWorkshop,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    recipes,
    addRecipe,
    deleteRecipe,
    enquiries,
    updateEnquiryStatus,
    contact,
    updateContact,
    trainer,
    updateTrainer,
    resetToDefaults
  } = useData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'courses' | 'workshops' | 'enquiries' | 'contact' | 'trainer'>('courses');

  // Editing state for courses
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [editCourseData, setEditCourseData] = useState<Partial<Course>>({});

  // Editing state for workshops
  const [editingWorkshopId, setEditingWorkshopId] = useState<string | null>(null);
  const [editWorkshopData, setEditWorkshopData] = useState<Partial<Workshop>>({});

  // Contact form state
  const [contactForm, setContactForm] = useState(contact);
  const [trainerForm, setTrainerForm] = useState(trainer);
  const [savedFeedback, setSavedFeedback] = useState<string | null>(null);

  if (!isAdminModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'suruchi' || passcode === 'admin123' || passcode === 'suruchi123' || passcode === '') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const notifySaved = (msg: string) => {
    setSavedFeedback(msg);
    setTimeout(() => setSavedFeedback(null), 3000);
  };

  const handleSaveContact = () => {
    updateContact(contactForm);
    notifySaved('Contact details updated successfully!');
  };

  const handleSaveTrainer = () => {
    updateTrainer(trainerForm);
    notifySaved('Trainer biography updated successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#38251D]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FFF8EE] rounded-3xl max-w-5xl w-full h-[90vh] shadow-2xl border border-[#38251D]/20 text-left relative flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#38251D] text-[#FFF8EE] p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#B94E36] flex items-center justify-center text-white font-bold text-sm">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                Suruchi Studio CMS & Management
              </h2>
              <p className="text-[11px] text-[#C89B55]">
                Direct live content management for classes, dates, fees, and student leads
              </p>
            </div>
          </div>

          <button
            onClick={closeAdminModal}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate if not logged in */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6 text-center">
            <div className="bg-[#FAF3E7] p-8 sm:p-10 rounded-3xl border border-[#38251D]/10 max-w-md w-full">
              <div className="w-12 h-12 rounded-full bg-[#B94E36]/15 text-[#B94E36] flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38251D] mb-1">
                Studio Admin Authentication
              </h3>
              <p className="text-xs text-[#38251D]/75 mb-6">
                Enter passcode to access course editor, update batch schedules, and view WhatsApp enquiries.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Enter passcode (e.g. suruchi123)"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#38251D]/20 text-center text-sm font-semibold tracking-wider text-[#38251D] focus:outline-none focus:border-[#B94E36]"
                  />
                  {authError && (
                    <p className="text-[11px] text-[#B94E36] font-semibold mt-1">
                      Incorrect passcode. (Tip: Use "suruchi123" or click login)
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#B94E36] hover:bg-[#9E3E28] text-[#FFF8EE] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Unlock Admin Dashboard
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-[#38251D]/10 text-[11px] text-[#38251D]/60">
                Default access code: <span className="font-mono font-bold text-[#38251D]">suruchi123</span>
              </div>
            </div>
          </div>
        ) : (
          /* Logged In Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Feedback notification toast */}
            {savedFeedback && (
              <div className="bg-[#727B51] text-white text-xs font-semibold py-2 px-6 text-center animate-in fade-in">
                {savedFeedback}
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="bg-[#FAF3E7] border-b border-[#38251D]/10 px-6 py-2.5 flex items-center justify-between overflow-x-auto gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'courses' ? 'bg-[#38251D] text-[#FFF8EE]' : 'text-[#38251D]/70 hover:bg-[#38251D]/10'
                  }`}
                >
                  Courses ({courses.length})
                </button>

                <button
                  onClick={() => setActiveTab('workshops')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'workshops' ? 'bg-[#38251D] text-[#FFF8EE]' : 'text-[#38251D]/70 hover:bg-[#38251D]/10'
                  }`}
                >
                  Workshops & Dates ({workshops.length})
                </button>

                <button
                  onClick={() => setActiveTab('enquiries')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all relative ${
                    activeTab === 'enquiries' ? 'bg-[#38251D] text-[#FFF8EE]' : 'text-[#38251D]/70 hover:bg-[#38251D]/10'
                  }`}
                >
                  <span>Student Enquiries</span>
                  {enquiries.filter((e) => e.status === 'New').length > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-[#B94E36] text-[10px] text-white font-bold">
                      {enquiries.filter((e) => e.status === 'New').length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'contact' ? 'bg-[#38251D] text-[#FFF8EE]' : 'text-[#38251D]/70 hover:bg-[#38251D]/10'
                  }`}
                >
                  Studio & Contact
                </button>

                <button
                  onClick={() => setActiveTab('trainer')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'trainer' ? 'bg-[#38251D] text-[#FFF8EE]' : 'text-[#38251D]/70 hover:bg-[#38251D]/10'
                  }`}
                >
                  Trainer Bio
                </button>
              </div>

              <button
                onClick={() => {
                  if (confirm('Reset all courses, workshops and content back to factory initial demo state?')) {
                    resetToDefaults();
                    notifySaved('Reset to initial data successfully.');
                  }
                }}
                className="text-[11px] text-[#B94E36] hover:underline font-semibold whitespace-nowrap pl-4"
              >
                Reset Demo Data
              </button>
            </div>

            {/* Tab Panels */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* TAB 1: COURSES MANAGEMENT */}
              {activeTab === 'courses' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#38251D]">Manage Cooking Courses</h3>
                      <p className="text-xs text-[#38251D]/70">Edit fees, duration, badge, or add new masterclasses.</p>
                    </div>
                    <button
                      onClick={() => {
                        addCourse({
                          name: 'New Culinary Masterclass',
                          category: 'Baking & Pastry',
                          categoryCode: 'baking',
                          difficulty: 'Beginner Friendly',
                          duration: '2 Days (8 Hours)',
                          trainingMode: 'Offline Studio',
                          startingFee: 3500,
                          seatsTotal: 10,
                          seatsAvailable: 8,
                          upcomingBatch: 'Next Weekend',
                          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
                          shortDescription: 'Hands-on culinary foundation class.',
                          introDetailed: 'In-depth comprehensive cooking masterclass designed for all skill levels.',
                          learningOutcomes: [
                            { number: '01', title: 'Core Foundations', description: 'Understanding knife work and heat.' },
                            { number: '02', title: 'Ingredient Chemistry', description: 'How flavors develop.' }
                          ],
                          recipesCovered: ['Signature Recipe 1', 'Signature Recipe 2'],
                          requiredMaterials: ['All ingredients provided in studio', 'Take-home box included'],
                          batchSchedule: 'Saturday & Sunday, 10:00 AM – 2:00 PM',
                          location: 'Suruchi Studio, Mumbai',
                          skillLevel: 'Beginner to Intermediate',
                          whoCanJoin: 'Anyone passionate about food',
                          trainingLanguage: 'English & Hindi bilingual',
                          certificateNote: 'Course participation certificate awarded upon completion.',
                          isActive: true
                        } as any);
                        notifySaved('New course created. You can now edit its details.');
                      }}
                      className="px-4 py-2 rounded-full bg-[#B94E36] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Course</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {courses.map((course) => {
                      const isEditing = editingCourseId === course.id;
                      return (
                        <div
                          key={course.id}
                          className="bg-[#FAF3E7] p-5 rounded-2xl border border-[#38251D]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={course.image}
                              alt={course.name}
                              className="w-16 h-16 rounded-xl object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase bg-[#B94E36] text-white px-2 py-0.5 rounded-full">
                                  {course.category}
                                </span>
                                <span className="text-xs font-semibold text-[#727B51]">
                                  {course.duration}
                                </span>
                              </div>
                              <h4 className="font-serif text-base font-bold text-[#38251D] mt-0.5">
                                {course.name}
                              </h4>
                              <p className="text-xs text-[#38251D]/80">
                                Fee: <strong className="text-[#B94E36]">₹{course.startingFee}</strong> • Batch: {course.upcomingBatch} • Seats left: {course.seatsAvailable}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end md:self-auto">
                            {isEditing ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    updateCourse(course.id, editCourseData);
                                    setEditingCourseId(null);
                                    notifySaved('Course saved!');
                                  }}
                                  className="px-3 py-1.5 rounded-lg bg-[#727B51] text-white text-xs font-bold flex items-center gap-1"
                                >
                                  <Save className="w-3.5 h-3.5" />
                                  <span>Save</span>
                                </button>
                                <button
                                  onClick={() => setEditingCourseId(null)}
                                  className="px-3 py-1.5 rounded-lg bg-gray-200 text-xs font-semibold"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    setEditingCourseId(course.id);
                                    setEditCourseData(course);
                                  }}
                                  className="px-3 py-1.5 rounded-lg bg-[#FFF8EE] border border-[#38251D]/20 text-[#38251D] text-xs font-bold hover:bg-[#38251D] hover:text-white transition-colors flex items-center gap-1"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>

                                <button
                                  onClick={() => {
                                    if (confirm(`Delete course "${course.name}"?`)) {
                                      deleteCourse(course.id);
                                      notifySaved('Course removed.');
                                    }
                                  }}
                                  className="p-1.5 rounded-lg text-[#B94E36] hover:bg-[#B94E36]/10 transition-colors"
                                  title="Delete course"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Inline Edit Form when active */}
                          {isEditing && (
                            <div className="w-full pt-4 mt-2 border-t border-[#38251D]/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Course Title</label>
                                <input
                                  type="text"
                                  value={editCourseData.name || ''}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, name: e.target.value })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Fee (₹)</label>
                                <input
                                  type="number"
                                  value={editCourseData.startingFee || 0}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, startingFee: Number(e.target.value) })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Upcoming Batch Date</label>
                                <input
                                  type="text"
                                  value={editCourseData.upcomingBatch || ''}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, upcomingBatch: e.target.value })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Seats Available</label>
                                <input
                                  type="number"
                                  value={editCourseData.seatsAvailable || 0}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, seatsAvailable: Number(e.target.value) })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Duration</label>
                                <input
                                  type="text"
                                  value={editCourseData.duration || ''}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, duration: e.target.value })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-[#727B51] block mb-1">Image URL</label>
                                <input
                                  type="text"
                                  value={editCourseData.image || ''}
                                  onChange={(e) => setEditCourseData({ ...editCourseData, image: e.target.value })}
                                  className="w-full p-2 rounded-lg bg-white border border-[#38251D]/20"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: WORKSHOPS & DATES */}
              {activeTab === 'workshops' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#38251D]">Manage Upcoming Workshops</h3>
                      <p className="text-xs text-[#38251D]/70">Change workshop dates, fees, and seat availability.</p>
                    </div>

                    <button
                      onClick={() => {
                        const newWs: Workshop = {
                          id: `ws-${Date.now()}`,
                          title: 'Specialty Masterclass',
                          dateBadge: '15 NOV',
                          dayOfWeek: 'Saturday',
                          fullDate: 'November 15, 2026',
                          timeSlot: '10:00 AM – 2:30 PM',
                          trainingMode: 'Offline',
                          fee: 2800,
                          seatsTotal: 8,
                          seatsAvailable: 6,
                          instructor: 'Chef Suruchi',
                          image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=800&q=80',
                          description: 'Intimate single-day immersive studio masterclass.'
                        };
                        addWorkshop(newWs);
                        notifySaved('Workshop added successfully.');
                      }}
                      className="px-4 py-2 rounded-full bg-[#B94E36] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Workshop</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workshops.map((ws) => (
                      <div key={ws.id} className="bg-[#FAF3E7] p-5 rounded-2xl border border-[#38251D]/15 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-[#B94E36] uppercase">
                              {ws.dayOfWeek} • {ws.dateBadge}
                            </span>
                            <h4 className="font-serif text-base font-bold text-[#38251D]">{ws.title}</h4>
                            <p className="text-xs text-[#38251D]/70">{ws.timeSlot} • {ws.trainingMode}</p>
                          </div>
                          <button
                            onClick={() => {
                              if (confirm(`Remove workshop "${ws.title}"?`)) {
                                deleteWorkshop(ws.id);
                                notifySaved('Workshop removed.');
                              }
                            }}
                            className="text-[#B94E36] hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <label className="font-semibold text-[#727B51] block text-[10px]">Fee (₹)</label>
                            <input
                              type="number"
                              defaultValue={ws.fee}
                              onBlur={(e) => updateWorkshop(ws.id, { fee: Number(e.target.value) })}
                              className="w-full p-1.5 rounded-lg bg-white border border-[#38251D]/20 font-bold"
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#727B51] block text-[10px]">Seats Left</label>
                            <input
                              type="number"
                              defaultValue={ws.seatsAvailable}
                              onBlur={(e) => updateWorkshop(ws.id, { seatsAvailable: Number(e.target.value) })}
                              className="w-full p-1.5 rounded-lg bg-white border border-[#38251D]/20 font-bold"
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#727B51] block text-[10px]">Date Badge (e.g. 18 OCT)</label>
                            <input
                              type="text"
                              defaultValue={ws.dateBadge}
                              onBlur={(e) => updateWorkshop(ws.id, { dateBadge: e.target.value })}
                              className="w-full p-1.5 rounded-lg bg-white border border-[#38251D]/20 font-bold"
                            />
                          </div>

                          <div>
                            <label className="font-semibold text-[#727B51] block text-[10px]">Day (e.g. Saturday)</label>
                            <input
                              type="text"
                              defaultValue={ws.dayOfWeek}
                              onBlur={(e) => updateWorkshop(ws.id, { dayOfWeek: e.target.value })}
                              className="w-full p-1.5 rounded-lg bg-white border border-[#38251D]/20 font-bold"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: STUDENT ENQUIRIES DASHBOARD */}
              {activeTab === 'enquiries' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#38251D]">Website Enquiries & Leads</h3>
                    <p className="text-xs text-[#38251D]/70">
                      Direct enquiries submitted by visitors for classes and studio sessions.
                    </p>
                  </div>

                  {enquiries.length === 0 ? (
                    <div className="bg-[#FAF3E7] p-8 rounded-2xl text-center text-xs text-[#38251D]/60">
                      No student enquiries received yet. Submissions from the website form will appear here.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {enquiries.map((enq) => (
                        <div
                          key={enq.id}
                          className="bg-[#FAF3E7] p-5 rounded-2xl border border-[#38251D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-serif font-bold text-sm text-[#38251D]">{enq.name}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                enq.status === 'New' ? 'bg-[#B94E36] text-white' : enq.status === 'Contacted' ? 'bg-[#C89B55] text-white' : 'bg-[#727B51] text-white'
                              }`}>
                                {enq.status}
                              </span>
                            </div>
                            <p className="text-[#38251D]/80">
                              <strong>Course:</strong> {enq.courseName} • <strong>Batch:</strong> {enq.preferredBatch}
                            </p>
                            <p className="text-[#38251D]/70">
                              <strong>WhatsApp:</strong> {enq.whatsappNumber} {enq.city ? `(${enq.city})` : ''}
                            </p>
                            {enq.message && (
                              <p className="italic text-[#38251D]/60 pt-1">
                                "{enq.message}"
                              </p>
                            )}
                            <span className="text-[10px] text-[#38251D]/40 block">
                              Received: {new Date(enq.createdAt).toLocaleString()}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <a
                              href={`https://wa.me/${enq.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${enq.name}, this is Chef Suruchi from Suruchi Food Training regarding your enquiry for ${enq.courseName}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-full bg-[#25D366] text-white text-[11px] font-bold flex items-center gap-1 shadow-sm"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>

                            <select
                              value={enq.status}
                              onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                              className="px-2.5 py-1.5 rounded-xl bg-white border border-[#38251D]/20 text-xs font-semibold"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Enrolled">Enrolled</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: STUDIO & CONTACT INFO */}
              {activeTab === 'contact' && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#38251D]">Studio & Contact Information</h3>
                    <p className="text-xs text-[#38251D]/70">
                      Update your official phone number, WhatsApp, studio address, and class timings.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">WhatsApp Number (with country code)</label>
                      <input
                        type="text"
                        value={contactForm.whatsapp}
                        onChange={(e) => setContactForm({ ...contactForm, whatsapp: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Phone Number (Display)</label>
                      <input
                        type="text"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Studio Address</label>
                      <input
                        type="text"
                        value={contactForm.address}
                        onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">City / Region</label>
                      <input
                        type="text"
                        value={contactForm.city}
                        onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Instagram Profile URL</label>
                      <input
                        type="text"
                        value={contactForm.instagram}
                        onChange={(e) => setContactForm({ ...contactForm, instagram: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Class & Studio Operating Hours</label>
                      <input
                        type="text"
                        value={contactForm.classHours}
                        onChange={(e) => setContactForm({ ...contactForm, classHours: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <button
                      onClick={handleSaveContact}
                      className="px-6 py-2.5 rounded-full bg-[#B94E36] text-white text-xs font-bold shadow-md hover:bg-[#9E3E28] transition-colors"
                    >
                      Save Contact Changes
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: TRAINER BIO */}
              {activeTab === 'trainer' && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#38251D]">Trainer Biography & Credentials</h3>
                    <p className="text-xs text-[#38251D]/70">
                      Customize Suruchi's personal bio, teaching philosophy, and experience highlights.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Trainer Name</label>
                      <input
                        type="text"
                        value={trainerForm.name}
                        onChange={(e) => setTrainerForm({ ...trainerForm, name: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Professional Title</label>
                      <input
                        type="text"
                        value={trainerForm.title}
                        onChange={(e) => setTrainerForm({ ...trainerForm, title: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Tagline</label>
                      <input
                        type="text"
                        value={trainerForm.tagline}
                        onChange={(e) => setTrainerForm({ ...trainerForm, tagline: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">In-Depth Background & Story</label>
                      <textarea
                        rows={4}
                        value={trainerForm.bioStory}
                        onChange={(e) => setTrainerForm({ ...trainerForm, bioStory: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Teaching Philosophy</label>
                      <textarea
                        rows={2}
                        value={trainerForm.trainingPhilosophy}
                        onChange={(e) => setTrainerForm({ ...trainerForm, trainingPhilosophy: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#727B51] block mb-1">Portrait Photo URL</label>
                      <input
                        type="text"
                        value={trainerForm.portraitUrl}
                        onChange={(e) => setTrainerForm({ ...trainerForm, portraitUrl: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#FAF3E7] border border-[#38251D]/20 text-[#38251D]"
                      />
                    </div>

                    <button
                      onClick={handleSaveTrainer}
                      className="px-6 py-2.5 rounded-full bg-[#B94E36] text-white text-xs font-bold shadow-md hover:bg-[#9E3E28] transition-colors"
                    >
                      Save Trainer Bio
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
