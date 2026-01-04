import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';

const EventCard = ({ event, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="event-card relative overflow-hidden group"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Event Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="relative text-5xl mb-4 inline-block"
      >
        {event.icon}
      </motion.div>

      {/* Event Name */}
      <h3 className="font-script text-3xl text-rose-600 mb-4 relative">
        {event.name}
      </h3>

      {/* Event Details */}
      <div className="space-y-3 relative">
        <div className="flex items-center gap-3 text-gray-600">
          <Calendar className="w-5 h-5 text-rose-400" />
          <span className="font-serif">{event.date}</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Clock className="w-5 h-5 text-rose-400" />
          <span className="font-serif">{event.time}</span>
        </div>
        
        <div className="flex items-start gap-3 text-gray-600">
          <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-serif font-semibold">{event.venue}</p>
            <p className="font-sans text-sm text-gray-500">{event.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <Shirt className="w-5 h-5 text-rose-400" />
          <span className="font-sans text-sm">{event.dressCode}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 font-sans text-gray-600 leading-relaxed relative">
        {event.description}
      </p>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-rose-200 rounded-bl-2xl opacity-50"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-rose-200 rounded-tr-2xl opacity-50"></div>
    </motion.div>
  );
};

export default EventCard;
