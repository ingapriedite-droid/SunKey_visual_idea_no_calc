import React from 'react';
import { Sun, Grid3x3 } from 'lucide-react';
import { GeneKeyWheel } from './GeneKeyWheel';

interface LandingPageProps {
  onSelectGeneKey: (geneKey: number) => void;
  onShowMap: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectGeneKey, onShowMap }) => {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sun className="w-20 h-20 text-amber-400 animate-pulse" strokeWidth={1.5} />
              <div className="absolute inset-0 blur-xl bg-amber-400 opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-6xl font-light text-white mb-4 tracking-wide">
            SunKey
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Demo Prototype
          </p>
          <div className="mt-6 text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Explore the 64 Gene Keys arranged in the sacred wheel. Click any key to discover its wisdom.
          </div>
        </div>

        <div className="mb-8">
          <GeneKeyWheel onSelectGeneKey={onSelectGeneKey} />
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onShowMap}
            className="px-8 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <Grid3x3 className="w-5 h-5" />
            Consciousness Map
          </button>
        </div>

        <div className="mt-8 text-center text-slate-500 text-xs">
          This is a demonstration prototype for educational purposes
        </div>
      </div>
    </div>
  );
};
