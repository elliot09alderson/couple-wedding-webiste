import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Sparkles, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { coupleInfo, events, loveStory } from '../data/weddingData';
import TimelineItem from '../components/TimelineItem';

const Home = () => {
  // Floating hearts animation
  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 10 + Math.random() * 20
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-white to-pink-100/50"></div>
        
        {/* Floating Hearts */}
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-rose-300 opacity-60"
            style={{ left: `${heart.left}%`, bottom: -50 }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.sin(heart.id) * 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Heart style={{ width: heart.size, height: heart.size }} className="fill-rose-200" />
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Decorative Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-gold-500" />
            <span className="font-display text-sm tracking-[0.3em] text-gray-500 uppercase">
              Together Forever
            </span>
            <Sparkles className="w-5 h-5 text-gold-500" />
          </motion.div>

          {/* Names */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient leading-tight">
              {coupleInfo.bride.name}
            </h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block my-4"
            >
              <span className="font-display text-2xl text-rose-400">&</span>
            </motion.div>
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient leading-tight">
              {coupleInfo.groom.name}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-display text-xl md:text-2xl text-gray-600 mt-6 tracking-widest"
          >
            Are Getting Married
          </motion.p>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-3 glass-card px-8 py-4">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span className="font-serif text-lg md:text-xl text-gray-700">
                February 14, 2026
              </span>
              <span className="text-rose-300">|</span>
              <MapPin className="w-5 h-5 text-rose-500" />
              <span className="font-serif text-lg md:text-xl text-gray-700">
                {coupleInfo.venue.name}
              </span>
            </div>
          </motion.div>

          {/* Hashtag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-script text-2xl text-rose-500 mt-6"
          >
            {coupleInfo.hashtag}
          </motion.p>

          {/* RSVP Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10"
          >
            <Link to="/rsvp" className="btn-primary inline-flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Save Your Spot
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-rose-400" />
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Counting Down</h2>
            <p className="section-subtitle">To the beginning of our forever</p>
          </motion.div>

          <CountdownTimer targetDate={coupleInfo.weddingDate} />
        </div>
      </section>

      {/* Couple Introduction */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">The Happy Couple</h2>
            <p className="section-subtitle">Two hearts, one love story</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Bride */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center text-6xl shadow-xl ring-4 ring-white">
                  👰
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-rose-200"
                ></motion.div>
              </div>
              <h3 className="font-script text-4xl text-rose-600 mb-2">{coupleInfo.bride.fullName}</h3>
              <p className="font-display text-sm text-rose-400 uppercase tracking-widest mb-4">The Bride</p>
              <p className="font-sans text-gray-600 max-w-sm mx-auto">{coupleInfo.bride.about}</p>
            </motion.div>

            {/* Groom */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-6xl shadow-xl ring-4 ring-white">
                  🤵
                </div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200"
                ></motion.div>
              </div>
              <h3 className="font-script text-4xl text-gray-700 mb-2">{coupleInfo.groom.fullName}</h3>
              <p className="font-display text-sm text-gray-400 uppercase tracking-widest mb-4">The Groom</p>
              <p className="font-sans text-gray-600 max-w-sm mx-auto">{coupleInfo.groom.about}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Love Story Timeline Preview */}
      <section className="py-24 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 text-rose-100 text-9xl font-script opacity-20">Love</div>
        
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Love Story</h2>
            <p className="section-subtitle">From strangers to soulmates</p>
          </motion.div>

          <div className="space-y-8">
            {loveStory.slice(0, 3).map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === 2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/story" className="btn-secondary">
              Read Full Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Wedding Celebrations</h2>
            <p className="section-subtitle">Join us for these special moments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:bg-rose-50 transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl block mb-4"
                >
                  {event.icon}
                </motion.span>
                <h3 className="font-script text-2xl text-rose-600 mb-2">{event.name}</h3>
                <p className="font-serif text-sm text-gray-600">{event.date}</p>
                <p className="font-sans text-xs text-gray-500 mt-1">{event.time}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="font-script text-5xl md:text-6xl text-white mb-6">
              We Can't Wait to See You!
            </h2>
            <p className="font-serif text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Your presence would make our day even more special. Please let us know if you can make it.
            </p>
            <Link
              to="/rsvp"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-rose-600 font-serif font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Heart className="w-5 h-5 fill-rose-500" />
              RSVP Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
