import { publicContact, techTags } from './shared.js';

export const en = {
  ui: {
    controls: 'CV controls',
    language: 'Language',
    print: 'Save as PDF',
  },
  tech: {
    name: ['Nerine', 'Aoi'],
    tagline: 'Junior Web Developer · Benalmadena, Malaga',
    contact: publicContact.tech,
    sidebar: [
      {
        type: 'skillGroups',
        title: 'Tech Stack',
        groups: [
          { label: 'Languages', items: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
          { label: 'Frameworks & Libraries', items: ['FastAPI', 'Bootstrap 5', 'Flask', 'jQuery'] },
          { label: 'Database & Integrations', items: ['PostgreSQL', 'REST APIs', 'Stripe', 'PayPal SDK'] },
          {
            label: 'Tools & Platforms',
            items: ['Git', 'GitHub', 'VS Code', 'Moodle', "Ren'Py", 'n8n', 'Google Apps Script', 'WordPress', 'Figma'],
          },
          { label: 'Design', items: ['Photoshop', 'Premiere', 'After Effects', 'Figma'] },
        ],
      },
      {
        type: 'languages',
        title: 'Languages',
        items: [
          { name: 'Spanish', level: 'Native', score: 5 },
          { name: 'English', level: 'C2 - Cambridge', score: 5 },
          { name: 'French', level: 'B2 - Upper Intermediate', score: 4 },
          { name: '+ 5 additional languages', level: 'Intermediate to basic' },
        ],
      },
      {
        type: 'note',
        title: 'Education',
        lines: [
          { text: 'DAW - Web App Development', strong: true },
          { text: 'CESUR · 2024 - June 2026', tone: 'dim' },
          { text: 'Graduating June 2026', tone: 'highlight' },
          { text: 'Full Stack Junior Developer with JavaScript and Node.js', strong: true },
          { text: 'CoreNetworks · Oct 2025 - Jan 2026', tone: 'dim' },
          { text: 'Technology Tools for Commercial Customer Management', strong: true },
          { text: '1comDOS · Oct-Nov 2025', tone: 'dim' },
          { text: 'IT Security Management in Business', strong: true },
          { text: 'Talentus · Mar-May 2026', tone: 'dim' },
          { text: 'Smart Marketing for Tourism: AI and Automation Strategies', strong: true },
          { text: 'Andalucia NEXUS · Mar-May 2026', tone: 'dim' },
          { text: 'AI Applied to Tourist Customer Experience and Management', strong: true },
          { text: 'Andalucia NEXUS · Mar-May 2026', tone: 'dim' },
        ],
      },
      {
        type: 'note',
        title: 'Additional',
        lines: [{ text: 'Driving licence & own vehicle' }, { text: 'Available from June 2026' }],
      },
    ],
    sections: [
      {
        type: 'profile',
        title: 'Profile',
        text: 'Junior web developer graduating June 2026, with a delivered full-stack capstone project and active internship experience in professional software development. A background spanning operations management, tourism, and multilingual client work brings genuine business sense to technical builds: writing software that solves real problems, not just exercises. Comfortable working independently, picking up new tools fast, and communicating across teams and languages.',
      },
      {
        type: 'entries',
        title: 'Projects',
        entries: [
          {
            name: 'Sesvia',
            date: '2025 - 2026',
            subtitle: 'Full-stack appointment & service management platform · Capstone project',
            bullets: [
              'End-to-end booking platform for independent professionals (wellness, tutors, coaches)',
              'Integrated Stripe and PayPal payment processing with live checkout and webhook handling',
              'Admin dashboard, client portal, appointment calendar, and email notification system',
            ],
            tags: techTags.sesvia,
          },
          {
            name: 'CarriComms',
            date: '2024 - present',
            subtitle: 'Cross-platform chat relay for live streamers · Active development',
            bullets: [
              'Routes live chat messages from Twitch, YouTube, and Kick simultaneously into a single Discord channel',
              'Handles multi-platform API authentication, real-time event streams, and message normalisation',
            ],
            tags: techTags.carriComms,
          },
          {
            name: 'Cupid Hex',
            date: 'In progress',
            subtitle: 'Chat simulator x visual novel · Custom messaging interface engine',
            bullets: [
              'Story delivered through a simulated phone/chat UI with branching paths and a single-choice-locks-fate mechanic',
              "Custom chat engine built in Ren'Py handling message sequencing, contact simulation, and UI skinning; original writing, character design, and UX partially complete",
            ],
            tags: techTags.cupidHex,
          },
          {
            name: 'Once Upon a Tale',
            date: 'In progress',
            subtitle: 'Fairytale romance visual novel · Early development',
            bullets: ['Original story, world-building, and character art direction'],
            tags: techTags.onceUponATale,
          },
        ],
      },
      {
        type: 'entries',
        title: 'Experience',
        entries: [
          {
            name: 'DataControl',
            date: 'Mar - Jun 2026',
            subtitle: 'Development Intern · DAW Compulsory Internship',
            bullets: [
              'Worked with DataFlex for business application development in a professional environment',
              'Administered and configured a full Moodle 5.1.3 environment; designed and built a complete course within the platform',
              'Conceived and developed a custom PHP block plugin with multilingual support across 6 languages (EN, ES, CA, GL, EU, FR)',
            ],
          },
          {
            name: 'Benalcoast Properties S.L.',
            date: 'Sep 2022 - Jul 2025',
            subtitle: 'Operations Coordinator · Benalmadena',
            bullets: [
              'Built Google Apps Script automation tools to manage maintenance tasks and operational data',
              'Managed structured documentation: contracts, compliance records, and guest registration systems',
              'Designed all company visual materials: logo, internal signage, and guest-facing documents',
            ],
          },
        ],
      },
    ],
  },
};

