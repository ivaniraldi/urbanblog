"use client"
import { useState } from 'react';

const AlertComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 w-full max-w-3xl mx-auto left-0 right-0 bottom-4 md:bottom-4 top-auto md:top-auto">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg shadow-lg flex items-center justify-between mx-4 md:mx-0">
        <p className="text-sm md:text-base">
          Este site foi desenvolvido em modo de teste por{' '}
          <a 
            href="http://www.webrushbrasil.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-yellow-900"
          >
            www.webrushbrasil.com.br
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded text-sm"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default AlertComponent;