/* ALTERAR O ICONE DE CARREGAMENTO, NAO POR A AMPULHETA, POR OUTRO, E ALTERAR PARA AS CORES DE TALLES */

import { useState, useEffect } from "react";
import { BiLoader } from "react-icons/bi";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 500);
    }, 1700); /* TEMPO DE CARREGAMENTO DE TELA */
  }, [onComplete]);

  return (
    <div
      className={`flex flex-col items-center justify-center fixed inset-0 z-50 bg-deepBlue text-gray-100 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex gap-3 mb-4">
        <BiLoader size={54} className="stroke-2 animate-spin" />
      </div>

      <div className="w-[200px] h-[2px] border-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-mainTheme shadow-[0_0_15px_#3b82f6] animate-loading"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
