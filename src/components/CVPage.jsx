import Sidebar from './Sidebar.jsx';
import Section from './Section.jsx';

export default function CVPage({ cv }) {
  return (
    <main className="cv tech-cv">
      <header className="cv-header">
        <div className="header-inner">
          <div>
            <h1 className="name">
              {cv.name.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="tagline">{cv.tagline}</p>
          </div>

          <address className="header-contact">
            {cv.contact.map((item) =>
              item.href ? (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <span key={item.label}>{item.label}</span>
              ),
            )}
          </address>
        </div>
      </header>

      <div className="cv-body">
        <Sidebar sections={cv.sidebar} />
        <div className="cv-main">
          {cv.sections.map((section) => (
            <Section section={section} key={section.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
