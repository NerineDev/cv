import { publicContact, techTags } from './shared.js';

export const es = {
  ui: {
    controls: 'Controles del CV',
    language: 'Idioma',
    print: 'Guardar como PDF',
  },
  tech: {
    name: ['Nerine', 'Aoi'],
    tagline: 'Desarrolladora Web Junior Â· Benalmadena, Malaga',
    contact: publicContact.tech,
    sidebar: [
      {
        type: 'skillGroups',
        title: 'Stack tÃ©cnico',
        groups: [
          { label: 'Lenguajes', items: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
          { label: 'Frameworks y librerÃ­as', items: ['FastAPI', 'Bootstrap 5', 'Flask', 'jQuery'] },
          { label: 'Bases de datos e integraciones', items: ['PostgreSQL', 'REST APIs', 'Stripe', 'PayPal SDK'] },
          {
            label: 'Herramientas y plataformas',
            items: ['Git', 'GitHub', 'VS Code', 'Moodle', "Ren'Py", 'n8n', 'Google Apps Script', 'WordPress', 'Figma'],
          },
          { label: 'DiseÃ±o', items: ['Photoshop', 'Premiere', 'After Effects', 'Figma'] },
        ],
      },
      {
        type: 'languages',
        title: 'Idiomas',
        items: [
          { name: 'EspaÃ±ol', level: 'Nativo', score: 5 },
          { name: 'InglÃ©s', level: 'C2 - Cambridge', score: 5 },
          { name: 'FrancÃ©s', level: 'B2 - Intermedio alto', score: 4 },
          { name: '+ 5 idiomas adicionales', level: 'Nivel intermedio a bÃ¡sico' },
        ],
      },
      {
        type: 'note',
        title: 'FormaciÃ³n',
        lines: [
          { text: 'DAW - Desarrollo de Aplicaciones Web', strong: true },
          { text: 'CESUR Â· 2024 - junio 2026', tone: 'dim' },
          { text: 'FinalizaciÃ³n prevista: junio 2026', tone: 'highlight' },
        ],
      },
      {
        type: 'note',
        title: 'Otros datos',
        lines: [{ text: 'Carnet de conducir y vehÃ­culo propio' }, { text: 'Disponible desde junio de 2026' }],
      },
    ],
    sections: [
      {
        type: 'profile',
        title: 'Perfil',
        text: 'Desarrolladora web junior con finalizaciÃ³n prevista en junio de 2026, un proyecto full-stack entregado y experiencia de prÃ¡cticas en desarrollo de software profesional. Mi trayectoria en gestiÃ³n operativa, turismo y atenciÃ³n multilingÃ¼e aporta una visiÃ³n de negocio real a los proyectos tÃ©cnicos: desarrollo software pensado para resolver problemas concretos, no solo ejercicios. Acostumbrada a trabajar de forma autÃ³noma, aprender herramientas nuevas con rapidez y comunicarme entre equipos e idiomas.',
      },
      {
        type: 'entries',
        title: 'Proyectos',
        entries: [
          {
            name: 'Sesvia',
            date: '2025 - 2026',
            subtitle: 'Plataforma full-stack de gestiÃ³n de citas y servicios Â· Proyecto final',
            bullets: [
              'Plataforma integral de reservas para profesionales independientes (bienestar, formaciÃ³n, coaching)',
              'IntegraciÃ³n de pagos con Stripe y PayPal, checkout funcional y gestiÃ³n de webhooks',
              'Panel de administraciÃ³n, Ã¡rea de cliente, calendario de citas y sistema de notificaciones por correo',
            ],
            tags: techTags.sesvia,
          },
          {
            name: 'CarriComms',
            date: '2024 - actualidad',
            subtitle: 'Relay de chat multiplataforma para streamers Â· En desarrollo activo',
            bullets: [
              'EnvÃ­a mensajes de chat en directo de Twitch, YouTube y Kick a un Ãºnico canal de Discord',
              'Gestiona autenticaciÃ³n con varias APIs, eventos en tiempo real y normalizaciÃ³n de mensajes',
            ],
            tags: techTags.carriComms,
          },
          {
            name: 'Cupid Hex',
            date: 'En desarrollo',
            subtitle: 'Simulador de chat x novela visual Â· Motor propio de interfaz de mensajerÃ­a',
            bullets: [
              'Historia presentada mediante una interfaz simulada de mÃ³vil/chat, con rutas ramificadas y una mecÃ¡nica donde una sola elecciÃ³n puede bloquear el destino',
              "Motor de chat propio en Ren'Py para secuenciaciÃ³n de mensajes, simulaciÃ³n de contactos y personalizaciÃ³n de interfaz; escritura, diseÃ±o de personajes y UX parcialmente desarrollados",
            ],
            tags: techTags.cupidHex,
          },
          {
            name: 'Once Upon a Tale',
            date: 'En desarrollo',
            subtitle: 'Novela visual romÃ¡ntica de fantasÃ­a y cuentos Â· Desarrollo inicial',
            bullets: ['Historia original, worldbuilding y direcciÃ³n artÃ­stica de personajes'],
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
            subtitle: 'PrÃ¡cticas de desarrollo Â· FCT de DAW',
            bullets: [
              'Trabajo con DataFlex para desarrollo de aplicaciones empresariales en entorno profesional',
              'AdministraciÃ³n y configuraciÃ³n de un entorno Moodle 5.1.3 completo; diseÃ±o y creaciÃ³n de un curso dentro de la plataforma',
              'DiseÃ±o y desarrollo de un plugin de bloque personalizado en PHP con soporte multilingÃ¼e en 6 idiomas (EN, ES, CA, GL, EU, FR)',
            ],
          },
          {
            name: 'Benalcoast Properties S.L.',
            date: 'sep 2022 - jul 2025',
            subtitle: 'Coordinadora de operaciones Â· Benalmadena',
            bullets: [
              'CreaciÃ³n de herramientas de automatizaciÃ³n con Google Apps Script para gestionar tareas de mantenimiento y datos operativos',
              'GestiÃ³n de documentaciÃ³n estructurada: contratos, registros de cumplimiento y sistemas de registro de huÃ©spedes',
              'DiseÃ±o de materiales visuales de empresa: logotipo, seÃ±alÃ©tica interna y documentos para huÃ©spedes',
            ],
          },
        ],
      },
    ],
  },
};

