import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/weddingData';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-rose-50 to-rose-100 pt-20 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute top-10 left-10 text-rose-200 text-6xl opacity-30">❧</div>
      <div className="absolute top-10 right-10 text-rose-200 text-6xl opacity-30 transform scale-x-[-1]">❧</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <h3 className="font-script text-3xl text-rose-600">{coupleInfo.bride.name} & {coupleInfo.groom.name}</h3>
            </div>
            <p className="font-serif text-gray-600 mb-4">
              Celebrating our love story and inviting you to be part of our beautiful journey.
            </p>
            <p className="font-display text-lg text-rose-500">{coupleInfo.hashtag}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-xl text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Our Story', 'Events', 'Gallery', 'RSVP'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                  className="block font-sans text-gray-600 hover:text-rose-500 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-xl text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${coupleInfo.bride.name.toLowerCase()}and${coupleInfo.groom.name.toLowerCase()}@wedding.com`}
                className="flex items-center justify-center md:justify-end gap-2 text-gray-600 hover:text-rose-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-sans">priyaandarjun@wedding.com</span>
              </a>
              <a 
                href="tel:+1234567890"
                className="flex items-center justify-center md:justify-end gap-2 text-gray-600 hover:text-rose-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-sans">+91 12345 67890</span>
              </a>
              <a 
                href={coupleInfo.venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-gray-600 hover:text-rose-500 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-sans">{coupleInfo.venue.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300"></div>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 inline text-rose-500 fill-rose-500 mx-1" /> for our special day
          </p>
          <p className="font-sans text-gray-400 text-xs mt-2">
            © 2026 {coupleInfo.bride.name} & {coupleInfo.groom.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
