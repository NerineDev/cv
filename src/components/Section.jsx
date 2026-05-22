function RichLine({ item }) {
  if (typeof item === 'string') {
    return item;
  }

  return (
    <>
      {item.strong && <strong>{item.strong}</strong>}
      {item.text}
    </>
  );
}

function Entry({ entry }) {
  return (
    <article className="entry">
      <div className="entry-top">
        <h3 className="entry-name">{entry.name}</h3>
        <span className="entry-date">{entry.date}</span>
      </div>
      <p className="entry-sub">{entry.subtitle}</p>
      {entry.bullets && (
        <ul className="entry-ul">
          {entry.bullets.map((bullet, index) => (
            <li key={`${entry.name}-${index}`}>
              <RichLine item={bullet} />
            </li>
          ))}
        </ul>
      )}
      {entry.tags && (
        <div className="tags">
          {entry.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Section({ section }) {
  return (
    <section className="section">
      <h2 className="sec-title">{section.title}</h2>

      {section.type === 'profile' && <p className="profile-text">{section.text}</p>}

      {section.type === 'entries' && section.entries.map((entry) => <Entry entry={entry} key={entry.name} />)}

      {section.type === 'bullets' && (
        <ul className="entry-ul standalone-list">
          {section.items.map((item, index) => (
            <li key={`${section.title}-${index}`}>
              <RichLine item={item} />
            </li>
          ))}
        </ul>
      )}

      {section.type === 'education' &&
        section.items.map((item) => (
          <div className="edu-block" key={item.title || item.meta}>
            {item.title && <h3 className="edu-title">{item.title}</h3>}
            <p className={`edu-meta ${item.note ? 'edu-note' : ''}`}>{item.meta}</p>
          </div>
        ))}
    </section>
  );
}
