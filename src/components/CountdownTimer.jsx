import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
          className="relative"
        >
          <div className="glass-card w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center group hover:bg-rose-50/80 transition-colors">
            {/* Animated Number */}
            <motion.span
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-display text-3xl md:text-5xl text-rose-600 bg-clip-text"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            
            {/* Label */}
            <span className="font-serif text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
              {unit.label}
            </span>

            {/* Decorative ring effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-rose-200 opacity-0 group-hover:opacity-100 transition-opacity ring-animation"></div>
          </div>

          {/* Separator */}
          {index < 3 && (
            <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-rose-400 text-2xl"
              >
                :
              </motion.span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
