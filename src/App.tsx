/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Book, 
  Sparkles, 
  Users, 
  Heart, 
  Shield, 
  Moon, 
  Ghost, 
  Smile, 
  Sunrise, 
  DoorOpen, 
  Globe, 
  Baby, 
  Ship, 
  Trees, 
  Waves, 
  Star, 
  Compass,
  Library,
  Play
} from 'lucide-react';
import { allBooks, Book as BookType } from './data/books';

const ICON_MAP: Record<string, any> = {
  Book,
  Sparkles,
  Users,
  Heart,
  Shield,
  Moon,
  Ghost,
  Smile,
  Sunrise,
  DoorOpen,
  Globe,
  Baby,
  Ship,
  Trees,
  Waves,
  Star,
  Compass
};

const CATEGORIES = ['Barchasi', 'Klassika', 'Bolalar', 'Jahon', 'Sarguzasht', 'Hikoya'];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Barchasi' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00d285]/30">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d285]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section */}
      <header className="pt-12 pb-8 flex flex-col items-center px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-[#00d285]/10 rounded-2xl flex items-center justify-center border border-[#00d285]/20 shadow-[0_0_20px_rgba(0,210,133,0.1)]">
            <Library className="w-8 h-8 text-[#00d285]" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-center"
        >
          NAJOT <span className="bg-gradient-to-r from-[#00d285] to-emerald-400 bg-clip-text text-transparent">LIBRARY</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-lg mb-10 text-sm md:text-base leading-relaxed"
        >
          300 dan ortiq eng zo'r va chiroyli kitoblar to'plami. O'zingizga yoqqanini tanlang va mutolaaga sho'ng'ing.
        </motion.p>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-500 group-focus-within:text-[#00d285] transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Kitob qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00d285]/50 focus:border-[#00d285]/50 transition-all placeholder:text-gray-600"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category 
                ? 'bg-[#00d285] text-black shadow-[0_0_15px_rgba(0,210,133,0.3)]' 
                : 'bg-[#111111] text-gray-400 hover:bg-white/5 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.slice(0, 100).map((book: BookType) => (
              <BookCard key={book.id} book={book} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-gray-500 text-lg">Afsuski, kitob topilmadi.</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <p>© 2026 Najot Library. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

function BookCard({ book }: { book: BookType; key?: string }) {
  const Icon = ICON_MAP[book.icon] || Book;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#0d0d0d] rounded-3xl overflow-hidden border border-white/5 hover:border-[#00d285]/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Visual Background */}
      <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#111] to-[#080808]">
        {/* Decorative monogram in background */}
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center transform scale-[2] pointer-events-none">
          <Library className="w-32 h-32" />
        </div>
        
        {/* Floating Icon Box */}
        <div className={`relative z-10 w-16 h-16 rounded-2xl ${book.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Play (Read) button overlay */}
        <div className="absolute bottom-4 right-4 z-20">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#00d285] transition-colors duration-300">
            <Play className="w-4 h-4 text-white group-hover:text-black fill-current" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-xl leading-tight group-hover:text-[#00d285] transition-colors">
            {book.title}
          </h3>
        </div>
        
        <p className="text-gray-500 text-xs mb-3 font-medium uppercase tracking-wider">
          {book.author}
        </p>
        
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
          {book.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            {book.category}
          </span>
          <button className="text-[10px] uppercase tracking-widest text-[#00d285] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            Mutolaa qilish
          </button>
        </div>
      </div>
    </motion.div>
  );
}
