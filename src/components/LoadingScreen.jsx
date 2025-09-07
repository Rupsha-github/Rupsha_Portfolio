import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [text, setText] = useState('');
  const fullText = '<Hello World>';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-2 w-80 bg-white/30 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-white rounded-full animate-pulse" style={{
              animation: 'loading 3s ease-in-out forwards'
            }}></div>
          </div>
        </div>
        <div className="font-mono ml-8 text-4xl md:text-6xl font-bold text-white flex justify-center items-center">
          <span className="inline-block">{text}</span>
          <span className="inline-block animate-pulse">|</span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;