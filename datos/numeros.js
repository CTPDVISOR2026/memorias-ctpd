/* =====================================================================
   MEMORIAS DEL CTPD — CATÁLOGO DE NÚMEROS
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que editar para publicar un número
   nuevo. Pasos:
     1. Cree la carpeta  numeros/AAAA-nNN/  (ej. numeros/2028-n02/)
        y guarde allí el PDF y la portada (portada.jpg).
     2. Copie el bloque del número 1 (desde { hasta },), péguelo
        ENCIMA de él y cambie los datos.
     3. El número que esté de primero en la lista se muestra como
        "Número actual". Los demás pasan solos al Archivo.
   La página de cada número queda en:  .../memorias-ctpd/#numero-N
   ===================================================================== */

window.PUBLICACION = {
  nombre: "Memorias del CTPD",
  nombreCompleto: "Memorias del Consejo Territorial de Planeación Distrital",
  editor: "Consejo Territorial de Planeación Distrital – CTPD",
  issn: "En trámite",
  periodicidad: "Bienal",
  idioma: "Español",
  lugar: "Bogotá D. C., Colombia",
  formato: "PDF · 17 × 24 cm",
  sitioCTPD: "https://ctpd.gov.co/",
  visor: "https://ctpdvisor2026.github.io/visor-ctpd/",
  // Dirección pública definitiva del sitio (se usa en la cita sugerida)
  urlSitio: "https://ctpdvisor2026.github.io/memorias-ctpd/"
};

window.NUMEROS = [
  {
    numero: 1,
    anio: 2026,
    fecha: "Noviembre de 2026",
    titulo: "Voces diversas en la planeación participativa: memorias",
    subtitulo: "Planeación, participación ciudadana y perspectivas de Bogotá, 2019–2026",
    periodo: "2019–2026",
    pdf: "numeros/2026-n01/memorias-ctpd-n01.pdf",
    portada: "numeros/2026-n01/portada.jpg",
    paginas: 332,
    peso: "16,9 MB",
    resumen:
      "Primer número de las Memorias del Consejo Territorial de Planeación Distrital. Reúne los conceptos " +
      "que el CTPD entregó sobre los planes de desarrollo y de ordenamiento territorial de Bogotá, experiencias " +
      "territoriales de participación, estudios elaborados por consejeras y consejeros, y la visión prospectiva " +
      "de las comisiones permanentes. Es, a la vez, un ejercicio de memoria institucional y de rendición de " +
      "cuentas a la ciudadanía.",
    editorial: {
      extracto:
        "Esta publicación constituye un ejercicio de memoria institucional y de rendición de cuentas a la " +
        "ciudadanía. Más que cerrar un ciclo, busca dejar un punto de referencia para las nuevas generaciones " +
        "de consejeras y consejeros.",
      firma: "Stella Jacqueline Hernández Leguizamón",
      cargo: "Presidenta del CTPD",
      pagina: 11
    },
    equipo: [
      { grupo: "Junta Directiva", personas: [
        "Stella Jacqueline Hernández Leguizamón — Presidenta",
        "Nohora Alexandra Fonseca Murcia — Vicepresidenta",
        "Gloria Andrea Rosero Delaossa — Secretaria General"
      ]},
      { grupo: "Comité Editorial", personas: [
        "Nohora Alexandra Fonseca Murcia — Editora en jefe",
        "Ruth Estella Domínguez Amorocho",
        "Lilia Avella Bojacá",
        "Stella Jacqueline Hernández Leguizamón",
        "Heinner Santiago Suárez Prada",
        "Héctor Hugo Álvarez Cubillos",
        "Liliana De Los Ángeles Urrego Navarro",
        "Alfredo López Hernández",
        "Gloria Andrea Rosero Delaossa",
        "Carlos Roberto Pombo Urdaneta",
        "Liliana Castañeda Morales",
        "Alberto Villate París"
      ]},
      { grupo: "Apoyo técnico y editorial", personas: [
        "Universidad de Pamplona",
        "Secretaría Técnica – Secretaría Distrital de Planeación",
        "María Angélica Ríos Cobas — Jefe de la Oficina de Participación y Diálogo de Ciudad"
      ]}
    ],
    // Tabla de contenido. "p" = página del PDF donde empieza la sección.
    contenido: [
      { capitulo: "Preliminares", secciones: [
        { t: "Agradecimientos", p: 4 },
        { t: "Editorial", p: 11, a: "Stella Jacqueline Hernández Leguizamón" },
        { t: "Nota editorial y criterios de lectura", p: 15 }
      ]},
      { capitulo: "1. Presentación del CTPD", p: 17, secciones: [
        { n: "1.1", t: "Historia y marco normativo del CTPD", p: 17 },
        { n: "1.2", t: "Sectores y representaciones", p: 22 },
        { n: "1.3", t: "Conformación y designación de integrantes", p: 23 },
        { n: "1.4", t: "Línea de tiempo: 2019–2026", p: 24 },
        { n: "1.5", t: "Transformaciones normativas recientes", p: 24 },
        { n: "1.6", t: "Síntesis de la composición del Consejo Territorial de Planeación Distrital", p: 27 },
        { n: "1.7", t: "Comisiones permanentes", p: 28 },
        { n: "1.8", t: "Retos de representación, participación e incidencia", p: 29 }
      ]},
      { capitulo: "2. Conceptos emitidos por el CTPD durante la última década", p: 32, secciones: [
        { n: "2.1", t: "Síntesis Concepto Plan de Ordenamiento Territorial 2019–2031 entregado al alcalde Enrique Peñalosa", p: 32, a: "CTPD 2019 · Apoyo metodológico: Universidad Nacional de Colombia" },
        { n: "2.2", t: "Síntesis Concepto Plan de Desarrollo 2020–2023 «Un Nuevo Contrato Social y Ambiental para la Bogotá del Siglo XXI» entregado a la alcaldesa Claudia López", p: 43, a: "CTPD 2020 · Apoyo metodológico: Universidad Nacional de Colombia" },
        { n: "2.3", t: "Síntesis Concepto Plan de Ordenamiento Territorial 2021 entregado a la alcaldesa Claudia López", p: 67, a: "CTPD 2021 · Apoyo metodológico: Universidad Nacional de Colombia" },
        { n: "2.4", t: "Síntesis del Concepto Plan de Desarrollo 2024–2027 «Bogotá Camina Segura» entregado al alcalde Carlos Fernando Galán", p: 80, a: "CTPD 2024 · Apoyo metodológico: UNAD" }
      ]},
      { capitulo: "3. Experiencias territoriales de participación e incidencia", p: 116, secciones: [
        { n: "3.1", t: "Encuentro territorial de planeación en el Parque Museo del Chicó (2019)", p: 116, a: "Carlos Roberto Pombo Urdaneta" },
        { n: "3.2", t: "Gobierno abierto y participación ciudadana", p: 123, a: "Alfredo López Hernández" },
        { n: "3.3", t: "Audiencias públicas para la revisión general del POT (2021)", p: 151, a: "Liliana Castañeda Morales" },
        { n: "3.4", t: "Taller de trabajo entre el CTPD y la Secretaría Distrital de Planeación sobre participación ciudadana y planeación territorial (2022)", p: 155, a: "Alberto Villate París" },
        { n: "3.5", t: "Participación y aportes del CTPD al Sistema Nacional de Planeación", p: 159, a: "Stella Jacqueline Hernández Leguizamón" },
        { n: "3.6", t: "Trayectoria de la participación en las políticas poblacionales", p: 164, a: "Stella Jacqueline Hernández Leguizamón" },
        { n: "3.7", t: "Discusión estratégica de las funciones y responsabilidades del CTPD", p: 168, a: "Coordinaciones del CTPD · Universidad de Pamplona" },
        { n: "3.8", t: "Encuentro nacional de consejeras territoriales de planeación (2025)", p: 176, a: "Lilia Avella Bojacá" }
      ]},
      { capitulo: "4. Estudios, documentos y memorias del CTPD", p: 186, secciones: [
        { n: "4.1", t: "La sociedad en vilo: aportes de Bogotá a la institucionalización de la participación", p: 187, a: "Alberto Villate París" },
        { n: "4.2", t: "Reflexiones de las mipymes frente al Plan Distrital de Desarrollo y al Plan de Ordenamiento Territorial", p: 197, a: "Nohora Alexandra Fonseca Murcia" },
        { n: "4.3", t: "Estructura Ecológica Principal en el POT 2021: entre la promesa de un futuro más verde y los desafíos socioambientales de Bogotá", p: 205, a: "Liliana Castañeda Morales" },
        { n: "4.4", t: "La dimensión sociodemográfica como fundamento para la planeación territorial", p: 210, a: "Carlos Roberto Pombo Urdaneta" },
        { n: "4.5", t: "Modelo metodológico para el seguimiento y la evaluación del Plan Distrital de Desarrollo", p: 222, a: "Alberto Villate París" },
        { n: "4.6", t: "Del reconocimiento de la economía del cuidado al Sistema Distrital de Cuidado", p: 231, a: "Lilia Avella Bojacá" },
        { n: "4.7", t: "El CTPD como espacio de participación incluyente", p: 237, a: "Stella Jacqueline Hernández Leguizamón" }
      ]},
      { capitulo: "5. Visión prospectiva de ciudad y territorio", p: 246, secciones: [
        { n: "5.1", t: "Comisión del Plan de Desarrollo Distrital", p: 246, a: "Ruth Estella Domínguez Amorocho" },
        { n: "5.2", t: "Comisión de Desarrollo Regional, Descentralización y Desconcentración", p: 260, a: "Héctor Hugo Álvarez Cubillos" },
        { n: "5.3", t: "Comisión Poblacional y de concertación conceptual de Mujer, Géneros, Diversidades y Políticas Públicas", p: 276, a: "Liliana de los Ángeles Urrego Navarro" },
        { n: "5.4", t: "Comisión del Plan de Ordenamiento Territorial", p: 291, a: "Heinner Santiago Suárez Prada" },
        { n: "5.5", t: "Visión prospectiva desde la Comisión de Participación", p: 295, a: "Alfredo López Hernández y Dick Díaz" }
      ]},
      { capitulo: "6. Cierre editorial: aportes al fortalecimiento de la planeación participativa", p: 309, secciones: [
        { n: "6.1", t: "El valor de los conceptos y del conocimiento territorial", p: 309 },
        { n: "6.2", t: "Aprendizajes transversales de la participación", p: 313 },
        { n: "6.3", t: "Un horizonte compartido para Bogotá y la región", p: 315 },
        { n: "6.4", t: "Logros significativos del CTPD durante el periodo 2019–2026", p: 316 }
      ]},
      { capitulo: "Bibliografía y fuentes documentales", p: 320, secciones: [] }
    ]
  }
];
