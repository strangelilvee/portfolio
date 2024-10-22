import React from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  content: string;
}

interface BranchPageProps {
  project: Project;
  onClose: () => void;
}

const BranchPage: React.FC<BranchPageProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-green-400">{project.title}</h2>
        <img 
          src={`${project.image}?auto=format&fit=crop&w=800&q=80`} 
          alt={project.title} 
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="text-cyan-400 mb-6">{project.content}</p>
        <button 
          onClick={onClose}
          className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BranchPage;