import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Heart, Check, Users, Calendar, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { coupleInfo, events } from '../data/weddingData';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', guests: '1', attending: 'yes',
    events: [], dietaryRestrictions: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventToggle = (eventId) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId) 
        ? prev.events.filter(id => id !== eventId)
        : [...prev.events, eventId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-lg mx-4"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="font-script text-4xl text-rose-600 mb-4">Thank You!</h2>
          <p className="font-serif text-gray-600 mb-6">
            We're thrilled that you'll be joining us on our special day, {formData.name}!
          </p>
          <div className="glass-card p-4 bg-rose-50/50 mb-6">
            <p className="font-sans text-sm text-gray-600">A confirmation has been sent to:</p>
            <p className="font-serif text-rose-600">{formData.email}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="font-script text-xl text-rose-500">{coupleInfo.hashtag}</span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="relative py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <UserPlus className="w-6 h-6 text-rose-500" />
              <span className="font-display text-sm tracking-widest text-gray-500 uppercase">Save Your Spot</span>
            </div>
            <h1 className="section-title mb-4">RSVP</h1>
            <p className="section-subtitle">We can't wait to celebrate with you!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
              <div className="glass-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <Sparkles className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                    <h3 className="font-script text-2xl text-rose-600">Your Details</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-serif text-gray-700 mb-2">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="input-field" required />
                    </div>
                    <div>
                      <label className="block font-serif text-gray-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="input-field pl-11" required />
                      </div>
                    </div>
                    <div>
                      <label className="block font-serif text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className="input-field pl-11" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-serif text-gray-700 mb-2">Number of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" />
                        <select name="guests" value={formData.guests} onChange={handleChange} className="input-field pl-11 appearance-none">
                          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif text-gray-700 mb-4">Will you be attending? *</label>
                    <div className="flex gap-4">
                      {['yes', 'no'].map(opt => (
                        <label key={opt} className={`flex-1 p-4 rounded-xl cursor-pointer border-2 transition-all ${formData.attending === opt ? 'border-rose-400 bg-rose-50' : 'border-gray-200 hover:border-rose-200'}`}>
                          <input type="radio" name="attending" value={opt} checked={formData.attending === opt} onChange={handleChange} className="hidden" />
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">{opt === 'yes' ? '🎉' : '😢'}</span>
                            <span className="font-serif text-gray-700">{opt === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline'}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {formData.attending === 'yes' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-6">
                        <div>
                          <label className="block font-serif text-gray-700 mb-4">Which events will you attend?</label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {events.map(event => (
                              <label key={event.id} onClick={() => handleEventToggle(event.id)}
                                className={`p-4 rounded-xl cursor-pointer border-2 transition-all ${formData.events.includes(event.id) ? 'border-rose-400 bg-rose-50' : 'border-gray-200 hover:border-rose-200'}`}>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{event.icon}</span>
                                  <div>
                                    <p className="font-serif text-gray-800">{event.name}</p>
                                    <p className="font-sans text-xs text-gray-500">{event.date}</p>
                                  </div>
                                  {formData.events.includes(event.id) && <Check className="w-5 h-5 text-rose-500 ml-auto" />}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block font-serif text-gray-700 mb-2">Dietary Restrictions</label>
                          <input type="text" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} placeholder="Vegetarian, allergies, etc." className="input-field" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="block font-serif text-gray-700 mb-2">Message for the Couple</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Share your wishes..." rows={3} className="input-field resize-none" />
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70">
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <><Heart className="w-5 h-5" /> Submit RSVP</>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="glass-card p-6 text-center">
                <span className="text-4xl block mb-3">💒</span>
                <h4 className="font-script text-2xl text-rose-600 mb-2">Wedding Day</h4>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-rose-400" />
                  <span className="font-serif">February 14, 2026</span>
                </div>
              </div>

              <div className="glass-card p-6 text-center">
                <span className="text-4xl block mb-3">📍</span>
                <h4 className="font-script text-2xl text-rose-600 mb-2">Venue</h4>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span className="font-serif text-sm">{coupleInfo.venue.name}</span>
                </div>
                <p className="font-sans text-xs text-gray-500 mt-1">{coupleInfo.venue.address}</p>
              </div>

              <div className="glass-card p-6 text-center bg-gradient-to-br from-rose-100 to-pink-100">
                <h4 className="font-script text-xl text-rose-600 mb-2">Need Help?</h4>
                <p className="font-sans text-sm text-gray-600 mb-3">Contact us for any questions</p>
                <a href="mailto:priyaandarjun@wedding.com" className="font-sans text-rose-500 text-sm hover:underline">priyaandarjun@wedding.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
