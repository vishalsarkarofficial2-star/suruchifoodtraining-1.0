import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Camera, ChefHat, User } from 'lucide-react';
import { useData } from '../context/DataContext';
import { GalleryItem } from '../types';

export const FoodShowcase: React.FC = () => {
  const { gallery, lightboxImage, setLightboxImage } = useData();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Dishes' },
    { id: 'baking', label: 'Baking & Pastry' },
    { id: 'main-course', label: 'Main Course' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'desserts', label: 'Desserts & Sweets' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'student-creations', label: 'Student Creations' },
  ];

  const filteredItems = gallery.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#FAF3E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>CULINARY GALLERY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] mb-4">
            Made in Our Kitchen
          </h2>
          <p className="text-[#38251D]/75 text-sm sm:text-base">
            No stock graphics. Real recipes cooked, baked, and plated in our studio stations by our trainer and passionate students.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#38251D] text-[#FFF8EE] shadow-sm'
                  : 'bg-[#FFF8EE] text-[#38251D]/80 hover:bg-[#38251D]/10 hover:text-[#38251D] border border-[#38251D]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#38251D]/10 bg-[#38251D]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#38251D]/90 via-[#38251D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-left text-[#FFF8EE]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#C89B55] font-bold mb-1">
                  <span>{item.author}</span>
                </div>

                <h3 className="font-serif text-lg font-bold leading-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#FFF8EE]/80 line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-[#FFF8EE]/90 pt-2 border-t border-white/10">
                  <span className="text-[10px] tracking-wider uppercase bg-[#B94E36] px-2.5 py-0.5 rounded-full font-medium">
                    {item.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Dish</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#38251D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-[#FFF8EE] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#38251D]/20 text-left relative flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#38251D]/80 hover:bg-[#38251D] text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Big Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="w-full h-full max-h-[550px] object-cover"
              />
            </div>

            {/* Right: Dish & Technique Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#B94E36] text-[#FFF8EE] text-[11px] font-bold uppercase tracking-wider">
                    {lightboxImage.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-[#727B51] font-semibold">
                    {lightboxImage.author}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#38251D] mb-4 leading-snug">
                  {lightboxImage.title}
                </h3>

                <p className="text-sm text-[#38251D]/80 leading-relaxed mb-6">
                  {lightboxImage.description}
                </p>

                <div className="bg-[#FAF3E7] p-4 rounded-2xl border border-[#38251D]/10 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#727B51] block">
                    Kitchen Technique Highlight
                  </span>
                  <p className="text-xs text-[#38251D]/90">
                    Prepared with zero preservatives, utilizing temperature calibration and natural emulsification taught during training.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#38251D]/10 mt-6">
                <a
                  href="https://www.instagram.com/suruchifoodtraining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#38251D] text-[#FFF8EE] text-xs font-semibold hover:bg-[#B94E36] transition-colors flex items-center justify-center gap-2"
                >
                  <span>See Creation on Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
