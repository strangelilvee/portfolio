import React from 'react';
import { Play, Image, Code, Mic } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Audio Composition',
    description: 'An immersive soundscape exploring urban environments.',
    icon: <Mic className="w-12 h-12 text-indigo-500" />,
    link: '#',
  },
  {
    id: 2,
    title: 'Video Project',
    description: 'A short film showcasing the beauty of nature.',
    icon: <Play className="w-12 h-12 text-indigo-500" />,
    link: '#',
  },
  {
    id: 3,
    title: 'Photography Series',
    description: 'A collection of high-quality images capturing city life.',
    icon: <Image className="w-12 h-12 text-indigo-500" />,
    link: '#',
  },
  {
    id: 4,
    title: 'GPT Agent',
    description: 'An AI-powered chatbot for creative writing assistance.',
    icon: <Code className="w-12 h-12 text-indigo-500" />,
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-6">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;