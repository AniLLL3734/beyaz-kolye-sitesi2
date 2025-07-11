
import React from 'react';
import Card from '../components/Card';
import { CHEATS_DATA } from '../constants';

const Hacks: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-glow">Tüm Hileler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {CHEATS_DATA.map(hack => (
          <Card key={hack.id} hack={hack} />
        ))}
      </div>
    </div>
  );
};

export default Hacks;
