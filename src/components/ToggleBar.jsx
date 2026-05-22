import { Languages, Printer } from 'lucide-react';

export default function ToggleBar({
  language,
  labels,
  onLanguageChange,
  onPrint,
}) {
  return (
    <div className="controls" aria-label={labels.controls}>
      <div className="toggle-cluster">
        <div className="toggle-group" aria-label={labels.language}>
          <button
            className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
            type="button"
            onClick={() => onLanguageChange('en')}
          >
            <Languages size={14} aria-hidden="true" />
            English
          </button>
          <button
            className={`toggle-btn ${language === 'es' ? 'active' : ''}`}
            type="button"
            onClick={() => onLanguageChange('es')}
          >
            <Languages size={14} aria-hidden="true" />
            Español
          </button>
        </div>

      </div>

      <button className="ctrl-btn" type="button" onClick={onPrint}>
        <Printer size={14} aria-hidden="true" />
        {labels.print}
      </button>
    </div>
  );
}
