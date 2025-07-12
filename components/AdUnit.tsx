import React, { useEffect, useRef } from 'react';

type AdUnitProps = {
  key_id: string;
  width: number;
  height: number;
  className?: string; // Stil eklemek için
};

// Bu bileşen, verdiğimiz ID ve boyutlara göre bir banner reklamı oluşturur.
const AdUnit: React.FC<AdUnitProps> = ({ key_id, width, height, className }) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false); // Her birimin kendi yüklenme durumunu takip etmesi için.

  useEffect(() => {
    // Eğer reklam bu birim içinde zaten yüklendiyse veya ref mevcut değilse, hiçbir şey yapma.
    if (!adContainerRef.current || isLoaded.current) {
      return;
    }

    const adOptionsScript = document.createElement('script');
    adOptionsScript.type = 'text/javascript';
    adOptionsScript.innerHTML = `
      atOptions = {
        'key' : '${key_id}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    adContainerRef.current.appendChild(adOptionsScript);

    const adInvokeScript = document.createElement('script');
    adInvokeScript.type = 'text/javascript';
    adInvokeScript.src = `//www.highperformanceformat.com/${key_id}/invoke.js`;
    adInvokeScript.async = true;
    adContainerRef.current.appendChild(adInvokeScript);

    isLoaded.current = true; // Reklam yüklendi olarak işaretle.

  }, [key_id, width, height]);

  return (
    <div
      ref={adContainerRef}
      className={`flex justify-center items-center ${className || ''}`}
      style={{ minHeight: `${height}px`, minWidth: `${width}px` }}
      aria-label="Advertisement" // Erişilebilirlik için etiket
    >
      {/* Adsterra scripti bu alanı dolduracak */}
    </div>
  );
};

export default AdUnit;