import { useMemo, useState } from 'react';
import ToggleBar from './components/ToggleBar.jsx';
import CVPage from './components/CVPage.jsx';
import { en } from './data/en.js';
import { es } from './data/es.js';

const content = { en, es };

export default function App() {
  const [language, setLanguage] = useState('en');

  const cv = useMemo(() => content[language].tech, [language]);

  return (
    <>
      <ToggleBar
        language={language}
        labels={content[language].ui}
        onLanguageChange={setLanguage}
        onPrint={() => window.print()}
      />
      <CVPage cv={cv} />
    </>
  );
}
