import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Instagram, ArrowUpRight, Sparkles, Film, Eye } from 'lucide-react';
import { useData } from '../context/DataContext';
import { CookingReel } from '../types';

export const CookingReels: React.FC = () => {
  const { reels, contact } = useData();
  const [activeReel, setActiveReel] = useState<CookingReel | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <section className="py-24 bg-[#FAF3E7] relative border-t border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>CULINARY SHORTS & REELS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              Inside Our Kitchen
            </h2>
          </div>
          
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38251D] hover:text-[#B94E36] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#B94E36]" />
            <span>Watch More on Instagram @suruchifoodtraining →</span>
          </a>
        </div>

        {/* 9:16 Vertical Video Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-[#38251D] cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-[#38251D]/10"
            >
              {/* Reel Thumbnail */}
              <img
                src={reel.thumbnailUrl}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#38251D] via-black/20 to-black/30"></div>

              {/* Top Details: Views & Tag */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-semibold">
                <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#C89B55]" />
                  <span>{reel.views}</span>
                </span>
                <span className="bg-[#B94E36] px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                  {reel.category}
                </span>
              </div>

              {/* Center Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FFF8EE]/90 group-hover:bg-[#B94E36] text-[#38251D] group-hover:text-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
              </div>

              {/* Bottom Caption & Title */}
              <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                <h3 className="font-serif text-sm font-bold leading-snug mb-1 line-clamp-2">
                  {reel.title}
                </h3>
                <p className="text-[11px] text-white/80 line-clamp-1">
                  {reel.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-[#C89B55] font-semibold">
                  <Instagram className="w-3 h-3" />
                  <span>Tap to watch story</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Instagram Link */}
        <div className="mt-12 bg-[#FFF8EE] rounded-3xl p-6 border border-[#38251D]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#B94E36]/10 flex items-center justify-center text-[#B94E36]">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-[#38251D]">
                Daily Kitchen Shorts, Tips & Class BTS
              </p>
              <p className="text-xs text-[#38251D]/70">
                Follow our official channel for quick 60-second culinary science breakdowns.
              </p>
            </div>
          </div>

          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#38251D] text-[#FFF8EE] text-xs font-semibold hover:bg-[#B94E36] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Follow @suruchifoodtraining</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Reel Preview Modal */}
      {activeReel && (
        <div
          className="fixed inset-0 z-50 bg-[#38251D]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="bg-[#1C120C] rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-white/10 text-left relative flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Reel Header */}
            <div className="p-4 flex items-center justify-between text-white border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold">@suruchifoodtraining</span>
                <span className="text-[10px] bg-[#B94E36] px-2 py-0.5 rounded-full">Reel</span>
              </div>
              <button
                onClick={() => setActiveReel(null)}
                className="text-white/70 hover:text-white text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>

            {/* Video / Visual Simulation Canvas */}
            <div className="relative aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeReel.thumbnailUrl}
                alt={activeReel.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

              {/* Play Simulation State */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif text-base font-bold mb-1 leading-snug">
                  {activeReel.title}
                </h4>
                <p className="text-xs text-white/90 leading-relaxed mb-3">
                  {activeReel.caption}
                </p>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#B94E36] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open Full Reel on Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
