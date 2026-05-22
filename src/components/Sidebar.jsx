export default function Sidebar({ sections }) {
  return (
    <aside className="cv-sidebar">
      {sections.map((section) => (
        <div className="sb-section" key={section.title}>
          <h2 className="sb-title">{section.title}</h2>

          {section.type === 'skillGroups' &&
            section.groups.map((group) => (
              <div key={group.label}>
                <h3 className="sg-label">{group.label}</h3>
                <p className="sg-items">{group.items.join(' · ')}</p>
              </div>
            ))}

          {section.type === 'skills' &&
            section.items.map((item) => (
              <p className="skill-item" key={item}>
                {item}
              </p>
            ))}

          {section.type === 'languages' &&
            section.items.map((item) => (
              <div className="lang-item" key={item.name}>
                <span className="lang-name">{item.name}</span>
                <span className="lang-level">{item.level}</span>
                {Number.isInteger(item.score) && (
                  <div className="lang-bar" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((dot) => (
                      <span className={dot < item.score ? 'on' : ''} key={dot} />
                    ))}
                  </div>
                )}
              </div>
            ))}

          {section.type === 'note' && (
            <div className="sb-note">
              {section.lines.map((line) => (
                <p className={line.tone || ''} key={line.text}>
                  {line.strong ? <strong>{line.text}</strong> : line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
