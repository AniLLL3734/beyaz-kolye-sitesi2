import React from 'react';
import ToolCard from '../components/ToolCard';
import { TOOLS_DATA } from '../constants';

const Tools: React.FC = () => {
  return (
    <>
      {/* React 19 SEO Etiketleri */}
      <title>Yararlı Araçlar - Beyaz Kolye Hack</title>
      <meta name="description" content="Beyaz Kolye Hack ekibi tarafından geliştirilen ve sunulan ücretsiz, yararlı araçlar ve uygulamalar. JPG to PNG çevirici, hash oluşturucu ve daha fazlası." />

      <div>
        <h1 className="text-4xl font-bold text-center mb-10 text-glow">Yararlı Araçlar & Uygulamalar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_DATA.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;