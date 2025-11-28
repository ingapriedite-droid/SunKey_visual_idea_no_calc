import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ResultPage } from './components/ResultPage';
import { ConsciousnessMap } from './components/ConsciousnessMap';

type View = 'landing' | 'result' | 'map';

function App() {
  const [selectedGK, setSelectedGK] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleSelectGeneKey = (geneKey: number) => {
    setSelectedGK(geneKey);
    setCurrentView('result');
  };

  const handleReset = () => {
    setSelectedGK(null);
    setCurrentView('landing');
  };

  const handleShowMap = () => {
    setCurrentView('map');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {currentView === 'landing' && (
        <LandingPage onSelectGeneKey={handleSelectGeneKey} onShowMap={handleShowMap} />
      )}
      {currentView === 'result' && selectedGK !== null && (
        <ResultPage geneKey={selectedGK} onReset={handleReset} />
      )}
      {currentView === 'map' && (
        <ConsciousnessMap onBack={handleReset} onSelectGeneKey={handleSelectGeneKey} />
      )}
    </div>
  );
}

export default App;
