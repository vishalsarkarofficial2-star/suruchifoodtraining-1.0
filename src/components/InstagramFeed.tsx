import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

export const InstagramFeed: React.FC = () => {
  const { contact } = useData();

  const instaPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      likes: '482',
      comments: '34',
      caption: 'When the crumb structure is so soft it dissolves. Weekend baking batch in full swing.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80',
      likes: '629',
      comments: '51',
      caption: 'The dhungar method: infusing whole cloves and pure ghee smoke into our dal makhani.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      likes: '394',
      comments: '29',
      caption: 'Open crumb sourdough morning. Hearing the blistered crust sing as it leaves the oven.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      likes: '512',
      comments: '42',
      caption: 'No sogginess, 100% crispy triangles. Student samosa masterclass triumphs!'
    },
  ];

  return (
    <section className="py-24 bg-[#FFF8EE] relative border-t border-[#38251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94E36]/10 text-[#B94E36] text-xs font-bold tracking-widest uppercase mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>COMMUNITY STORIES & BTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              Fresh From Instagram
            </h2>
          </div>
          
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-[#38251D] text-[#FFF8EE] text-xs font-semibold hover:bg-[#B94E36] transition-colors inline-flex items-center gap-2"
          >
            <span>Follow @suruchifoodtraining</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Square Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden bg-[#38251D] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#38251D]/10 block"
            >
              <img
                src={post.image}
                alt="Instagram post from Suruchi Food Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover overlay with likes and comment counters */}
              <div className="absolute inset-0 bg-[#38251D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left text-white">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-white/80" />
                </div>

                <div>
                  <p className="text-xs text-white/90 line-clamp-3 mb-3 leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#C89B55]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Handle Banner */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#38251D]/70">
            Tag us in your creations with <span className="font-bold text-[#38251D]">#SuruchiFoodTraining</span> to be featured in our weekly culinary highlight reel.
          </p>
        </div>

      </div>
    </section>
  );
};
