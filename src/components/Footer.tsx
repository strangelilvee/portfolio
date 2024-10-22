import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-green-500">
      <div className="container mx-auto px-4">
        <p className="text-sm text-center text-cyan-400 tracking-wider">
          © {new Date().getFullYear()} VL.ai - Venturing into the Digital Unknown
        </p>
      </div>
    </footer>
  );
};

export default Footer;