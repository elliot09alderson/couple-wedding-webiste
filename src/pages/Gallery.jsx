import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight, Heart, Download, Filter } from 'lucide-react';
import { galleryImages } from '../data/weddingData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Placeholder images with gradients
  const placeholderImages = [
    { id: 1, gradient: 'from-rose-300 via-pink-200 to-rose-400', emoji: '💑', category: 'pre-wedding', title: 'Beach Romance' },
    { id: 2, gradient: 'from-purple-300 via-pink-200 to-rose-300', emoji: '💍', category: 'engagement', title: 'The Proposal' },
    { id: 3, gradient: 'from-amber-300 via-orange-200 to-rose-300', emoji: '🌅', category: 'pre-wedding', title: 'Sunset Magic' },
    { id: 4, gradient: 'from-teal-300 via-cyan-200 to-blue-300', emoji: '🌿', category: 'pre-wedding', title: 'Garden Walk' },
    { id: 5, gradient: 'from-rose-400 via-pink-300 to-purple-300', emoji: '✨', category: 'engagement', title: 'Ring Ceremony' },
    { id: 6, gradient: 'from-indigo-300 via-purple-200 to-pink-300', emoji: '💃', category: 'engagement', title: 'First Dance' },
    { id: 7, gradient: 'from-yellow-300 via-amber-200 to-orange-300', emoji: '👨‍👩‍👧‍👦', category: 'family', title: 'Family Blessings' },
    { id: 8, gradient: 'from-rose-300 via-red-200 to-pink-300', emoji: '🎉', category: 'friends', title: 'Friends Forever' },
    { id: 9, gradient: 'from-green-300 via-emerald-200 to-teal-300', emoji: '🌸', category: 'pre-wedding', title: 'Spring Love' },
    { id: 10, gradient: 'from-pink-300 via-rose-200 to-red-300', emoji: '❤️', category: 'pre-wedding', title: 'Hearts United' },
    { id: 11, gradient: 'from-blue-300 via-indigo-200 to-purple-300', emoji: '🌙', category: 'engagement', title: 'Starlit Night' },
    { id: 12, gradient: 'from-orange-300 via-red-200 to-rose-300', emoji: '🔥', category: 'friends', title: 'Celebration' },
  ];

  const categories = ['all', 'pre-wedding', 'engagement', 'family', 'friends'];

  const filteredImages = filter === 'all' 
    ? placeholderImages 
    : placeholderImages.filter(img => img.category === filter);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const navigate = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="absolute top-20 right-10 text-rose-100 text-9xl font-script opacity-20">Memories</div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Image className="w-6 h-6 text-rose-500" />
              <span className="font-display text-sm tracking-widest text-gray-500 uppercase">
                Our Moments
              </span>
            </div>
            <h1 className="section-title mb-4">Photo Gallery</h1>
            <p className="section-subtitle">
              Capturing the beautiful moments of our journey together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white sticky top-16 z-30 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-rose-400 mr-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-sans text-sm capitalize transition-all ${
                  filter === category
                    ? 'bg-rose-500 text-white shadow-lg'
                    : 'bg-rose-50 text-gray-600 hover:bg-rose-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className={`relative cursor-pointer group overflow-hidden rounded-2xl ${
                    index % 5 === 0 ? 'row-span-2' : ''
                  }`}
                >
                  <div className={`aspect-square ${index % 5 === 0 ? 'md:aspect-[1/2]' : ''} bg-gradient-to-br ${image.gradient} flex items-center justify-center`}>
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="text-5xl md:text-6xl filter drop-shadow-lg"
                    >
                      {image.emoji}
                    </motion.span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <p className="font-serif text-lg">{image.title}</p>
                      <p className="font-sans text-xs mt-1 capitalize">{image.category}</p>
                    </motion.div>
                  </div>

                  {/* Heart Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] relative"
            >
              <div className={`aspect-square md:aspect-video bg-gradient-to-br ${selectedImage.gradient} rounded-2xl flex items-center justify-center min-w-[300px] md:min-w-[600px]`}>
                <span className="text-9xl filter drop-shadow-lg">{selectedImage.emoji}</span>
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                <h3 className="font-serif text-xl text-white mb-1">{selectedImage.title}</h3>
                <p className="font-sans text-sm text-white/70 capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Memories CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <span className="text-5xl block mb-4">📷</span>
            <h3 className="font-script text-3xl text-rose-600 mb-4">Share Your Memories</h3>
            <p className="font-sans text-gray-600 mb-6">
              Have photos from our events? We'd love to see them! Use our hashtag to share your captures.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-100 rounded-full">
              <span className="font-script text-xl text-rose-600">#PriyaWedsArjun</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
