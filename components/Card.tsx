
import React from 'react';
import { Link } from 'react-router-dom';
import { Hack } from '../types';

interface CardProps {
  hack: Hack;
}

const Card: React.FC<CardProps> = ({ hack }) => {
  return (
    <div className="bg-black/40 border border-[#00ff41]/30 rounded-lg overflow-hidden card-glow flex flex-col">
      <img src={hack.image} alt={`${hack.name} screenshot`} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[#00ff41] truncate">{hack.name}</h3>
        <p className="text-sm text-gray-400 mt-2 flex-grow">{hack.description}</p>
        <Link 
          to={`/hacks/${hack.id}`} 
          className="mt-4 text-center w-full bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#00ff41] hover:text-[#0a0a0a] hover:shadow-[0_0_10px_#00ff41]"
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
