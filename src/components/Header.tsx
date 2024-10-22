import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 border-b border-green-500">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center tracking-widest fade-in glitch">
          VL.ai
        </h1>
        <p className="text-center mt-2 text-cyan-400">
          Explore the Digital Frontier
        </p>
      </div>
    </header>
  );
};

export default Header;