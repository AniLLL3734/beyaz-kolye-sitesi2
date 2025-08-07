// Dosya: src/pages/HackDetail.tsx

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CHEATS_DATA } from '../constants';

// Markdown metnini HTML'e çevirmek için basit bir fonksiyon
const formatMarkdown = (text: string) => {
    return text.replace(/\n/g, '<br />');
}

// DownloadIcon bileşeni
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const HackDetail: React.FC = () => {
  const { hackId } = useParams<{ hackId: string }>();
  const hack = CHEATS_DATA.find(h => h.id === hackId);

  if (!hack) {
    return <Navigate to="/hacks" />;
  }

  return (
    <>
      {/* --- REACT 19 DİNAMİK SEO ETİKETLERİ --- */}
      <title>{`${hack.name} İndir - Beyaz Kolye Hack`}</title>
      <meta name="description" content={`Beyaz Kolye Hack ekibinden ${hack.game} için ${hack.name} hilesini ücretsiz ve güvenli bir şekilde indirin. Özellikler: ${hack.features.join(', ')}.`} />

      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-glow">{hack.name}</h1>
        
        {/* --- RESİM ve ÖZELLİKLER BÖLÜMÜ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <img src={hack.image} alt={`${hack.name} screenshot`} className="w-full h-auto object-cover rounded-lg border-2 border-[#00ff41]/50" />
          </div>
          <div className="lg:col-span-2 bg-black/40 border border-[#00ff41]/30 p-6 rounded-lg self-start">
            <h2 className="text-2xl font-bold text-[#00ff41] mb-4">Özellikler</h2>
            <ul className="space-y-2">
              {hack.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#00ff41] mr-2">◆</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* --- UZUN AÇIKLAMA METNİ --- */}
        {hack.longDescription && (
          <div className="mt-12 bg-black/30 p-6 border border-gray-700/50 rounded-lg">
             <div 
               className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-[#00ff41] prose-strong:text-white leading-relaxed space-y-4"
               dangerouslySetInnerHTML={{ __html: formatMarkdown(hack.longDescription) }} 
             />
          </div>
        )}

        {/* İçerik arası banner buradan kaldırıldı */}

        <div className="mt-12 text-center">
          <a 
            href={hack.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00ff41] text-[#0a0a0a] font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 hover:bg-transparent hover:text-[#00ff41] border-2 border-[#00ff41] hover:shadow-[0_0_20px_#00ff41]"
          >
            <DownloadIcon />
            İNDİR
          </a>
        </div>
      </div>
    </>
  );
};

export default HackDetail;