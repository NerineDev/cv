import { publicContact, techTags } from './shared.js';

export const es = {
  ui: {
    controls: 'Controles del CV',
    language: 'Idioma',
    print: 'Guardar como PDF',
  },
  tech: {
    name: ['Nerine', 'Aoi'],
    tagline: 'Desarrolladora Web Junior · Benalmadena, Malaga',
    contact: publicContact.tech,
    sidebar: [
      {
        type: 'skillGroups',
        title: 'Stack técnico',
        groups: [
          { label: 'Lenguajes', items: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
          { label: 'Frameworks y librerías', items: ['FastAPI', 'Bootstrap 5', 'Flask', 'jQuery'] },
          { label: 'Bases de datos e integraciones', items: ['PostgreSQL', 'REST APIs', 'Stripe', 'PayPal SDK'] },
          {
            label: 'Herramientas y plataformas',
            items: ['Git', 'GitHub', 'VS Code', 'Moodle', "Ren'Py", 'n8n', 'Google Apps Script', 'WordPress', 'Figma'],
          },
          { label: 'Diseño', items: ['Photoshop', 'Premiere', 'After Effects', 'Figma'] },
        ],
      },
      {
        type: 'languages',
        title: 'Idiomas',
        items: [
          { name: 'Español', level: 'Nativo', score: 5 },
          { name: 'Inglés', level: 'C2 - Cambridge', score: 5 },
          { name: 'Francés', level: 'B2 - Intermedio alto', score: 4 },
          { name: '+ 5 idiomas adicionales', level: 'Nivel intermedio a básico' },
        ],
      },
      {
        type: 'note',
        title: 'Formación',
        lines: [
          { text: 'DAW - Desarrollo de Aplicaciones Web', strong: true },
          { text: 'CESUR · 2024 - junio 2026', tone: 'dim' },
          { text: 'Finalización prevista: junio 2026', tone: 'highlight' },
          { text: 'Full Stack Junior Developer with JavaScript and Node.js', strong: true },
          { text: 'CoreNetworks · oct. 2025 - ene. 2026', tone: 'dim' },
          { text: 'Herramientas Tecnológicas al servicio de la gestión comercial de clientes', strong: true },
          { text: '1comDOS · oct.-nov. 2025', tone: 'dim' },
          { text: 'Gestión de la seguridad informática en la empresa', strong: true },
          { text: 'Talentus · mar.-may. 2026', tone: 'dim' },
          { text: 'Marketing Inteligente para el Turismo: Estrategias con IA y Automatización', strong: true },
          { text: 'Andalucía NEXUS · mar.-may. 2026', tone: 'dim' },
          { text: 'IA aplicada a la experiencia y gestión del cliente turístico', strong: true },
          { text: 'Andalucía NEXUS · mar.-may. 2026', tone: 'dim' },
        ],
      },
      {
        type: 'note',
        title: 'Otros datos',
        lines: [{ text: 'Carnet de conducir y vehículo propio' }, { text: 'Disponible desde junio de 2026' }],
      },
    ],
    sections: [
      {
        type: 'profile',
        title: 'Perfil',
        text: 'Desarrolladora web junior con finalización prevista en junio de 2026, un proyecto full-stack entregado y experiencia de prácticas en desarrollo de software profesional. Mi trayectoria en gestión operativa, turismo y atención multilingüe aporta una visión de negocio real a los proyectos técnicos: desarrollo software pensado para resolver problemas concretos, no solo ejercicios. Acostumbrada a trabajar de forma autónoma, aprender herramientas nuevas con rapidez y comunicarme entre equipos e idiomas.',
      },
      {
        type: 'entries',
        title: 'Proyectos',
        entries: [
          {
            name: 'Sesvia',
            date: '2025 - 2026',
            subtitle: 'Plataforma full-stack de gestión de citas y servicios · Proyecto final',
            bullets: [
              'Plataforma integral de reservas para profesionales independientes (bienestar, formación, coaching)',
              'Integración de pagos con Stripe y PayPal, checkout funcional y gestión de webhooks',
              'Panel de administración, área de cliente, calendario de citas y sistema de notificaciones por correo',
            ],
            tags: techTags.sesvia,
          },
          {
            name: 'CarriComms',
            date: '2024 - actualidad',
            subtitle: 'Relay de chat multiplataforma para streamers · En desarrollo activo',
            bullets: [
              'Envía mensajes de chat en directo de Twitch, YouTube y Kick a un único canal de Discord',
              'Gestiona autenticación con varias APIs, eventos en tiempo real y normalización de mensajes',
            ],
            tags: techTags.carriComms,
          },
          {
            name: 'Cupid Hex',
            date: 'En desarrollo',
            subtitle: 'Simulador de chat x novela visual · Motor propio de interfaz de mensajería',
            bullets: [
              'Historia presentada mediante una interfaz simulada de móvil/chat, con rutas ramificadas y una mecánica donde una sola elección puede bloquear el destino',
              "Motor de chat propio en Ren'Py para secuenciación de mensajes, simulación de contactos y personalización de interfaz; escritura, diseño de personajes y UX parcialmente desarrollados",
            ],
            tags: techTags.cupidHex,
          },
          {
            name: 'Once Upon a Tale',
            date: 'En desarrollo',
            subtitle: 'Novela visual romántica de fantasía y cuentos · Desarrollo inicial',
            bullets: ['Historia original, worldbuilding y dirección artística de personajes'],
            tags: techTags.onceUponATale,
          },
        ],
      },
      {
        type: 'entries',
        title: 'Experiencia',
        entries: [
          {
            name: 'DataControl',
            date: 'mar - jun 2026',
            subtitle: 'Prácticas de desarrollo · FCT de DAW',
            bullets: [
              'Trabajo con DataFlex para desarrollo de aplicaciones empresariales en entorno profesional',
              'Administración y configuración de un entorno Moodle 5.1.3 completo; diseño y creación de un curso dentro de la plataforma',
              'Diseño y desarrollo de un plugin de bloque personalizado en PHP con soporte multilingüe en 6 idiomas (EN, ES, CA, GL, EU, FR)',
            ],
          },
          {
            name: 'Benalcoast Properties S.L.',
            date: 'sep 2022 - jul 2025',
            subtitle: 'Coordinadora de operaciones · Benalmadena',
            bullets: [
              'Creación de herramientas de automatización con Google Apps Script para gestionar tareas de mantenimiento y datos operativos',
              'Gestión de documentación estructurada: contratos, registros de cumplimiento y sistemas de registro de huéspedes',
              'Diseño de materiales visuales de empresa: logotipo, señalética interna y documentos para huéspedes',
            ],
          },
        ],
      },
    ],
  },
};

