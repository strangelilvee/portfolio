import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Welcome to My Creative World</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Explore a diverse collection of digital creations</p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 animate-bounce"
        >
          View Portfolio
        </a>
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;