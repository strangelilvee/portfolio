import React, { useState } from 'react';
import BranchPage from './BranchPage';

const projects = [
  { 
    id: 1, 
    title: 'Art', 
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80', 
    content: 'Explore still images and visual art.' 
  },
  { 
    id: 2, 
    title: 'GLSL', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80', 
    content: 'Discover mesmerizing GLSL animations.' 
  },
  { 
    id: 3, 
    title: 'Bots', 
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80', 
    content: 'Interact with AI bots created by VL.ai.' 
  },
  { 
    id: 4, 
    title: 'Everything Else', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', 
    content: 'Explore miscellaneous digital creations.' 
  },
];

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="fade-in">
            <div 
              className="image-button w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
              style={{backgroundImage: `url(${project.image})`}}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold glitch">{project.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <BranchPage
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Gallery;