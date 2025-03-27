import React from 'react';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="src/public/Professional_Mode_A_girl_holds_light_in_her_hands_.mp4" type="video/mp4" />
            הדפדפן שלך לא תומך בתגית הוידאו.
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-mint-900/40 to-mint-900/10"></div>
        </div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              מדואלה
              <span className="block text-xl md:text-2xl lg:text-3xl mt-4 text-gold-400 font-normal">
                להחזיר את הזוהר, לחדש את הרוגע – טיפולי עור ורפואה משלימה לנשים
              </span>
            </h1>
            <p className="text-xl text-mint-100 mb-8 font-light leading-relaxed">
              ✨ חווי שילוב מושלם של רוגע, התחדשות וריפוי טבעי עם טיפולי עור וטיפולים הוליסטיים בהתאמה אישית ✨
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors text-lg"
            >
              <Calendar className="w-6 h-6 ml-2" />
              📅 קבעי תור עוד היום!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;