import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { FaWaze } from "react-icons/fa";

const WazeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 5.79 4.71 10.5 10.5 10.5s10.5-4.71 10.5-10.5c0-5.79-4.71-10.5-10.5-10.5zM12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
    <path d="M12 6.75c-2.07 0-3.75 1.68-3.75 3.75 0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-2.07-1.68-3.75-3.75-3.75zm0 6c-1.24 0-2.25-1.01-2.25-2.25S10.76 8.25 12 8.25s2.25 1.01 2.25 2.25S13.24 12.75 12 12.75z"/>
    <path d="M12 9.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-mint-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-gold-800 dark:text-gold-400 mb-4">
              צור קשר
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 ml-2 text-mint-600 dark:text-mint-400" />
                050-123-4567
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 ml-2 text-mint-600 dark:text-mint-400" />
                info@madiuela.com
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 ml-2 text-mint-600 dark:text-mint-400" />
                הבנים 50, נס ציונה
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-gold-800 dark:text-gold-400 mb-4">
              שעות פעילות
            </h3>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-1 text-mint-600 dark:text-mint-400" />
              <div className="text-gray-600 dark:text-gray-400">
                <p>ראשון - חמישי</p>
                <p>10:00 - 20:00</p>
                <p className="text-sm mt-1">(בתיאום מראש)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-gold-800 dark:text-gold-400 mb-4">
              עקבו אחרינו
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#e67e22] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#e67e22] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#e67e22] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-lg"
                aria-label="Message"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#e67e22] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-lg"
                aria-label="Waze"
              >
                <FaWaze className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-mint-200 dark:border-mint-900 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} כל הזכיות שמורות לאוראל בוקריס - מפתח אתרים ואפליקציות בתלת מימד</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;