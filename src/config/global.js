export default {
  global: {
    componenteFormativo: 'Atención y servicio al cliente',
    descripcionCurso:
      'Se establecen todos los conceptos generales sobre atención al cliente y proveedores, de acuerdo a los parámetros establecidos en la norma de atención a clientes y proveedores según requerimiento y procedimientos del servicio visto desde la logística.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'El cliente y la planeación estratégica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas de la planeación estratégica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Filosofía corporativa estratégica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias organizacionales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Políticas de servicio al cliente',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Importancia del servicio al cliente y proveedores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Fidelización de los clientes',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Comunicación con los clientes',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'CRM - Administración de las relaciones con los clientes',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Producción de servicios - Servucción',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos de la trazabilidad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Trazabilidad en el servicio cliente',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Novedades en el servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Respuesta eficiente al cliente (ECR)',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Servicio post-venta',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'La logística del servicio al cliente - Output cadena de suministros',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Medición del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Satisfacción del cliente',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas de evaluación del servicio',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo:
              'Indicadores de gestión del servicio al cliente (medición del servicio)',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Sistemas de Gestión de Calidad - ISO 9001',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Mejora continua',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Rafael Rodríguez Cuellar',
        cargo: 'Instructor - Experto temático',
        centro: 'Centro de la Industria, la Empresa y los Servicios',
        regional: 'Regional Huila',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Carlos Eduardo Garavito Parada',
          'Gilberto Junior Rodríguez Rodríguez',
          'Ricardo Vásquez Arrovaye',
          'Víctor Raúl Cárdenas Cáceres',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Álvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Albrecht, K. & Beadford, L. (2001). La excelencia del servicio. 3R Editores.',
    },
    {
      referencia:
        'Ariza, R. F. J. & Ariza, R. J. M. (2012). Información y Atención al Cliente. Madrid : McGraw-Hill Education.',
    },
    {
      referencia:
        'Briceño, M. & García, O. (2008). La servucción y la calidad en la fabricación del servicio. Revista Visión Gerencial, núm. 1, enero-junio, 21 - 32.',
    },
    {
      referencia:
        'Castellanos, R. A. (2015). Logística comercial internacional. Barranquilla: ECOE Ediciones.',
    },
    {
      referencia:
        'David, F. R. (2008). Conceptos de Administración Estratégica. México: Pearson Educación.',
    },
    {
      referencia:
        'EAE Business School - Harvard Deusto. (2020). EAE Business School - Harvard Deusto.',
      link:
        'https://retos-directivos.eae.es/cuales-son-los-principales-tipos-de-clientes-del-mercado-irigaray/',
    },
    {
      referencia: 'Economipedia. (2020). Output. ',
      link: 'https://economipedia.com/definiciones/output.html',
    },
    {
      referencia:
        'Jauregui, A. (2018). Cadena cliente-proveedor: en qué consiste y ejemplo.',
      link: 'https://www.lifeder.com/cadena-cliente-proveedor/',
    },
    {
      referencia:
        'López, R. P. S. (2001). Análisis del ECR (Respuesta Eficiente al Consumidor) y propuesta de un modelo complementario de Respuesta Eficiente al Cliente (REC).',
    },
    {
      referencia:
        'Marín-García, J. A.; Bautista-Poveda, Y. & García-Sabater, J. J. (2014). Etapas en la evolución de la mejora continua: Estudio multicaso. Barcelona: 584 - 618.',
    },
    {
      referencia:
        'Mejía, C. C. A. (2003). La propuesta de valor. Medellín: Planning Consultoria.',
    },
    {
      referencia:
        'Montoya, A. C. A. & Boyero S. M. R. (2013). El CRM como herramienta para el servicio al cliente en la organización. Revista Científica "Visión de Futuro", vol. 17, núm. 1, 130 - 151.',
    },
    {
      referencia:
        'Mora, G. L. A. (2008). Indicadores de gestión logística. Bogotá: ECOE Ediciones.',
    },
    {
      referencia:
        'Marín-García, J. A.; Bautista-Poveda, Y. & García-Sabater, J. J. (2014). Etapas en la evolución de la mejora continua: Estudio multicaso. Barcelona: 584 - 618.',
    },
    {
      referencia:
        'Noguera, H. A. (2014). Estrategia organizacional: una propuesta de estudio. Estudios Gerenciales vol. 30, 153 – 161.',
    },
    {
      referencia:
        'Normas ISO. (2021). ISO 9001:2015(es). Sistemas de gestión de la calidad — Requisitos.',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'Questionpro. (2021). ¿Cuáles son los KPIs de servicio al cliente más efectivos?',
      link: 'https://www.questionpro.com/blog/es/kpis-de-servicio-al-cliente/',
    },
    {
      referencia:
        'Velasco, N.; Montoya, R.; I. A. & Montoya R., L. A. (2011). Análisis del proceso de comunicación con clientes mediante la aplicación de campañas publicitarias. Revista CIFE, 18, (13), 153-174.',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'persona que compra en una tienda, o que utiliza con asiduidad los servicios de un profesional o empresa.',
    },
    {
      termino: 'Estrategia',
      significado:
        'en un proceso regulable, conjunto de las reglas que buscan una decisión óptima en cada momento.',
    },
    {
      termino: 'Expectativa',
      significado: 'esperanza de realizar o conseguir algo.',
    },
    {
      termino: 'Fidelización',
      significado:
        'conseguir, de diferentes modos, que los empleados y clientes de una empresa permanezcan fieles a ella.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'son un conjunto de métricas que se utilizan para medir los resultados de una empresa.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'la ejecución constante de acciones que mejoran los procesos en una organización, minimizando al máximo el margen de error y de pérdidas.',
    },
    {
      termino: 'Misión',
      significado:
        'la misión de una empresa es el motivo por el que existe dicha empresa, su razón de ser.',
    },
    {
      termino: 'Percepción',
      significado:
        'sensación interior que resulta de una impresión material producida en los sentidos corporales.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'la planificación estratégica es la herramienta utilizada por las empresas como un proceso sistemático que permite el desarrollo y la implementación de planes, con el propósito de alcanzar los objetivos que se han propuesto.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Aquella persona física o jurídica que provee o suministra profesionalmente de un determinado bien o servicio a otros individuos o sociedades, como forma de actividad económica y a cambio de una contraprestación.',
    },
    {
      termino: 'Servicio',
      significado:
        'es la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado.',
    },
    {
      termino: 'Servucción',
      significado:
        'sistema de producción del servicio, es decir, la parte visible de la organización en la que se producen, distribuyen y consumen los servicios.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'el control interno es un procedimiento que se enmarca en el control de recursos y activos de una empresa, y sirve para llevar un registro sobre su actividad y trazabilidad.',
    },
    {
      termino: 'Visión',
      significado:
        'la visión de una empresa describe el objetivo que espera lograr en un futuro.',
    },
  ],
  complementario: [
    {
      texto:
        'Wholemeaning (2018). 6 pasos a tomar para mejorar la comunicación con tus clientes.',
      tipo: 'Pagina web',
      link:
        'https://www.wholemeaning.com/6-pasos-a-tomar-para-mejorar-la-comunicacion-con-tus-clientes/',
    },
  ],
}
