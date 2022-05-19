export default {
  global: {
    componenteFormativo: 'Marcos de seguridad <em>cloud</em>',
    descripcionCurso:
      'El presente componente formativo trabaja sobre tres de los marcos más importantes y de mayor adopción en cuanto a ciberseguridad; para lograr este objetivo, es necesario apropiar el tema del análisis de riesgos y las metodologías de aplicación, así como los estándares y los controles vigentes, que pueden ser utilizados para este fin.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Características de las metodologías de análisis y evaluación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Objetivos de las metodologías de análisis y evaluación de activos ',
            hash: 'objetivos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Que es el análisis de riesgos',
            hash: 'riesgos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Metodologías utilizadas en el análisis de riesgos',
            hash: 'metodos',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Controles de seguridad y marcos de referencia para servicios <i>cloud</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Controles <em>Cloud Security Alliance - Security Guidance for Critical Areas of Focus in Cloud Computing v4.0</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Controles NIST Marco del Instituto Nacional de Estándares y Tecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Núcleo ',
            hash: 'nucleo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Niveles de Implementación ("TIERs")',
            hash: 'tiers',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Perfil del marco',
            hash: 'marco',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Metodologías utilizadas en el análisis de riesgos',
            hash: 'riesgos',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-network-wired',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book-open',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-copyright',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Federation of European Risk Management Associations [FERMA]. (2003). Estándares de gerencia de riesgos.',
      link:
        'https://www.theirm.org/media/6836/rm_standard_spanish_15_11_04-1.pdf',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (s. f.). ISO 31000 — Risk management. Popular Standards. ',
      link: 'https://www.iso.org/iso-31000-risk-management.html',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (2018). ISO/IEC 27005:2018(en) Information technology — Security techniques — Information security risk management. Online Browsing Platform. ',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:27005:ed-3:v1:en',
    },
    {
      referencia:
        'Jesaja, M. (2019). Construcción de modelos de conocimiento de NIST SP 800-181. Universidad Carlos III de Madrid. ',
      link: 'https://e-archivo.uc3m.es/handle/10016/30383',
    },
    {
      referencia:
        'Mogull, R., Arlen, J., Gilbert, F., Lane, A., Mortman, D., Peterson, G. y Rothman, M. (2017). Security guidance for critical areas of focus in cloud computing v4. 0. Cloud Security Alliance. ',
      link:
        'https://downloads.cloudsecurityalliance.org/assets/research/security-guidance/security-guidance-v4-FINAL.pdf',
    },
    {
      referencia:
        'Mohanan, S., Sridhar, N., y Bhatia, S. (2021). Comparative Analysis of Cloud Computing Security Frameworks for the Financial Sector. En: X-S Yang, S. Sherratt, N. Dey, A. Joshi (eds) Proceedings of Sixth International Congress on Information and Communication Technology. ',
      link: 'https://doi.org/10.1007/978-981-16-2380-6_90',
    },
    {
      referencia:
        'Rizzo, D. (2019). Ciberseguridad implementando el “Nist Cybersecurity Framework”. Universidad de Buenos Aires.',
      link:
        'http://bibliotecadigital.econ.uba.ar/download/tpos/1502-1460_RizzoD.pdf',
    },
    {
      referencia:
        'Ruben.Ramiro. (2018). Cómo implantar el Framework NIST. Ciberseguridad.BLOG.',
      link: 'https://ciberseguridad.blog/como-implantar-el-framework-nist',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza (<i>Threat</i>)',
      significado:
        'Son eventos o incidentes que pueden provocar daño o pérdidas en un recurso informático.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Conjunto de procedimientos y herramientas que se implementan para proteger la información que se genera y procesa a través de computadoras, servidores, dispositivos móviles, redes y sistemas electrónicos.',
    },
    {
      termino: 'Control',
      significado:
        'Directrices y buenas prácticas que deben ser validadas e implementadas en actividades y procesos de adopción de la ciberseguridad.',
    },
    {
      termino: 'Dominio',
      significado:
        'Conjunto que incluye todos los activos de la información que deben proteger y cumplir en su totalidad.',
    },
    {
      termino: 'ISO',
      significado: 'Organización de Estándares Internacionales',
    },
    {
      termino: 'ISO 27000',
      significado:
        'Conjunto de normas de la Organización de Estándares Internacionales orientadas al uso y aplicación de buenas prácticas en relación con el diseño,  la implantación, mantenimiento y gestión del Sistema de Gestión de Seguridad de la Información (SGSI).',
    },
    {
      termino: 'NIST',
      significado: 'Instituto Nacional de Estándares y Tecnología americano',
    },
    {
      termino: 'Riesgo',
      significado:
        'Es la probabilidad en la ocurrencia de una amenaza  a la seguridad provocando un impacto determinado.',
    },
    {
      termino: 'Salvaguarda',
      significado:
        'Estrategia o control implementado para la mitigación de los riesgos.',
    },
    {
      termino: 'Vulnerabilidad (<i>Vulnerability</i>)',
      significado:
        'Es un punto débil o de fallo de un activo o control que puede ser explotado por una o más amenazas.',
    },
  ],
  complementario: [
    {
      texto:
        'Superintendencia de Industria y Comercio. (s. f.). Guía para la implementación del principio de responsabilidad demostrada (Accountability). ',
      tipo: 'PDF',
      descarga: '/downloads/Guia_Accountability.pdf',
    },
    {
      texto: 'Normas ISO. (s. f.). ISO 27001 Seguridad de la información.',
      tipo: 'Página web',
      link: 'https://www.normas-iso.com/iso-27001/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca, Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital, Centro de Diseño y Metrología',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora Instruccional',
        centro: 'Regional distrito capital - Centro de gestión industrial. ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Wilson Andrés Arenales Cáceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
