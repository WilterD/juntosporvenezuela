export const projectsData = [
  {
    id: 1,
    name: "Build4Venezuela",
    thumbnail: "./img/build4vzla.png",
    description: "Iniciativa y hackathon cívico para construir soluciones tecnológicas por Venezuela.",
    fullDescription: "Build4Venezuela es un espacio que conecta a desarrolladores, diseñadores y gestores de proyectos para crear herramientas digitales que ayuden a mitigar las crisis y emergencias en Venezuela. Fomenta el código abierto y la colaboración masiva para el bien común.",
    url: "https://build4venezuela.com/",
    hasApi: false,
    apiUrl: "",
    images: ["./img/build4vzla.png"]
  },
  {
    id: 2,
    name: "Red Ayuda Venezuela",
    thumbnail: "./img/red_ayuda.png",
    description: "Plataforma centralizada para reportar y visualizar necesidades y centros de acopio.",
    fullDescription: "Red Ayuda Venezuela permite a los ciudadanos publicar necesidades urgentes (insumos médicos, alimentos, rescate) y a las organizaciones coordinar la respuesta. Su sistema de mapeo ayuda a distribuir eficientemente los recursos donados a las zonas más afectadas.",
    url: "https://redayudavenezuela.com/ayuda/necesidades",
    hasApi: false,
    images: ["./img/red_ayuda.png"]
  },
  {
    id: 3,
    name: "Venezuela Reporta",
    thumbnail: "./img/vzla_reporta.png",
    description: "Sistema de reporte ciudadano sobre incidentes, estado de vías y servicios básicos.",
    fullDescription: "Venezuela Reporta empodera a los ciudadanos para que informen en tiempo real sobre derrumbes, vías bloqueadas, cortes de electricidad o falta de agua. Esta información vital ayuda a los equipos de rescate a trazar rutas seguras y evaluar daños.",
    url: "https://venezuelareporta.org",
    hasApi: true,
    apiUrl: "https://venezuelareporta.org/api-abierta",
    images: ["./img/vzla_reporta.png"]
  },
  {
    id: 4,
    name: "Reencuentra VE",
    thumbnail: "./img/reencuentra.png",
    description: "Aplicación dedicada a la búsqueda y localización de personas desaparecidas.",
    fullDescription: "Tras los recientes eventos sísmicos, Reencuentra VE ofrece una base de datos segura y de fácil acceso donde familiares pueden publicar fotos y datos de personas extraviadas, y los refugios o rescatistas pueden reportar a las personas que han sido localizadas.",
    url: "https://reencuentra-ve.vercel.app",
    hasApi: false,
    images: ["./img/reencuentra.png"]
  },
  {
    id: 5,
    name: "Encuentrame VE",
    thumbnail: "./img/encuentrameve.png",
    description: "Plataforma centralizada para buscar y reportar personas desaparecidas.",
    fullDescription: "Encuentrame VE es una iniciativa solidaria diseñada para consolidar la información de personas extraviadas o no localizadas. Permite a familiares, voluntarios y organizaciones registrar reportes detallados, agilizando los esfuerzos de búsqueda y reencuentro familiar.",
    url: "https://encuentrame-ve.com/",
    hasApi: false,
    images: ["./img/encuentrameve.png"]
  },
  {
    id: 6,
    name: "Bot Localizados Vzla",
    thumbnail: "./img/bot_telegram.jpeg",
    description: "Bot automatizado por WhatsApp y Telegram para reporte de personas con endpoints públicos.",
    fullDescription: "Asistente virtual de acceso rápido desde WhatsApp (wa.me/584225252437) y Telegram (t.me/localizadosvzla2026_bot). Facilita el reporte y búsqueda de personas desaparecidas o localizadas. Cuenta con endpoints públicos, lo que permite a otras iniciativas y plataformas integrarse de forma eficiente.",
    url: "https://t.me/localizadosvzla2026_bot",
    hasApi: true,
    apiUrl: "",
    images: ["./img/bot_telegram.jpeg"]
  },
  {
    id: 7,
    name: "Técnicos Por Venezuela",
    thumbnail: "./img/tecnicos.png",
    description: "Plataforma de registro y atención de casos que requieren asistencia técnica.",
    fullDescription: "Técnicos Por Venezuela es un espacio dedicado a canalizar reportes de averías o necesidades de infraestructura técnica crítica. Voluntarios especialistas pueden visualizar el mapa de casos, priorizar incidencias y coordinar esfuerzos para el restablecimiento de servicios.",
    url: "https://tecnicosporvenezuela.com/casos",
    hasApi: false,
    images: ["./img/tecnicos.png"]
  },
  {
    id: 8,
    name: "Hazlo Hoy",
    thumbnail: "./img/hazlohoy.png",
    description: "Iniciativa de apoyo, acopio y asistencia solidaria para damnificados.",
    fullDescription: "Hazlo Hoy centraliza los esfuerzos de donación y asistencia directa a las víctimas de los sismos recientes. Facilita la logística de entrega y fomenta la participación ciudadana para llevar recursos de primera necesidad a las comunidades más afectadas.",
    url: "https://terremoto.hazlohoy.org/",
    hasApi: false,
    images: ["./img/hazlohoy.png"]
  },
  {
    id: 9,
    name: "Desaparecidos Terremoto Venezuela",
    thumbnail: "./img/desaparecidos_terremoto.png",
    description: "56.000+ reportados | 37.000+ sin contacto | 19.000+ localizados.",
    fullDescription: "Buscar por nombre/cédula, reportar, marcar como encontrado. Sin necesidad de registro. Fuente verificada activa por CNN / El Caribe.",
    url: "https://desaparecidosterremotovenezuela.com",
    hasApi: false,
    images: ["./img/desaparecidos_terremoto.png"]
  },
  {
    id: 10,
    name: "Venezuela Te Busca",
    thumbnail: "./img/venezuela_te_busca.png",
    description: "26.000+ registros. Sección especial Terremoto 2026.",
    fullDescription: "Permite buscar, registrar y marcar como localizado. Esfuerzo de búsqueda activa respaldado por El Caribe.",
    url: "https://venezuelatebusca.com",
    hasApi: false,
    images: ["./img/venezuela_te_busca.png"]
  },
  {
    id: 11,
    name: "Encuentrame VZLA",
    thumbnail: "./img/encuentrame_vzla.png",
    description: "Busca personas encontradas y llevadas a hospitales.",
    fullDescription: "Plataforma enfocada específicamente en registrar e identificar personas que han sido trasladadas a centros hospitalarios tras la emergencia.",
    url: "https://encuentramevzla.com",
    hasApi: false,
    images: ["./img/encuentrame_vzla.png"]
  },
  {
    id: 12,
    name: "venezuela-earthquake-map",
    thumbnail: "./img/earthquake_map.png",
    description: "Heatmap en tiempo real. Proyecto de código abierto (GitHub).",
    fullDescription: "Heatmap en tiempo real. Agrega reportes de YouTube, X/Twitter e Instagram cada 10 min. Centros de acopio verificados. Directorio 30+ hospitales. Licencia MIT.",
    url: "https://github.com/nochinxx/venezuela-earthquake-map",
    hasApi: true,
    apiUrl: "https://github.com/nochinxx/venezuela-earthquake-map",
    images: ["./img/earthquake_map.png"]
  },
  {
    id: 13,
    name: "Yummy SOS",
    thumbnail: "./img/yummy_sos.png",
    description: "Reporte de daños estructurales con foto y GPS.",
    fullDescription: "Yummy moviliza repartidores para llevar agua, alimentos y medicamentos sin costo a refugios. Permite reporte directo desde la aplicación.",
    url: "https://sos.yummyrides.com",
    hasApi: false,
    images: ["./img/yummy_sos.png"]
  },
  {
    id: 14,
    name: "Ayuda Terremoto Venezuela",
    thumbnail: "./img/ayuda_terremoto.png",
    description: "Agregador verificado de recursos y plataformas.",
    fullDescription: "Agregador verificado: plataformas de búsqueda, instrucciones de supervivencia, canales de donación. Links a GlobalGiving, UNICEF y Cruz Roja.",
    url: "https://recursos-venezuela.netlify.app",
    hasApi: false,
    images: ["./img/ayuda_terremoto.png"]
  },
  {
    id: 15,
    name: "Cruz Roja Española",
    thumbnail: "./img/cruz_roja.png",
    description: "Canal oficial de donación monetaria (Bizum, SMS).",
    fullDescription: "Canal oficial. Bizum al 33512 o SMS VENEZUELA al 38092 (6€ íntegros). Coordinación directa con la Cruz Roja Venezolana.",
    url: "https://www2.cruzroja.es/-/ayuda-terremoto-venezuela-2026",
    hasApi: false,
    images: ["./img/cruz_roja.png"]
  },
  {
    id: 16,
    name: "UNICEF Emergencia Venezuela",
    thumbnail: "./img/unicef.png",
    description: "Donación y fondos para protección infantil y asistencia familiar.",
    fullDescription: "Fondos para protección infantil, refugio, alimentos e insumos. Aproximadamente 3,9 millones de niños en zonas afectadas requieren ayuda.",
    url: "https://www.unicef.es/emergencia-terremoto-venezuela",
    hasApi: false,
    images: ["./img/unicef.png"]
  },
  {
    id: 17,
    name: "Save the Children",
    thumbnail: "./img/save_the_children.png",
    description: "Fondo 'Terremoto en Venezuela' orientado a menores.",
    fullDescription: "Donación desde 30€ para ayudar a menores y familias en estado de vulnerabilidad tras los recientes sismos.",
    url: "https://www.savethechildren.es/terremoto-venezuela",
    hasApi: false,
    images: ["./img/save_the_children.png"]
  },
  {
    id: 18,
    name: "We Love Foundation",
    thumbnail: "./img/we_love_foundation.png",
    description: "Iniciativa de GoFundMe para recolección de donaciones.",
    fullDescription: "Meta inicial $300k ya superada. Trabajando en conjunto con Global Empowerment Mission. Proveen alimentos, agua, atención médica y kits de higiene.",
    url: "https://www.gofundme.com/we-love-venezuela-terremoto-2026",
    hasApi: false,
    images: ["./img/we_love_foundation.png"]
  },
  {
    id: 19,
    name: "PAHO/OMS Venezuela Response",
    thumbnail: "./img/paho_oms.png",
    description: "Respuesta oficial sanitaria y situación epidemiológica.",
    fullDescription: "Respuesta oficial de la Organización Panamericana de la Salud. Situación epidemiológica y coordinación internacional de salud.",
    url: "https://www.paho.org/en/venezuela-earthquake-response",
    hasApi: true,
    apiUrl: "https://www.paho.org/en/venezuela-earthquake-response",
    images: ["./img/paho_oms.png"]
  },
  {
    id: 20,
    name: "ReliefWeb — Venezuela Situation",
    thumbnail: "./img/reliefweb.png",
    description: "Informe OCHA. Fuente humanitaria de referencia internacional.",
    fullDescription: "Informe de OCHA. Se actualiza constantemente con datos recopilados directamente en el campo. Es una de las fuentes de información humanitaria más confiables.",
    url: "https://reliefweb.int/report/venezuela-bolivarian-republic/venezuela-earthquake-situation-overview-25-june-2026",
    hasApi: true,
    apiUrl: "https://api.reliefweb.int/v1/reports",
    images: ["./img/reliefweb.png"]
  },
  {
    id: 21,
    name: "PsicoLínea Venezuela (UCAB)",
    thumbnail: "./img/psicolinea.png",
    description: "Atención psicológica gratuita por vía telefónica.",
    fullDescription: "Impulsado por la Universidad Católica Andrés Bello (UCAB). Tel: 0414-121 78 82 / 0424-172 39 81. Solo disponible dentro de Venezuela.",
    url: "tel:04141217882",
    hasApi: false,
    images: ["./img/psicolinea.png"]
  },
  {
    id: 22,
    name: "Grupo Venemergencia",
    thumbnail: "./img/venemergencia.png",
    description: "Plataforma médica venezolana operativa. Afectados físicos y psicológicos.",
    fullDescription: "Atención especializada para personas afectadas física y emocionalmente tras la emergencia, centralizando soporte a través de su plataforma.",
    url: "https://www.instagram.com/venemergencia",
    hasApi: false,
    images: ["./img/venemergencia.png"]
  },
  {
    id: 23,
    name: "Meru",
    thumbnail: "./img/meru.png",
    description: "Remesas sin comisión para depósitos/retiros en Venezuela.",
    fullDescription: "Exoneración indefinida de tarifas para depósitos y retiros en Venezuela. Soporta Pago Móvil, transferencias bancarias y criptomonedas.",
    url: "https://www.instagram.com/somosmeru",
    hasApi: false,
    images: ["./img/meru.png"]
  },
  {
    id: 24,
    name: "Banesco Duplica Donaciones",
    thumbnail: "./img/banesco.png",
    description: "El banco venezolano duplica tu aporte y lo dona a la Cruz Roja.",
    fullDescription: "Cuenta bancaria para donar: 0134-0008-37-0081096451. El banco se compromete a duplicar los fondos recibidos para amplificar la ayuda.",
    url: "https://www.banesco.com",
    hasApi: false,
    images: ["./img/banesco.png"]
  },
  {
    id: 25,
    name: "Movistar / O2 / MasOrange",
    thumbnail: "./img/telecom.png",
    description: "Llamadas internacionales gratuitas.",
    fullDescription: "Llamadas internacionales gratuitas entre España y Venezuela activadas temporalmente por la situación de emergencia.",
    url: "#",
    hasApi: false,
    images: ["./img/telecom.png"]
  },
  {
    id: 26,
    name: "TerremotoVenezuela.com",
    thumbnail: "./img/terremotovenezuela.png",
    description: "Versión web del Heatmap de incidentes en tiempo real.",
    fullDescription: "Heatmap en tiempo real. Agrega reportes de YouTube, X/Twitter e Instagram cada 10 min. Centros de acopio verificados. Directorio 30+ hospitales.",
    url: "https://www.terremotovenezuela.com",
    hasApi: false,
    images: ["./img/terremotovenezuela.png"]
  },
  {
    id: 27,
    name: "ResponseGrid",
    thumbnail: "./img/responsegrid.png",
    description: "Gestión y trazabilidad de insumos y necesidades.",
    fullDescription: "Gestión y trazabilidad en tiempo real de insumos médicos, necesidades logísticas y puntos de donación o recepción para OCHA/ONU.",
    url: "https://responsegrid.app/",
    hasApi: false,
    images: ["./img/responsegrid.png"]
  },
  {
    id: 28,
    name: "Red Venezuela Activa",
    thumbnail: "./img/red_vzla_activa.png",
    description: "Plataforma ciudadana de coordinación de ayuda humanitaria.",
    fullDescription: "Conecta a quién necesita ayuda con quién puede darla. Registro de voluntarios, reporte de casos urgentes, albergues y sus necesidades, mapa en vivo y movilización por WhatsApp.",
    url: "https://ayudavenezuela2026.com",
    hasApi: false,
    images: ["./img/red_vzla_activa.png"]
  },
  {
    id: 29,
    name: "CIVIS Venezuela",
    thumbnail: "./img/civis_vzla.png",
    description: "Sistema de registro y seguimiento de niños rescatados y búsqueda.",
    fullDescription: "Plataforma de apoyo ciudadano para emergencia: búsqueda de personas desaparecidas, reportes de daños, mapa de riesgos, puntos de abastecimiento, réplicas y agentes de IA por WhatsApp. Sistema offline disponible.",
    url: "https://civisvenezuela.com",
    hasApi: true,
    apiUrl: "https://civisvenezuela.com/api",
    images: ["./img/civis_vzla.png"]
  }
];
