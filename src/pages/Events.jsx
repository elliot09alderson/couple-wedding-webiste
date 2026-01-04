import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import EventCard from '../components/EventCard';
import { events, coupleInfo } from '../data/weddingData';

const Events = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 text-rose-100 text-9xl font-script opacity-20">Celebrate</div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-rose-500" />
              <span className="font-display text-sm tracking-widest text-gray-500 uppercase">
                Mark Your Calendar
              </span>
            </div>
            <h1 className="section-title mb-4">Wedding Events</h1>
            <p className="section-subtitle">
              Join us for a celebration of love, laughter, and forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Venue Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-script text-4xl text-rose-600 mb-4">Venue Location</h2>
            <p className="font-serif text-gray-600">{coupleInfo.venue.name}</p>
            <p className="font-sans text-sm text-gray-500">{coupleInfo.venue.address}</p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">📍</span>
                <p className="font-serif text-gray-600 mb-4">{coupleInfo.venue.name}</p>
                <a
                  href={coupleInfo.venue.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-script text-4xl text-rose-600 mb-4">Guest Guidelines</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "👗",
                title: "Dress Code",
                description: "Please follow the dress code mentioned for each event. Traditional Indian attire is preferred for the wedding ceremony."
              },
              {
                icon: "📸",
                title: "Photography",
                description: "We're having an unplugged ceremony. Please keep your phones away and enjoy the moment. We'll share professional photos later!"
              },
              {
                icon: "🅿️",
                title: "Parking",
                description: "Complimentary valet parking is available at the venue. Please look for the Wedding Parking signs."
              },
              {
                icon: "🤱",
                title: "Children",
                description: "While we love your little ones, we've planned an adults-only celebration. Thank you for understanding!"
              }
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-rose-50 transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl block mb-3"
                >
                  {guideline.icon}
                </motion.span>
                <h3 className="font-serif text-xl text-gray-800 mb-2">{guideline.title}</h3>
                <p className="font-sans text-gray-600 text-sm">{guideline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
