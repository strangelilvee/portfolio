import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <AmbientBackground />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;