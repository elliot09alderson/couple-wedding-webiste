import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import TimelineItem from '../components/TimelineItem';
import { loveStory, coupleInfo } from '../data/weddingData';

const Story = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute top-20 right-10 text-rose-100 text-9xl font-script opacity-30">Love</div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title mb-4">Our Love Story</h1>
            <p className="section-subtitle">
              Every love story is beautiful, but ours is our favorite
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="flex justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center text-5xl shadow-lg"
              >
                👰
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center"
              >
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-5xl shadow-lg"
              >
                🤵
              </motion.div>
            </div>
            
            <h2 className="font-script text-4xl text-rose-600 mb-4">
              {coupleInfo.bride.name} & {coupleInfo.groom.name}
            </h2>
            
            <p className="font-sans text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Some love stories are written in the stars, and ours is no different. 
              From the moment we met, we knew there was something special between us. 
              Here's the journey of how two hearts became one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-2xl text-gray-700 uppercase tracking-widest mb-4">
              Our Journey Together
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-rose-300"></div>
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <div className="h-px w-16 bg-rose-300"></div>
            </div>
          </motion.div>

          <div className="space-y-8 md:space-y-0">
            {loveStory.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === loveStory.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-white text-9xl">❧</div>
          <div className="absolute bottom-10 right-10 text-white text-9xl transform scale-x-[-1]">❧</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl text-white/30">"</span>
            <h2 className="font-script text-3xl md:text-4xl text-white mb-6 -mt-8">
              I have found the one whom my soul loves
            </h2>
            <p className="font-serif text-lg text-white/80">
              — Song of Solomon 3:4
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-script text-4xl text-rose-600 mb-4">Fun Facts About Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "2,000+", label: "Hours Spent Talking", icon: "💬" },
              { number: "50+", label: "Date Nights", icon: "🍽️" },
              { number: "∞", label: "Reasons We Love Each Other", icon: "💕" }
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 text-center group hover:bg-rose-50 transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="text-5xl block mb-4"
                >
                  {fact.icon}
                </motion.span>
                <h3 className="font-display text-4xl text-rose-600 mb-2">{fact.number}</h3>
                <p className="font-serif text-gray-600">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
