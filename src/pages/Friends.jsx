import { motion } from 'framer-motion';
import { Users, Heart, Send } from 'lucide-react';
import { useState } from 'react';
import FriendCard from '../components/FriendCard';
import { friendsFamily } from '../data/weddingData';

const Friends = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Anita & Raj', message: 'Wishing you both a lifetime of love! ❤️', time: '2 hours ago' },
    { id: 2, name: 'Deepak Verma', message: 'Congratulations to the perfect couple!', time: '5 hours ago' },
  ]);

  const handleSubmitWish = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setWishes([{ id: Date.now(), name: name.trim(), message: message.trim(), time: 'Just now' }, ...wishes]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="relative py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-rose-500" />
              <span className="font-display text-sm tracking-widest text-gray-500 uppercase">Our Loved Ones</span>
            </div>
            <h1 className="section-title mb-4">Friends & Family</h1>
            <p className="section-subtitle">The wonderful people who make our lives beautiful</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {friendsFamily.map((friend, index) => (
              <FriendCard key={friend.id} friend={friend} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
            <h2 className="font-script text-4xl text-rose-600 mb-4">Wedding Wishes</h2>
            <p className="font-serif text-gray-600">Leave your blessings for the couple</p>
          </motion.div>

          <motion.div className="glass-card p-8 mb-12">
            <form onSubmit={handleSubmitWish} className="space-y-4">
              <div>
                <label className="block font-serif text-gray-700 mb-2">Your Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input-field" required />
              </div>
              <div>
                <label className="block font-serif text-gray-700 mb-2">Your Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your wishes..." rows={4} className="input-field resize-none" required />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Your Wishes
              </motion.button>
            </form>
          </motion.div>

          <div className="space-y-4">
            {wishes.map((wish, index) => (
              <motion.div key={wish.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass-card p-5 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-serif text-lg">{wish.name.charAt(0)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif text-gray-800">{wish.name}</h4>
                    <span className="font-sans text-xs text-gray-400">{wish.time}</span>
                  </div>
                  <p className="font-sans text-gray-600 text-sm">{wish.message}</p>
                </div>
                <Heart className="w-5 h-5 text-rose-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friends;
