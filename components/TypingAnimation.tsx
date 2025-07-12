import React, { useState, useEffect } from 'react';

// Props arayüzünü tanımlıyoruz
interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100 }) => {
  // Ekranda görünen metni tutmak için state
  const [displayedText, setDisplayedText] = useState('');
  // İmlecin görünüp görünmeyeceğini kontrol eden state
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // metnin tamamı yazılana kadar harf eklemeye devam et
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        // text'in bir sonraki harfini alıp mevcut metne ekle
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      
      // Her zaman olduğu gibi, bir sonraki adıma geçmeden önce zamanlayıcıyı temizle
      return () => clearTimeout(timeoutId);
    } 
    
    // metin yazımı bittikten sonra imlecin yanıp sönmesi için zamanlayıcı
    else {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500); // Yarım saniyede bir imlecin görünürlüğünü değiştir

      // Component kaldırıldığında veya text değiştiğinde imleç interval'ini temizle
      return () => clearInterval(cursorInterval);
    }

  }, [displayedText, text, speed]); // Bu effect, bu değerler her değiştiğinde yeniden çalışır.


  // Yazı bittikten sonra metnin sonundaki imleç için ayrı bir kontrol ekledik.
  const cursor = showCursor ? '_' : '';

  return (
    // "text-glow" stili isteğe bağlı olarak eklenebilir. Orijinal kodunuzda vardı.
    <span className="text-glow">
      {displayedText}
      {/* Sadece yazı bittikten sonra yanıp sönen imleç. 
          Yazma sırasında yanıp sönmesi için, animasyon kütüphanesi gerekir. 
          Şimdilik sadece sonunda yanıp sönecek şekilde ayarladık. */}
      {displayedText.length === text.length && <span className="ml-1">{cursor}</span>}
    </span>
  );
};

export default TypingAnimation;