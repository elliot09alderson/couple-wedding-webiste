import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';

const FriendCard = ({ friend, index }) => {
  // Placeholder image generator with initials
  const getPlaceholderImage = (name) => {
    const colors = [
      'bg-gradient-to-br from-rose-400 to-pink-500',
      'bg-gradient-to-br from-purple-400 to-rose-500',
      'bg-gradient-to-br from-amber-400 to-rose-500',
      'bg-gradient-to-br from-teal-400 to-cyan-500',
      'bg-gradient-to-br from-indigo-400 to-purple-500',
      'bg-gradient-to-br from-orange-400 to-red-500',
    ];
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
    return { initials, colorClass: colors[index % colors.length] };
  };

  const { initials, colorClass } = getPlaceholderImage(friend.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card p-6 text-center group relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      
      {/* Profile Image / Avatar */}
      <div className="relative inline-block mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`w-24 h-24 rounded-full ${colorClass} flex items-center justify-center text-white font-serif text-2xl shadow-lg ring-4 ring-white`}
        >
          {initials}
        </motion.div>
        
        {/* Heart Badge */}
        <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </div>
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl text-gray-800 mb-1 relative">
        {friend.name}
      </h3>

      {/* Relation */}
      <p className="font-script text-lg text-rose-500 mb-4">
        {friend.relation}
      </p>

      {/* Message */}
      <div className="relative">
        <Quote className="w-6 h-6 text-rose-200 absolute -top-2 -left-1" />
        <p className="font-sans text-gray-600 text-sm leading-relaxed italic pl-4 pr-2">
          "{friend.message}"
        </p>
      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="h-px w-8 bg-rose-200"></div>
        <div className="w-2 h-2 rounded-full bg-rose-300"></div>
        <div className="h-px w-8 bg-rose-200"></div>
      </div>
    </motion.div>
  );
};

export default FriendCard;
