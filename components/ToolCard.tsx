import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-black/40 border border-[#00ff41]/30 rounded-lg overflow-hidden flex flex-col h-full card-glow">
      <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#00ff41] mb-2">{tool.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{tool.description}</p>
        
        <div className="mb-4">
          {tool.tags.map(tag => (
            <span key={tag} className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-transparent text-[#00ff41] font-bold py-2 px-4 rounded-lg border-2 border-[#00ff41] transition-all duration-300 hover:bg-[#00ff41] hover:text-[#0a0a0a] hover:shadow-[0_0_15px_#00ff41]"
        >
          Aracı Kullan
        </a>
      </div>
    </div>
  );
};

export default ToolCard;