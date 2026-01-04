import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const TimelineItem = ({ item, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-center">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full items-center">
        {/* Left Side */}
        <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : ''}`}>
          {isEven && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-6 inline-block text-left"
            >
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h3 className="font-script text-2xl text-rose-600 mb-1">{item.title}</h3>
              <p className="font-display text-sm text-rose-400 mb-3">{item.date}</p>
              <p className="font-sans text-gray-600">{item.description}</p>
            </motion.div>
          )}
        </div>

        {/* Center Line & Dot */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10"
          >
            <Heart className="w-6 h-6 text-white fill-white" />
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-0.5 bg-gradient-to-b from-rose-300 to-pink-300 absolute top-12"
              style={{ minHeight: '120px' }}
            />
          )}
        </div>

        {/* Right Side */}
        <div className={`w-1/2 ${!isEven ? 'pl-12' : ''}`}>
          {!isEven && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-6 inline-block text-left"
            >
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h3 className="font-script text-2xl text-rose-600 mb-1">{item.title}</h3>
              <p className="font-display text-sm text-rose-400 mb-3">{item.date}</p>
              <p className="font-sans text-gray-600">{item.description}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex w-full">
        <div className="flex flex-col items-center mr-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10"
          >
            <Heart className="w-4 h-4 text-white fill-white" />
          </motion.div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-rose-300 to-pink-300 min-h-[100px]" />
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card p-5 flex-1 mb-6"
        >
          <span className="text-3xl mb-2 block">{item.icon}</span>
          <h3 className="font-script text-xl text-rose-600 mb-1">{item.title}</h3>
          <p className="font-display text-xs text-rose-400 mb-2">{item.date}</p>
          <p className="font-sans text-gray-600 text-sm">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
