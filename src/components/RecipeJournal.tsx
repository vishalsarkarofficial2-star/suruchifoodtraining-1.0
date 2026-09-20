import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ChefHat, ArrowUpRight, X, Check, Utensils } from 'lucide-react';
import { useData } from '../context/DataContext';
import { RecipeArticle } from '../types';

export const RecipeJournal: React.FC = () => {
  const { recipes, selectedArticle, setSelectedArticle } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Recipes',
    'Cooking Tips',
    'Baking',
    'Kitchen Knowledge',
    'Ingredients',
    'Food Business',
  ];

  const filteredRecipes = recipes.filter((r) => {
    if (activeCategory === 'All') return true;
    return r.category === activeCategory;
  });

  return (
    <section id="journal" className="py-24 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#727B51]/10 text-[#727B51] text-xs font-bold tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CULINARY NOTES & TECHNIQUES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38251D] tracking-tight">
              The Recipe Journal
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#38251D]/75 text-sm sm:text-base max-w-md">
            Technique breakdowns, ingredient chemistry, and kitchen wisdom from our studio notebooks.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-[#38251D] text-[#FFF8EE] shadow-sm'
                  : 'bg-[#FAF3E7] text-[#38251D]/80 hover:bg-[#38251D]/10 hover:text-[#38251D] border border-[#38251D]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRecipes.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#FAF3E7] rounded-3xl overflow-hidden border border-[#38251D]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 overflow-hidden bg-[#38251D]">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#FFF8EE]/90 backdrop-blur-md text-[#38251D] text-[11px] font-bold tracking-wider uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#727B51] font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                    <span>•</span>
                    <span>By {article.author}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#38251D] mb-3 leading-snug group-hover:text-[#B94E36] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#38251D]/80 leading-relaxed line-clamp-3">
                    {article.shortIntro}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-[#38251D]/10 flex items-center justify-between text-xs font-bold text-[#B94E36]">
                  <span>Read Full Article & Recipe</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#38251D]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FFF8EE] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#38251D]/20 text-left relative flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close */}
            <div className="p-5 sm:p-6 bg-[#FAF3E7] border-b border-[#38251D]/10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#B94E36] text-[#FFF8EE] text-[11px] font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-full bg-[#38251D]/5 hover:bg-[#38251D]/10 text-[#38251D] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Reader Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#38251D] leading-tight mb-4">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#727B51] font-semibold">
                  <span>Published on {selectedArticle.publishedDate}</span>
                  <span>•</span>
                  <span>{selectedArticle.readingTime}</span>
                  <span>•</span>
                  <span>Curated by {selectedArticle.author}</span>
                </div>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 bg-[#38251D]">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Short Intro */}
              <p className="text-base sm:text-lg text-[#38251D]/90 leading-relaxed font-serif italic border-l-4 border-[#B94E36] pl-4">
                "{selectedArticle.shortIntro}"
              </p>

              {/* Ingredients section if recipe */}
              {selectedArticle.ingredients && selectedArticle.ingredients.length > 0 && (
                <div className="bg-[#FAF3E7] p-6 rounded-2xl border border-[#38251D]/10">
                  <h3 className="font-serif text-lg font-bold text-[#38251D] mb-4 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#B94E36]" />
                    <span>Ingredients & Quantities</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#38251D]/85">
                    {selectedArticle.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#B94E36] font-bold">•</span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Method / Instructions */}
              {selectedArticle.instructions && selectedArticle.instructions.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#38251D]">
                    Method & Technique Breakdown
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-[#38251D]/85">
                    {selectedArticle.instructions.map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="font-bold text-[#B94E36] min-w-[20px]">{idx + 1}.</span>
                        <p className="leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chef Tips */}
              {selectedArticle.chefTips && selectedArticle.chefTips.length > 0 && (
                <div className="bg-[#FFF8EE] p-5 rounded-2xl border border-[#C89B55]/40 text-xs text-[#38251D]">
                  <h4 className="font-serif font-bold text-sm text-[#C89B55] mb-2">
                    Suruchi’s Studio Tip:
                  </h4>
                  <ul className="space-y-1 text-[#38251D]/85">
                    {selectedArticle.chefTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#727B51] flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 sm:p-6 bg-[#FAF3E7] border-t border-[#38251D]/10 flex items-center justify-between">
              <span className="text-xs text-[#38251D]/70 hidden sm:inline">
                Love this technique? Practice it live in our studio.
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#B94E36] text-[#FFF8EE] text-xs font-semibold hover:bg-[#9E3E28] transition-colors ml-auto"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
